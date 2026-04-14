import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import { Zap, BarChart3, Wrench, DollarSign, Hammer, Building2, FileText } from 'lucide-react'

export const metadata = {
    title: 'Our Services - SAF-AGA Renewable Energy Limited',
    description: 'Explore our comprehensive renewable energy solutions including mini-grid systems, solar installations, and energy audits.',
}

const services = [
    {
        id: 'mini-grid-solutions',
        title: 'Mini-Grid Solutions',
        description: 'Transform rural communities with reliable 24/7 solar power that reduces costs by up to 60%.',
        icon: Zap,
        benefits: ['24/7 Reliable Power', 'Cost Reduction', 'Community Impact'],
    },
    {
        id: 'productive-use-equipment',
        title: 'Productive Use Equipment',
        description: 'Solar-powered equipment and tools to maximize economic returns for rural communities.',
        icon: Hammer,
        benefits: ['Economic Growth', 'Community Empowerment', 'Sustainable Productivity'],
    },
    {
        id: 'energising-education',
        title: 'Energising Education',
        description: 'Provide reliable solar power to schools and educational institutions across Nigeria.',
        icon: BarChart3,
        benefits: ['Digital Learning', 'Sustainable Schools', 'Community Impact'],
    },
    {
        id: 'solar-home-system',
        title: 'Solar Home System',
        description: 'Bring reliable, affordable solar power to your home with flexible payment plans and 24/7 electricity.',
        icon: Wrench,
        benefits: ['24/7 Power', 'Cost Savings', 'Easy Installation'],
    },
    {
        id: 'energy-as-a-service',
        title: 'Energy As A Service',
        description: 'Pay only for the energy you use with flexible financing options that eliminate upfront capital costs.',
        icon: DollarSign,
        benefits: ['No Upfront Cost', 'Flexible Financing', 'Risk Elimination'],
    },
    {
        id: 'commercial-industries',
        title: 'Commercial & Industries',
        description: 'Custom-engineered solutions that reduce operating costs for manufacturers and industrial facilities by up to 70%.',
        icon: Building2,
        benefits: ['Cost Reduction', 'Custom Design', 'Industrial Grade'],
    },
    {
        id: 'lease-to-own',
        title: 'Lease to Own',
        description: 'Flexible payment plans that let you transition from leasing to full ownership over time.',
        icon: FileText,
        benefits: ['Flexible Payments', 'Ownership Path', 'Budget Friendly'],
    },
]

export default function Services() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section
                    className="pt-24 pb-12 bg-cover bg-center bg-no-repeat relative min-h-[500px] flex items-center"
                    style={{
                        backgroundImage: 'url(/images/mini-grid-1.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="section-container relative z-10">
                        <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6 text-white">Our Services</h1>
                        <p className="text-xl text-white/90 max-w-3xl">
                            Comprehensive renewable energy solutions tailored to your specific needs. From concept to implementation and beyond.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading
                            title="Integrated Renewable Energy Solutions"
                            subtitle="Powering every sector across Nigeria"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => {
                                const IconComponent = service.icon
                                return (
                                    <Link href={`/services/${service.id}`} key={service.id}>
                                        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                                            <div className="mb-4 text-primary-green">
                                                <IconComponent size={48} strokeWidth={1.5} />
                                            </div>
                                            <h3 className="heading-3 text-xl mb-3">{service.title}</h3>
                                            <p className="text-medium-gray text-sm mb-6 flex-grow">{service.description}</p>
                                            <div className="space-y-2 mb-6">
                                                {service.benefits.map((benefit, idx) => (
                                                    <p key={idx} className="text-sm text-primary-green font-medium flex items-center gap-2">
                                                        <span className="text-primary-green">✓</span> {benefit}
                                                    </p>
                                                ))}
                                            </div>
                                            <Button variant="ghost" className="text-left p-0 justify-start">
                                                Learn more →
                                            </Button>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Strategic Capabilities Section */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading
                            title="Our Strategic Capabilities"
                            subtitle="End-to-end support for your energy journey"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Advisory & Development</h3>
                                <p className="text-medium-gray text-sm">Feasibility studies, ESG impact analysis, regulatory navigation, and project structuring.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Engineering & Operations</h3>
                                <p className="text-medium-gray text-sm">Complete EPC delivery, asset management, remote monitoring, and lifecycle optimization.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Community Electrification</h3>
                                <p className="text-medium-gray text-sm">Design-build-operate models for rural communities integrating solar, storage, and productive assets.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Commercial Solar Programs</h3>
                                <p className="text-medium-gray text-sm">Hybrid systems stabilizing operations for manufacturing, healthcare, telecom, and infrastructure.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Capacity Building</h3>
                                <p className="text-medium-gray text-sm">Training technicians, project owners, and community operatives for sustainable energy asset maintenance.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Investment Support</h3>
                                <p className="text-medium-gray text-sm">Business models and financing structures tuned for rapid scale and measurable impact.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to discuss your energy needs?</h2>
                        <p className="text-lg mb-8 text-green-50">Our team is ready to help you find the perfect energy solution.</p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Get in Touch
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
