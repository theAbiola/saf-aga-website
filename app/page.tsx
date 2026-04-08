'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCounter from '@/components/AnimatedCounter'
import Carousel from '@/components/Carousel'
import ProjectCard from '@/components/ProjectCard'
import NigeriaStateMap from '@/components/NigeriaStateMap'
import HeroCarousel from '@/components/HeroCarousel'
import { Wrench, Lightbulb, ClipboardList, Power, Percent, Building2 } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
    const [selectedState, setSelectedState] = useState<string | null>(null)
    const solutions = [
        {
            title: 'Mini-Grid Solutions',
            description: 'Transform rural communities with reliable 24/7 solar power that reduces costs by up to 60%.',
            image: '🔋',
        },
        {
            title: 'Professional Energy Audit',
            description: 'Discover hidden energy savings through detailed audits identifying inefficiencies and opportunities.',
            image: '📊',
        },
    ]

    const strategicCapabilities = [
        {
            title: 'Advisory & Development',
            description: 'Feasibility studies, ESG impact analysis, and regulatory guidance.',
        },
        {
            title: 'Engineering & Operations',
            description: 'Complete EPC delivery, asset management, and remote monitoring.',
        },
        {
            title: 'Community Electrification',
            description: 'Design-build-operate models for rural communities.',
        },
    ]

    const featuredProjects = [
        {
            id: 'katsina-mini-grid-2024',
            title: 'Katsina Community Mini-Grid',
            location: 'Katsina Town, Katsina State',
            state: 'Katsina',
            capacity: '250 kWp',
            beneficiaries: 8500,
            type: 'mini-grid',
            status: 'completed' as const,
            image: '/solar-panel1.jpg',
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
            status: 'completed' as const,
            image: '/solar-panel2.jpg',
            description: '500kW captive solar system reducing energy costs by 65% for 200-company tech hub.',
        },
        {
            id: 'enugu-university-solar',
            title: 'Enugu State University Campus',
            location: 'Enugu, Enugu State',
            state: 'Enugu',
            capacity: '350 kWp',
            beneficiaries: 15000,
            type: 'educational',
            status: 'completed' as const,
            image: '/solar-panel3.jpg',
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
            status: 'ongoing' as const,
            image: '/solar-panel2.jpg',
            description: 'Large-scale commercial solar reducing operating costs for retail and office complex.',
        },
    ]

    return (
        <>
            <Header />
            <HeroCarousel />
            <PageContainer>
                {/* About & Services Section */}
                <section className="section-spacing bg-primary-green">
                    <div className="section-container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Left Side - About Company */}
                            <div className="text-white flex flex-col justify-center">
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                    SAF-AGA<br />Renewable Energy Limited
                                </h2>
                                <p className="text-lg leading-relaxed mb-8 text-white/95">
                                    Powering Nigeria with dependable renewable energy systems that help households, industries, and governments unlock sustainable growth. From strategy to implementation, our team manages every stage of the clean energy lifecycle.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl leading-none">•</span>
                                        <span className="text-white/90">Community-first electrification strategies built with local partners</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl leading-none">•</span>
                                        <span className="text-white/90">Complete engineering for solar PV, hybrid mini-grids, and storage</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl leading-none">•</span>
                                        <span className="text-white/90">Performance monitoring, O&M, and training for long-term reliability</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side - How We Support */}
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-8 text-white/90">
                                    HOW WE SUPPORT YOUR ENERGY TRANSITION
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Card 1 */}
                                    <div className="border border-white/30 rounded-2xl p-6 hover:border-white/60 transition-colors duration-300">
                                        <h4 className="text-xl font-semibold mb-3 text-white">Advisory & Audits</h4>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            Site assessments, energy modelling, and regulatory guidance to chart the best path forward.
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="border border-white/30 rounded-2xl p-6 hover:border-white/60 transition-colors duration-300">
                                        <h4 className="text-xl font-semibold mb-3 text-white">Engineering & Delivery</h4>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            Design, procurement, installation, and commissioning of high-performance solar and storage assets.
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="border border-white/30 rounded-2xl p-6 hover:border-white/60 transition-colors duration-300">
                                        <h4 className="text-xl font-semibold mb-3 text-white">Operations & Growth</h4>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            Managed services and training that keep systems productive and communities powered.
                                        </p>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="border border-white/30 rounded-2xl p-6 hover:border-white/60 transition-colors duration-300">
                                        <h4 className="text-xl font-semibold mb-3 text-white">Investment Support</h4>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            Business models and financing structures tuned for rapid scale and measurable impact.
                                        </p>
                                    </div>
                                </div>
                                <Link href="/about">
                                    <button className="mt-8 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg bg-dark-green hover:bg-white/10 transition-colors duration-300">
                                        Learn about our mission
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Power Solutions Section */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left Side */}
                            <div>
                                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-dark-gray mb-6 leading-tight">
                                    Integrated renewable energy for every scale
                                </h2>
                                <p className="text-lg text-medium-gray leading-relaxed mb-8">
                                    Our multidisciplinary team supports governments, developers, and operators with end-to-end solar, hybrid mini-grid, and clean energy infrastructure. From concept to long term O&M, we help you unlock reliable, efficient power.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/services" className="flex-1">
                                        <button className="w-full px-8 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-dark-gray/20 transition-colors duration-300 flex items-center justify-center gap-2">
                                            View all services →
                                        </button>
                                    </Link>
                                    <Link href="/contact" className="flex-1">
                                        <button className="w-full px-8 py-3 bg-dark-green border border-white text-white font-semibold rounded-lg hover:bg-dark-gray/20 transition-colors duration-300">
                                            Partner with us
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side - Service Cards */}
                            <div className="space-y-6">
                                {/* Service 1 */}
                                <div className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-primary-green/10 group-hover:bg-primary-green transition-colors duration-300 flex items-center justify-center">
                                            <Power size={28} className="text-primary-green group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-gray mb-2">Energy As A Service</h3>
                                        <p className="text-medium-gray text-sm leading-relaxed">
                                            Pay only for the energy you use with flexible financing options that eliminate upfront capital costs and project risk.
                                        </p>
                                    </div>
                                </div>

                                {/* Service 2 */}
                                <div className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-primary-green/10 group-hover:bg-primary-green transition-colors duration-300 flex items-center justify-center">
                                            <Building2 size={28} className="text-primary-green group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-gray mb-2">Commercial & Industries</h3>
                                        <p className="text-medium-gray text-sm leading-relaxed">
                                            Custom-engineered solutions that reduce operating costs for manufacturers, distributors, and industrial facilities by up to 70%.
                                        </p>
                                    </div>
                                </div>

                                {/* Service 3 */}
                                <div className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-primary-green/10 group-hover:bg-primary-green transition-colors duration-300 flex items-center justify-center">
                                            <ClipboardList size={28} className="text-primary-green group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-gray mb-2">Operations and Maintenance</h3>
                                        <p className="text-medium-gray text-sm leading-relaxed">
                                            Maximize your renewable energy ROI with 24/7 monitoring and proactive maintenance that ensures 99%+ system uptime year-round.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Solutions Section - New Subsection with Image Cards */}
                <section className="section-spacing bg-white">
                    <div className="section-container">
                        <div className="mb-12">
                            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-dark-gray mb-6 text-center">
                                Our Solutions
                            </h2>
                            <p className="text-lg text-medium-gray text-center max-w-3xl mx-auto">
                                Tailored renewable energy solutions designed to meet the unique needs of every customer
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 - Mini-Grid Solutions */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                    <Image
                                        src="/solar-panel1.jpg"
                                        alt="Mini-Grid Solutions"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                                        <h4 className="text-white font-bold text-lg">POWER SOLUTIONS</h4>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-dark-gray mb-3">Mini-Grid Solutions</h3>
                                    <p className="text-medium-gray text-sm leading-relaxed mb-6">
                                        Transform rural communities with reliable 24/7 solar power that reduces costs by up to 60% and creates lasting economic opportunities.
                                    </p>
                                    <Link href="/services/mini-grid-solutions">
                                        <button className="w-full py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-dark-green transition-colors duration-300">
                                            See solution details →
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Card 2 - Professional Energy Audit */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                    <Image
                                        src="/solar-panel3.jpg"
                                        alt="Professional Energy Audit"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                                        <h4 className="text-white font-bold text-lg">CONSULTING</h4>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-dark-gray mb-3">Professional Energy Audit</h3>
                                    <p className="text-medium-gray text-sm leading-relaxed mb-6">
                                        Discover hidden energy savings worth thousands of naira through detailed audits that identify inefficiencies and optimization opportunities.
                                    </p>
                                    <Link href="/services/professional-energy-audit">
                                        <button className="w-full py-3 border border-dark-gray text-dark-gray font-semibold rounded-lg hover:bg-dark-gray/5 transition-colors duration-300">
                                            See solution details →
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Card 3 - Lease to Own */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                    <Image
                                        src="/solar-panel4.jpg"
                                        alt="Lease to Own"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                                        <h4 className="text-white font-bold text-lg">FINANCING</h4>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-dark-gray mb-3">Lease to Own</h3>
                                    <p className="text-medium-gray text-sm leading-relaxed mb-6">
                                        Transition from leasing to ownership with installment plans that grow with your energy savings and help you achieve full asset ownership.
                                    </p>
                                    <Link href="/services/lease-to-own">
                                        <button className="w-full py-3 border border-dark-gray text-dark-gray font-semibold rounded-lg hover:bg-dark-gray/5 transition-colors duration-300">
                                            See solution details →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
                    <div className="section-container">
                        <SectionHeading
                            title={selectedState ? `Projects in ${selectedState}` : "Featured Projects"}
                            subtitle={selectedState ? `Completed and ongoing projects in ${selectedState}` : "Transforming communities across Nigeria"}
                        />
                        <Carousel
                            items={featuredProjects
                                .filter(project => !selectedState || project.state === selectedState)
                                .map((project) => (
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
                                        image={project.image}
                                        description={project.description}
                                    />
                                ))}
                            autoRotate={true}
                            rotateInterval={6000}
                            itemsPerSlide={3}
                        />
                        <div className="text-center mt-12">
                            {selectedState && (
                                <button
                                    onClick={() => setSelectedState(null)}
                                    className="inline-block px-8 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-dark-green transition-colors mr-4"
                                >
                                    Clear Filter
                                </button>
                            )}
                            <p className="text-medium-gray mb-6">Want to see all our projects?</p>
                            <a
                                href="/projects"
                                className="inline-block px-8 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-dark-green transition-colors"
                            >
                                View All Projects →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Nigeria State Map Section */}
                <section className="section-spacing bg-white">
                    <div className="section-container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Left Side - Content */}
                            <div className="flex flex-col justify-start">
                                <div className="mb-6">
                                    <p className="inline-block bg-primary-green/20 text-primary-green px-3 py-1 rounded-full text-sm font-semibold mb-4 text-xs">
                                        OUR REACH
                                    </p>
                                </div>
                                <h2 className="text-4xl font-bold text-dark-gray mb-4 leading-tight">
                                    Electrifying Progress Across the Nation
                                </h2>
                                <p className="text-base text-medium-gray leading-relaxed mb-8">
                                    From Abuja to the coastlines, we deliver reliable clean energy solutions that transform lives and empower communities.
                                </p>

                                {/* Statistics Cards */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-white rounded-lg p-4 shadow border-2 border-gray-200">
                                        <div
                                            className="text-xl font-bold mb-1"
                                            style={{ color: '#001BB7' }}
                                        >
                                            12+
                                        </div>
                                        <div className="text-xs text-medium-gray">STATES</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow border-2 border-gray-200">
                                        <div className="text-xl font-bold text-dark-gray mb-1">
                                            50+
                                        </div>
                                        <div className="text-xs text-medium-gray">PROJECTS</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow border-2 border-gray-200">
                                        <div className="text-xl font-bold text-dark-gray mb-1">
                                            20K+
                                        </div>
                                        <div className="text-xs text-medium-gray">HOUSEHOLDS</div>
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="bg-white rounded-lg shadow p-4 mb-4 border-2 border-gray-200">
                                    <h3 className="font-bold text-dark-gray mb-3 text-xs">Legend</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#001BB7' }}></div>
                                            <span className="text-xs text-medium-gray">Active Projects</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#e5e7eb' }}></div>
                                            <span className="text-xs text-medium-gray">Coming Soon</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full border-2" style={{ borderColor: '#001BB7' }}></div>
                                            <span className="text-xs text-medium-gray">Branch/Office</span>
                                        </div>
                                    </div>
                                </div>

                                {selectedState && (
                                    <div className="mb-4 p-3 bg-primary-green/10 border border-primary-green/30 rounded-lg flex items-center justify-between">
                                        <span className="text-sm font-medium text-primary-green">
                                            Filtered by: <strong>{selectedState}</strong>
                                        </span>
                                        <button
                                            onClick={() => setSelectedState(null)}
                                            className="text-xs bg-primary-green text-white px-3 py-1 rounded hover:bg-dark-green transition-colors"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                )}
                                <p className="text-xs text-medium-gray">💡 Click any green state to filter projects</p>
                            </div>

                            {/* Right Side - Map Only */}
                            <div>
                                <NigeriaStateMap
                                    projects={featuredProjects}
                                    onStateSelect={(state) => setSelectedState(state)}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section - Redesigned */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container relative">
                        <div className="absolute -top-12 right-8">
                            <Link href="/about#team">
                                <button className="bg-primary-green text-white font-semibold px-4 py-2 rounded-lg hover:bg-dark-green transition-colors duration-300 flex items-center gap-2 text-sm">
                                    Learn about our leadership →
                                </button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
                            {/* Left Content */}
                            <div>
                                <div className="mb-8">
                                    <h2 className="text-4xl font-bold text-dark-gray mb-4">
                                        Why trust<br />
                                        <span className="bg-dark-green text-white mt-2 px-4 py-2 inline-block rounded-lg">
                                            SAF-AGA Renewable Energy?
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-6 mb-8">
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        We are a Nigerian-born company advancing equitable energy access through robust renewable infrastructure.
                                    </p>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        Our field teams, engineers, and financing partners work hand-in-hand to deliver energy security and economic opportunity.
                                    </p>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        By coupling technology with local insights, we deploy solutions that perform in the toughest operating environments.
                                    </p>
                                </div>

                                {/* Strategic Capabilities */}
                                <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200">
                                    <h3 className="text-primary-green font-bold tracking-wider mb-6">STRATEGIC CAPABILITIES</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-dark-gray mb-2">Advisory & development</h4>
                                            <p className="text-sm text-slate-700 leading-relaxed">
                                                Feasibility, ESG impact studies, regulatory navigation, and project structuring.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-gray mb-2">Engineering & operations</h4>
                                            <p className="text-sm text-slate-700 leading-relaxed">
                                                EPC delivery, asset management, remote monitoring, and lifecycle optimisation.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/projects" className="flex-1">
                                        <button className="w-full px-6 py-3 border border-dark-gray text-dark-gray font-semibold rounded-lg hover:bg-dark-gray/5 transition-colors duration-300">
                                            Explore our impact case studies
                                        </button>
                                    </Link>
                                    <Link href="/contact" className="flex-1">
                                        <button className="w-full px-6 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-dark-green transition-colors duration-300">
                                            Discuss your energy roadmap →
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right - Image Section with Cards */}
                            <div>
                                <div className="relative h-[368px] lg:h-[442px] rounded-3xl overflow-hidden shadow-lg mb-8">
                                    <Image
                                        src="/solar-panel4.jpg"
                                        alt="SAF-AGA Renewable Energy Team"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4 max-w-sm">
                                            <p className="text-dark-gray text-sm leading-relaxed font-medium">
                                                We deploy skilled engineers nationwide, building climate-resilient micro-grids that power households, schools, and enterprise hubs.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability Cards */}
                                <div className="space-y-4">
                                    {/* Card 1 */}
                                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                                        <h4 className="font-bold text-dark-gray text-lg mb-2">Community electrification</h4>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Design-build-operate models for rural communities integrating solar PV, storage, and productive-use assets.
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                                        <h4 className="font-bold text-dark-gray text-lg mb-2">Commercial solar programs</h4>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Hybrid systems that stabilize operations for manufacturing, healthcare, telecom, and public infrastructure.
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                                        <h4 className="font-bold text-dark-gray text-lg mb-2">Capacity building</h4>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Training technicians, project owners, and community operatives to maintain sustainable energy assets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="section-spacing bg-gray-100">
                    <div className="section-container">
                        <div className="text-center mb-12">
                            <div className="inline-block mb-4">
                                <span className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                                    Trusted Partnerships
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-gray-900">Powering Progress Together</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                Collaborating with leading organizations and government agencies across Nigeria and Beyond
                            </p>
                        </div>

                        {/* Scrolling Partners Container - Row 1 */}
                        <div className="overflow-hidden mb-8">
                            <style>{`
                                @keyframes scroll-left {
                                    0% {
                                        transform: translateX(0);
                                    }
                                    100% {
                                        transform: translateX(-50%);
                                    }
                                }
                                @keyframes scroll-left-reverse {
                                    0% {
                                        transform: translateX(-50%);
                                    }
                                    100% {
                                        transform: translateX(0);
                                    }
                                }
                                .partners-scroll {
                                    display: flex;
                                    animation: scroll-left 20s linear infinite;
                                    width: 200%;
                                }
                                .partners-scroll-reverse {
                                    display: flex;
                                    animation: scroll-left-reverse 20s linear infinite;
                                    width: 200%;
                                }
                                .partners-scroll:hover,
                                .partners-scroll-reverse:hover {
                                    animation-play-state: paused;
                                }
                            `}</style>
                            <div className="partners-scroll">
                                {/* First set of logos */}
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <div
                                        key={`logo-1-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src="/SAF-AGA-Logo.png"
                                            alt={`Partner Logo ${index}`}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <div
                                        key={`logo-2-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src="/SAF-AGA-Logo.png"
                                            alt={`Partner Logo ${index}`}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scrolling Partners Container - Row 2 (scrolling reverse) */}
                        <div className="overflow-hidden mb-8">
                            <div className="partners-scroll-reverse">
                                {/* First set of logos */}
                                {[1, 2, 3, 4].map((index) => (
                                    <div
                                        key={`logo-row2-1-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src="/SAF-AGA-Logo.png"
                                            alt={`Partner Logo ${index}`}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {[1, 2, 3, 4].map((index) => (
                                    <div
                                        key={`logo-row2-2-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src="/SAF-AGA-Logo.png"
                                            alt={`Partner Logo ${index}`}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* View All Partners Button */}
                        <div className="flex justify-center">
                            <Link href="/about#all-partners">
                                <Button
                                    variant="secondary"
                                    className="!border-dark-green !text-white !bg-dark-green hover:!bg-primary-green hover:!border-primary-green"
                                >
                                    View All Partners →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to explore sustainable energy solutions?</h2>
                        <p className="text-lg mb-8 text-green-50">Let's discuss your energy roadmap and find the perfect solution for your needs.</p>
                        <Button variant="secondary" className="!border-white !text-white bg-dark-green hover:!bg-primary-green hover:!border-white/80">
                            Get Started
                        </Button>
                    </div>
                </section>
            </PageContainer >
            <Footer />
        </>
    )
}
