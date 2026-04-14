'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import ProjectCard from '@/components/ProjectCard'
import SectionHeading from '@/components/SectionHeading'
import NigeriaStateMap from '@/components/NigeriaStateMap'

interface Project {
    id: string
    title: string
    location: string
    state: string
    capacity: string
    beneficiaries: number
    type: string
    status: 'completed' | 'ongoing' | 'planned'
    description: string
    yearCompleted?: number
}

export default function Projects() {
    const [selectedState, setSelectedState] = useState<string>('all')
    const [selectedType, setSelectedType] = useState<string>('all')
    const [selectedStatus, setSelectedStatus] = useState<string>('all')

    // Sample project data - replace with real data or CMS
    const projects: Project[] = [
        {
            id: 'katsina-mini-grid-2024',
            title: 'Katsina Community Mini-Grid',
            location: 'Katsina Town, Katsina State',
            state: 'Katsina',
            capacity: '250 kWp',
            beneficiaries: 8500,
            type: 'mini-grid',
            status: 'completed',
            yearCompleted: 2024,
            description: 'Solar mini-grid serving 8,500 people with 24/7 reliable power for homes and small businesses.',
        },
        {
            id: 'lagos-tech-park-solar',
            title: 'Lagos Tech Park Corporate Solar',
            location: 'VI, Lagos',
            state: 'Lagos',
            capacity: '500 kWp',
            beneficiaries: 1200,
            type: 'commercial',
            status: 'completed',
            yearCompleted: 2023,
            description: '500kW captive solar system reducing energy costs by 65% for 200-company tech hub.',
        },
        {
            id: 'abuja-hospital-solar',
            title: 'Abuja Federal Medical Centre',
            location: 'Gwagwalada, Abuja',
            state: 'FCT',
            capacity: '150 kWp',
            beneficiaries: 5000,
            type: 'healthcare',
            status: 'completed',
            yearCompleted: 2024,
            description: 'Solar + battery backup ensuring 24/7 power for critical medical operations.',
        },
        {
            id: 'ikorodu-streetlighting',
            title: 'Ikorodu Town Solar Streetlighting',
            location: 'Ikorodu, Lagos',
            state: 'Lagos',
            capacity: '80 kWp',
            beneficiaries: 25000,
            type: 'streetlighting',
            status: 'completed',
            yearCompleted: 2023,
            description: 'Smart solar streetlighting across 12km of main roads improving safety and commerce.',
        },
        {
            id: 'kaduna-agricultural-irrigation',
            title: 'Kaduna Agricultural Irrigation',
            location: 'Zaria, Kaduna State',
            state: 'Kaduna',
            capacity: '120 kWp',
            beneficiaries: 450,
            type: 'industrial',
            status: 'ongoing',
            description: 'Solar-powered irrigation system for 450 farmers across 300 hectares.',
        },
        {
            id: 'enugu-university-solar',
            title: 'Enugu State University Campus',
            location: 'Enugu, Enugu State',
            state: 'Enugu',
            capacity: '350 kWp',
            beneficiaries: 15000,
            type: 'educational',
            status: 'completed',
            yearCompleted: 2024,
            description: '350kW solar system powering academic buildings, hostels and administrative offices.',
        },
        {
            id: 'port-harcourt-commercial',
            title: 'Port Harcourt Commercial Complex',
            location: 'Port Harcourt, Rivers',
            state: 'Rivers',
            capacity: '420 kWp',
            beneficiaries: 2000,
            type: 'commercial',
            status: 'ongoing',
            description: 'Large-scale commercial solar reducing operating costs for retail and office complex.',
        },
        {
            id: 'ibadan-school-electrification',
            title: 'Ibadan Secondary School Network',
            location: 'Ibadan, Oyo State',
            state: 'Oyo',
            capacity: '180 kWp',
            beneficiaries: 8000,
            type: 'educational',
            status: 'completed',
            yearCompleted: 2023,
            description: 'Solar system across 6 secondary schools enabling evening study and IT labs.',
        },
        {
            id: 'bauchi-mini-grid-expansion',
            title: 'Bauchi Rural Community Mini-Grid',
            location: 'Gwoza, Bauchi State',
            state: 'Bauchi',
            capacity: '180 kWp',
            beneficiaries: 6200,
            type: 'mini-grid',
            status: 'completed',
            yearCompleted: 2023,
            description: 'Mini-grid powering health center, school and market with solar + battery storage.',
        },
        {
            id: 'akure-streetlighting-phase2',
            title: 'Akure Smart Streetlighting Phase 2',
            location: 'Akure, Ondo State',
            state: 'Ondo',
            capacity: '95 kWp',
            beneficiaries: 35000,
            type: 'streetlighting',
            status: 'ongoing',
            description: 'Expansion of IoT-enabled solar streetlighting across additional 8km of roads.',
        },
        {
            id: 'calabar-micro-hydro',
            title: 'Calabar Healthcare Facility',
            location: 'Calabar, Cross River',
            state: 'Cross River',
            capacity: '100 kWp',
            beneficiaries: 3000,
            type: 'healthcare',
            status: 'completed',
            yearCompleted: 2024,
            description: 'Hybrid solar system providing reliable power for primary health center.',
        },
        {
            id: 'Jos-tech-startup-hub',
            title: 'Jos Tech Innovation Hub',
            location: 'Jos, Plateau State',
            state: 'Plateau',
            capacity: '200 kWp',
            beneficiaries: 850,
            type: 'commercial',
            status: 'planned',
            description: 'Solar system for emerging tech ecosystem supporting 85+ startups.',
        },
    ]

    const states = ['all', ...Array.from(new Set(projects.map((p) => p.state))).sort()]
    const types = [
        'all',
        ...Array.from(new Set(projects.map((p) => p.type)))
            .sort()
            .map((t) => t),
    ]
    const statuses = ['all', 'completed', 'ongoing', 'planned']

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const stateMatch = selectedState === 'all' || project.state === selectedState
            const typeMatch = selectedType === 'all' || project.type === selectedType
            const statusMatch = selectedStatus === 'all' || project.status === selectedStatus
            return stateMatch && typeMatch && statusMatch
        })
    }, [selectedState, selectedType, selectedStatus])

    const stats = {
        total: projects.length,
        completed: projects.filter((p) => p.status === 'completed').length,
        ongoing: projects.filter((p) => p.status === 'ongoing').length,
        capacity: projects.reduce((sum, p) => {
            const kWp = parseInt(p.capacity.replace(/[^0-9]/g, ''))
            return sum + kWp
        }, 0),
        beneficiaries: projects.reduce((sum, p) => sum + p.beneficiaries, 0),
    }

    const typeLabels: { [key: string]: string } = {
        'mini-grid': 'Mini-Grid',
        'captive-power': 'Captive Power',
        streetlighting: 'Streetlighting',
        industrial: 'Industrial',
        commercial: 'Commercial',
        healthcare: 'Healthcare',
        educational: 'Educational',
    }

    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section
                    className="pt-24 pb-12 bg-cover bg-center bg-no-repeat relative min-h-[500px] flex items-center"
                    style={{
                        backgroundImage: 'url(/images/solar-background.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="section-container relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6 text-white">Our Projects</h1>
                            <p className="text-xl text-white/90 mb-6">
                                Explore our portfolio of 50+ completed and ongoing renewable energy projects across Nigeria's 36 states.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section-spacing">
                    <div className="section-container">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <p className="text-3xl font-bold text-primary-green">{stats.total}</p>
                                <p className="text-sm text-medium-gray">Total Projects</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                                <p className="text-3xl font-bold text-green-500">{stats.completed}</p>
                                <p className="text-sm text-medium-gray">Completed</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                                <p className="text-3xl font-bold text-blue-500">{stats.ongoing}</p>
                                <p className="text-sm text-medium-gray">Ongoing</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <p className="text-3xl font-bold text-primary-green">{stats.capacity}+ MW</p>
                                <p className="text-sm text-medium-gray">Total Capacity</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <p className="text-3xl font-bold text-primary-green">{stats.beneficiaries.toLocaleString()}</p>
                                <p className="text-sm text-medium-gray">People Served</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nigeria State Map Section */}
                <section className="section-spacing bg-gradient-to-b from-white to-off-white">
                    <div className="section-container">
                        <SectionHeading
                            title="Projects by State"
                            subtitle="Interactive map showing project distribution across Nigeria"
                        />
                        <NigeriaStateMap
                            projects={projects}
                            onStateSelect={(state) => {
                                if (state !== 'all') {
                                    setSelectedState(state)
                                }
                            }}
                        />
                    </div>
                </section>

                {/* Filters Section */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Filter Projects" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* State Filter */}
                            <div>
                                <label className="block text-sm font-semibold text-dark-gray mb-2">By State</label>
                                <select
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                >
                                    {states.map((state) => (
                                        <option key={state} value={state}>
                                            {state === 'all' ? 'All States' : state}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Type Filter */}
                            <div>
                                <label className="block text-sm font-semibold text-dark-gray mb-2">By Type</label>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                >
                                    {types.map((type) => (
                                        <option key={type} value={type}>
                                            {type === 'all' ? 'All Types' : typeLabels[type] || type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div>
                                <label className="block text-sm font-semibold text-dark-gray mb-2">By Status</label>
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                >
                                    {statuses.map((status) => (
                                        <option key={status} value={status}>
                                            {status === 'all'
                                                ? 'All Status'
                                                : status.charAt(0).toUpperCase() + status.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-6 text-sm text-medium-gray">
                            Showing {filteredProjects.length} of {projects.length} projects
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="section-spacing">
                    <div className="section-container">
                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        location={project.location}
                                        state={project.state}
                                        capacity={project.capacity}
                                        beneficiaries={project.beneficiaries}
                                        type={project.type}
                                        status={project.status}
                                        description={project.description}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-lg text-medium-gray">No projects match your filters.</p>
                                <button
                                    onClick={() => {
                                        setSelectedState('all')
                                        setSelectedType('all')
                                        setSelectedStatus('all')
                                    }}
                                    className="mt-4 text-primary-green font-semibold hover:text-dark-green transition"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
                        <p className="text-lg mb-8 text-green-50 max-w-2xl mx-auto">
                            Let's discuss how SAF-AGA Renewable Energy Limited can help you achieve your energy transformation goals.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-white text-primary-green font-semibold rounded-lg hover:bg-off-white transition"
                        >
                            Start Your Project
                        </a>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
