'use client'

import { useState, useMemo, useEffect } from 'react'
import * as d3 from 'd3'

interface Project {
    id: string
    state: string
    title: string
    capacity: string
    beneficiaries: number
}

interface NigeriaStateMapProps {
    projects: Project[]
    onStateSelect?: (state: string) => void
}

// State name mapping to handle variations in GeoJSON
const STATE_NAME_MAP: { [key: string]: string } = {
    'FederalCapitalTerritory': 'FCT',
    'Abia': 'Abia',
    'Adamawa': 'Adamawa',
    'AkwaIbom': 'Akwa Ibom',
    'Anambra': 'Anambra',
    'Bauchi': 'Bauchi',
    'Bayelsa': 'Bayelsa',
    'Benue': 'Benue',
    'Borno': 'Borno',
    'CrossRiver': 'Cross River',
    'Delta': 'Delta',
    'Ebonyi': 'Ebonyi',
    'Edo': 'Edo',
    'Ekiti': 'Ekiti',
    'Enugu': 'Enugu',
    'Gombe': 'Gombe',
    'Imo': 'Imo',
    'Jigawa': 'Jigawa',
    'Kaduna': 'Kaduna',
    'Kano': 'Kano',
    'Katsina': 'Katsina',
    'Kebbi': 'Kebbi',
    'Kogi': 'Kogi',
    'Kwara': 'Kwara',
    'Lagos': 'Lagos',
    'Nasarawa': 'Nasarawa',
    'Niger': 'Niger',
    'Ogun': 'Ogun',
    'Ondo': 'Ondo',
    'Osun': 'Osun',
    'Oyo': 'Oyo',
    'Plateau': 'Plateau',
    'Rivers': 'Rivers',
    'Sokoto': 'Sokoto',
    'Taraba': 'Taraba',
    'Yobe': 'Yobe',
    'Zamfara': 'Zamfara',
}

interface Tooltip {
    name: string
    projects: number
    x: number
    y: number
}

export default function NigeriaStateMap({ projects, onStateSelect }: NigeriaStateMapProps) {
    const [geoData, setGeoData] = useState<any>(null)
    const [tooltip, setTooltip] = useState<Tooltip | null>(null)
    const [hoveredState, setHoveredState] = useState<string | null>(null)

    // Add blinking animation to page styles
    useEffect(() => {
        if (!document.querySelector('style[data-blink-animation]')) {
            const style = document.createElement('style')
            style.setAttribute('data-blink-animation', 'true')
            style.textContent = `
                @keyframes blink {
                    0%, 49%, 100% {
                        opacity: 1;
                    }
                    50%, 99% {
                        opacity: 0.3;
                    }
                }
                .blink-dot {
                    animation: blink 1.5s infinite;
                }
            `
            document.head.appendChild(style)
        }
    }, [])

    // Calculate project counts per state and normalize state names
    const projectsByState = useMemo(() => {
        const counts: { [key: string]: number } = {}
        projects.forEach((project) => {
            counts[project.state] = (counts[project.state] || 0) + 1
        })
        return counts
    }, [projects])

    // Load GeoJSON data
    useEffect(() => {
        const loadGeoData = async () => {
            try {
                const response = await fetch('/gadm41_NGA_1.json')
                const data = await response.json()
                setGeoData(data)
            } catch (error) {
                console.error('Error loading GeoJSON:', error)
            }
        }
        loadGeoData()
    }, [])

    if (!geoData) {
        return <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div>
    }

    const width = 880
    const height = 680
    const projection = d3.geoMercator().fitSize([width, height], geoData)
    const pathGenerator = d3.geoPath().projection(projection)

    const handleMouseEnter = (feature: any, event: React.MouseEvent) => {
        const geoJsonStateName = feature.properties.NAME_1
        const normalizedStateName = STATE_NAME_MAP[geoJsonStateName] || geoJsonStateName
        setHoveredState(geoJsonStateName)
        const projectCount = projectsByState[normalizedStateName] || 0
        setTooltip({
            name: normalizedStateName,
            projects: projectCount,
            x: event.clientX,
            y: event.clientY,
        })
    }

    const handleMouseMove = (event: React.MouseEvent) => {
        if (tooltip) {
            setTooltip((prev) => {
                if (!prev) return null
                return {
                    ...prev,
                    x: event.clientX,
                    y: event.clientY,
                }
            })
        }
    }

    const handleMouseLeave = () => {
        setHoveredState(null)
        setTooltip(null)
    }

    const handleStateClick = (geoJsonStateName: string) => {
        const normalizedStateName = STATE_NAME_MAP[geoJsonStateName] || geoJsonStateName
        onStateSelect?.(normalizedStateName)
    }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 border-2 border-gray-200">
            <style>{`
                @keyframes blink {
                    0%, 49%, 100% {
                        opacity: 1;
                    }
                    50%, 99% {
                        opacity: 0.3;
                    }
                }
            `}</style>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto bg-gray-50 rounded-lg"
                style={{ minHeight: '500px' }}
                preserveAspectRatio="xMidYMid meet"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Background */}
                <rect width={width} height={height} fill="#f8fafc" />

                {/* State paths */}
                {geoData.features.map((feature: any) => {
                    const geoJsonStateName = feature.properties.NAME_1
                    const normalizedStateName = STATE_NAME_MAP[geoJsonStateName] || geoJsonStateName
                    const isActive = !!projectsByState[normalizedStateName]
                    const isHovered = hoveredState === geoJsonStateName
                    const pathData = pathGenerator(feature)

                    if (!pathData) return null

                    return (
                        <path
                            key={geoJsonStateName}
                            d={pathData}
                            fill={isActive ? '#001BB7' : '#e5e7eb'}
                            stroke="#000000"
                            strokeWidth={isHovered ? 2.5 : 1.5}
                            className={isActive ? "cursor-pointer transition-all duration-150" : "transition-all duration-150"}
                            style={{ opacity: isHovered ? 0.9 : 1 }}
                            onMouseEnter={(e) => handleMouseEnter(feature, e as any)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => isActive && handleStateClick(geoJsonStateName)}
                        />
                    )
                })}

                {/* Branch/Office Marker for FCT - with blinking blue dot */}
                {(() => {
                    const fct = geoData.features.find(
                        (f: any) => f.properties.NAME_1 === 'FederalCapitalTerritory'
                    )
                    if (fct) {
                        const centroid = d3.geoCentroid(fct)
                        const coords = projection(centroid)
                        if (!coords) return null
                        const [cx, cy] = coords
                        return (
                            <g>
                                {/* Outer pulsing ring - subtle fade */}
                                <circle
                                    cx={cx}
                                    cy={cy}
                                    r={10}
                                    fill="none"
                                    stroke="#001BB7"
                                    strokeWidth={1.5}
                                    opacity={0.4}
                                    style={{ animation: 'blink 1.5s infinite' }}
                                    className="pointer-events-none"
                                />
                                {/* Main blinking blue dot */}
                                <circle
                                    cx={cx}
                                    cy={cy}
                                    r={6}
                                    fill="#001BB7"
                                    style={{ animation: 'blink 1.5s infinite' }}
                                    className="pointer-events-none"
                                />
                            </g>
                        )
                    }
                    return null
                })()}
            </svg>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="fixed bg-white border-2 border-gray-300 rounded-lg shadow-xl px-4 py-3 text-sm z-50 pointer-events-none whitespace-nowrap"
                    style={{
                        left: `${Math.max(10, Math.min(tooltip.x + 14, window.innerWidth - 200))}px`,
                        top: `${Math.max(10, tooltip.y - 50)}px`,
                    }}
                >
                    <div className="font-bold text-gray-900">{tooltip.name}</div>
                    <div className="text-xs text-gray-600 mt-1">
                        {tooltip.projects} {tooltip.projects === 1 ? 'project' : 'projects'}
                    </div>
                </div>
            )}
        </div>
    )
}
