import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import SectionHeading from '@/components/SectionHeading'
import { notFound } from 'next/navigation'

interface ProjectDetailsPageProps {
    params: {
        id: string
    }
}

// Simplified project data with key details
const projectsData: { [key: string]: any } = {
    'katsina-mini-grid-2024': {
        title: 'Katsina Community Mini-Grid',
        state: 'Katsina State',
        location: 'Katsina Town, Katsina State',
        category: 'Mini-Grid Solutions',
        status: 'Completed',
        yearCompleted: 2024,
        capacity: '250 kWp',
        beneficiaries: 8500,
        investment: '₦52.5M',
        powerGeneration: '450,000 kWh/year',
        co2Offset: '180 tonnes/year',
        image: '🔋',
    },
    'lagos-tech-park-solar': {
        title: 'Lagos Tech Park Corporate Solar',
        state: 'Lagos State',
        location: 'Victoria Island, Lagos',
        category: 'Captive Power Solutions',
        status: 'Completed',
        yearCompleted: 2023,
        capacity: '500 kWp',
        beneficiaries: 1200,
        investment: '₦105M',
        powerGeneration: '900,000 kWh/year',
        co2Offset: '360 tonnes/year',
        image: '⚡',
    },
    'abuja-hospital-solar': {
        title: 'Abuja Federal Medical Centre Solar',
        state: 'FCT',
        location: 'Gwagwalada, Abuja',
        category: 'Healthcare Solutions',
        status: 'Completed',
        yearCompleted: 2024,
        capacity: '150 kWp',
        beneficiaries: 5000,
        investment: '₦31.5M',
        powerGeneration: '270,000 kWh/year',
        co2Offset: '108 tonnes/year',
        image: '🏥',
    },
    'ikorodu-streetlighting': {
        title: 'Ikorodu Smart Solar Streetlighting',
        state: 'Lagos',
        location: 'Ikorodu Town, Lagos',
        category: 'Streetlighting Solutions',
        status: 'Completed',
        yearCompleted: 2023,
        capacity: '80 kWp',
        beneficiaries: 25000,
        investment: '₦16.8M',
        powerGeneration: '144,000 kWh/year',
        co2Offset: '57.6 tonnes/year',
        image: '💡',
    },
    'kaduna-agricultural-irrigation': {
        title: 'Kaduna Agricultural Irrigation',
        state: 'Kaduna',
        location: 'Zaria, Kaduna State',
        category: 'Agricultural Solutions',
        status: 'Ongoing',
        capacity: '120 kWp',
        beneficiaries: 450,
        investment: '₦25.2M',
        powerGeneration: '216,000 kWh/year',
        co2Offset: '86.4 tonnes/year',
        image: '🌾',
    },
    'enugu-university-solar': {
        title: 'Enugu State University Campus',
        state: 'Enugu',
        location: 'Enugu, Enugu State',
        category: 'Educational Solutions',
        status: 'Completed',
        yearCompleted: 2024,
        capacity: '350 kWp',
        beneficiaries: 15000,
        investment: '₦73.5M',
        powerGeneration: '630,000 kWh/year',
        co2Offset: '252 tonnes/year',
        image: '📚',
    },
    'port-harcourt-commercial': {
        title: 'Port Harcourt Commercial Complex',
        state: 'Rivers',
        location: 'Port Harcourt, Rivers',
        category: 'Commercial Solutions',
        status: 'Ongoing',
        capacity: '420 kWp',
        beneficiaries: 2000,
        investment: '₦88.2M',
        powerGeneration: '756,000 kWh/year',
        co2Offset: '302.4 tonnes/year',
        image: '🏢',
    },
    'ibadan-school-electrification': {
        title: 'Ibadan Secondary School Network',
        state: 'Oyo',
        location: 'Ibadan, Oyo State',
        category: 'Educational Solutions',
        status: 'Completed',
        yearCompleted: 2023,
        capacity: '180 kWp',
        beneficiaries: 8000,
        investment: '₦37.8M',
        powerGeneration: '324,000 kWh/year',
        co2Offset: '129.6 tonnes/year',
        image: '🎓',
    },
    'bauchi-mini-grid-expansion': {
        title: 'Bauchi Rural Community Mini-Grid',
        state: 'Bauchi',
        location: 'Gwoza, Bauchi State',
        category: 'Mini-Grid Solutions',
        status: 'Completed',
        yearCompleted: 2023,
        capacity: '180 kWp',
        beneficiaries: 6200,
        investment: '₦37.8M',
        powerGeneration: '324,000 kWh/year',
        co2Offset: '129.6 tonnes/year',
        image: '🔋',
    },
    'akure-streetlighting-phase2': {
        title: 'Akure Smart Streetlighting Phase 2',
        state: 'Ondo',
        location: 'Akure, Ondo State',
        category: 'Streetlighting Solutions',
        status: 'Ongoing',
        capacity: '95 kWp',
        beneficiaries: 35000,
        investment: '₦19.95M',
        powerGeneration: '171,000 kWh/year',
        co2Offset: '68.4 tonnes/year',
        image: '💡',
    },
    'calabar-micro-hydro': {
        title: 'Calabar Healthcare Facility',
        state: 'Cross River',
        location: 'Calabar, Cross River',
        category: 'Healthcare Solutions',
        status: 'Completed',
        yearCompleted: 2024,
        capacity: '100 kWp',
        beneficiaries: 3000,
        investment: '₦21M',
        powerGeneration: '180,000 kWh/year',
        co2Offset: '72 tonnes/year',
        image: '🏥',
    },
    'Jos-tech-startup-hub': {
        title: 'Jos Tech Innovation Hub',
        state: 'Plateau',
        location: 'Jos, Plateau State',
        category: 'Commercial Solutions',
        status: 'Planned',
        capacity: '200 kWp',
        beneficiaries: 850,
        investment: '₦42M',
        powerGeneration: '360,000 kWh/year',
        co2Offset: '144 tonnes/year',
        image: '🚀',
    },
}

export default function ProjectDetail({ params }: ProjectDetailsPageProps) {
    const project = projectsData[params.id]

    if (!project) {
        notFound()
    }

    const statusColors: { [key: string]: string } = {
        Completed: 'bg-primary-green',
        Ongoing: 'bg-blue-500',
        Planned: 'bg-gray-400',
    }

    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-5xl">{project.image}</div>
                            <div>
                                <div
                                    className={`inline-block px-3 py-1 ${statusColors[project.status] || 'bg-primary-green'} text-white text-sm font-semibold rounded-full mb-3`}
                                >
                                    {project.status}
                                </div>
                                <p className="text-sm text-medium-gray mb-2">{project.category}</p>
                            </div>
                        </div>
                        <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-4">{project.title}</h1>
                        <p className="text-xl text-medium-gray">
                            {project.location} • {project.yearCompleted || 'Ongoing'}
                        </p>
                    </div>
                </section>

                {/* Key Metrics */}
                <section className="section-spacing">
                    <div className="section-container">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-green">
                                <p className="text-sm text-medium-gray mb-2 font-semibold">CAPACITY</p>
                                <p className="text-2xl font-bold text-primary-green">{project.capacity}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-green">
                                <p className="text-sm text-medium-gray mb-2 font-semibold">BENEFICIARIES</p>
                                <p className="text-2xl font-bold text-primary-green">{project.beneficiaries.toLocaleString()}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-green">
                                <p className="text-sm text-medium-gray mb-2 font-semibold">ANNUAL GENERATION</p>
                                <p className="text-2xl font-bold text-primary-green">{project.powerGeneration}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-green">
                                <p className="text-sm text-medium-gray mb-2 font-semibold">CO₂ OFFSET</p>
                                <p className="text-2xl font-bold text-primary-green">{project.co2Offset}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-green">
                                <p className="text-sm text-medium-gray mb-2 font-semibold">INVESTMENT</p>
                                <p className="text-2xl font-bold text-primary-green">{project.investment}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Summary */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading title="Project Overview" centered={false} />
                        <div className="space-y-6 text-medium-gray">
                            <p className="text-lg leading-relaxed">
                                {project.title} is a landmark renewable energy initiative that transforms energy access and economic opportunity in {project.state}. This project
                                demonstrates SAF-AGA Renewable Energy Limited's commitment to delivering sustainable, scalable solar solutions tailored to local community needs.
                            </p>
                            <p className="text-lg leading-relaxed">
                                With a capacity of {project.capacity} and beneficial impact to {project.beneficiaries.toLocaleString()} people, the project combines cutting-edge
                                solar technology with local capacity building. The system generates approximately {project.powerGeneration} annually while offsetting {project.co2Offset}{' '}
                                of CO₂ emissions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Impact Areas */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Impact & Results" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-primary-green/10 to-primary-green/5 p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Community Empowerment</h3>
                                <p className="text-medium-gray">
                                    Direct access to reliable renewable energy for {project.beneficiaries.toLocaleString()} community members, enabling improved
                                    livelihoods and economic development.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-primary-green/10 to-primary-green/5 p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Environmental Benefit</h3>
                                <p className="text-medium-gray">
                                    Annual carbon offset of {project.co2Offset} through clean energy generation, contributing to global climate change mitigation efforts.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-primary-green/10 to-primary-green/5 p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Economic Sustainability</h3>
                                <p className="text-medium-gray">
                                    Long-term operational efficiency and local job creation through skilled operator training and maintenance employment opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Specifications */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading title="Technical Specifications" centered={false} />
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-6 bg-white rounded-lg border-l-4 border-primary-green">
                                <span className="text-3xl">☀️</span>
                                <div>
                                    <h3 className="font-semibold text-dark-gray">Solar Generation Capacity</h3>
                                    <p className="text-medium-gray">{project.capacity} of high-efficiency monocrystalline panels with 25-year warranty</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-white rounded-lg border-l-4 border-primary-green">
                                <span className="text-3xl">🔋</span>
                                <div>
                                    <h3 className="font-semibold text-dark-gray">Battery Storage</h3>
                                    <p className="text-medium-gray">Advanced lithium battery system ensuring 8-12 hours of backup power during night hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-white rounded-lg border-l-4 border-primary-green">
                                <span className="text-3xl">📊</span>
                                <div>
                                    <h3 className="font-semibold text-dark-gray">Smart Control System</h3>
                                    <p className="text-medium-gray">MPPT controllers and load management optimizing distribution and system efficiency</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-white rounded-lg border-l-4 border-primary-green">
                                <span className="text-3xl">📡</span>
                                <div>
                                    <h3 className="font-semibold text-dark-gray">Remote Monitoring</h3>
                                    <p className="text-medium-gray">24/7 IoT monitoring with predictive maintenance alerts and real-time performance tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-3xl font-bold mb-4">Interested in a Similar Project?</h2>
                        <p className="text-lg mb-8 text-green-50">
                            Let's discuss how SAF-AGA Renewable Energy Limited can bring renewable energy solutions to your community or organization.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-white text-primary-green font-semibold rounded-lg hover:bg-off-white transition"
                        >
                            Schedule a Consultation
                        </a>
                    </div>
                </section>

                {/* Navigation */}
                <section className="section-spacing">
                    <div className="section-container">
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-dark-green transition"
                        >
                            ← Back to All Projects
                        </a>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}

export function generateStaticParams() {
    return Object.keys(projectsData).map((id) => ({
        id,
    }))
}
