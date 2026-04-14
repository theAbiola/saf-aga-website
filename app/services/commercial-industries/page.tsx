import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import { CheckCircle, Building2, DollarSign, Zap, BarChart3, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Commercial & Industries Solutions - SAF-AGA Renewable Energy Limited',
    description: 'Custom-engineered solar solutions that reduce operating costs for manufacturers, distributors, and industrial facilities.',
}

export default function CommercialIndustries() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Commercial & Industrial Solutions</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Custom-engineered solar solutions that reduce operating costs for manufacturers, distributors, and industrial facilities by up to 70%.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Get Energy Assessment</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Industrial-Grade Solar Solutions"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Businesses face rising energy costs that directly impact profitability. Our commercial and industrial solar solutions are engineered for maximum uptime, reliability, and cost savings. We design systems that handle demanding loads while providing battery backup for critical operations.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            From small manufacturing facilities to large warehouses and distribution centers, we deliver turnkey solar solutions with monitoring, maintenance, and financing options that fit your business needs.
                        </p>
                    </div>
                </section>

                {/* Industries We Serve */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Industries We Serve" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Building2 className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Manufacturing</h3>
                                <p className="text-medium-gray text-sm">Reduce production costs and improve margins with reliable solar power for equipment and climate control.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Zap className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Distribution & Logistics</h3>
                                <p className="text-medium-gray text-sm">Power warehouses, cold storage, and material handling equipment efficiently with solar energy.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <BarChart3 className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Retail & Commercial</h3>
                                <p className="text-medium-gray text-sm">Reduce energy costs for shopping centers, offices, and hospitality facilities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Users className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Agro-Processing</h3>
                                <p className="text-medium-gray text-sm">Optimize costs for food processing, packaging, and agricultural facilities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <DollarSign className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Financial Services</h3>
                                <p className="text-medium-gray text-sm">Power office operations while demonstrating corporate sustainability commitment.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Any High-Energy User</h3>
                                <p className="text-medium-gray text-sm">Custom solutions for businesses with unique energy requirements and constraints.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Our Commercial Solution Approach" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">1</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Energy Audit & Analysis</h3>
                                            <p className="text-medium-gray">Detailed assessment of your energy consumption patterns, peak loads, and cost structures to identify savings opportunities.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">2</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Custom System Design</h3>
                                            <p className="text-medium-gray">Engineering your system for maximum efficiency, with battery storage for backup power and peak shaving.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">3</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Installation & Integration</h3>
                                            <p className="text-medium-gray">Professional installation with minimal business disruption, integrated with existing infrastructure.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">4</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">24/7 Monitoring & Support</h3>
                                            <p className="text-medium-gray">Real-time system monitoring, predictive maintenance, and rapid response to any issues.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/solar-panel1.jpg"
                                    alt="Commercial Solar Installation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Business Benefits" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">30-70% Energy Cost Reduction</h3>
                                <p className="text-medium-gray text-sm">Significant savings on operating expenses with payback periods typically under 5 years.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Enhanced Resilience</h3>
                                <p className="text-medium-gray text-sm">Battery backup ensures operations continue during grid outages—critical for manufacturing and logistics.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Improved Competitiveness</h3>
                                <p className="text-medium-gray text-sm">Lower energy costs make your products more competitive in the market.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Corporate Sustainability Goals</h3>
                                <p className="text-medium-gray text-sm">Demonstrate commitment to ESG objectives and meet customer sustainability requirements.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Financing Flexibility</h3>
                                <p className="text-medium-gray text-sm">Multiple options: purchase, lease, or Energy as a Service model—choose what fits your business.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Minimal Maintenance</h3>
                                <p className="text-medium-gray text-sm">Systems require minimal upkeep with 25+ year lifespan and our comprehensive support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-spacing">
                    <div className="section-container text-center max-w-2xl mx-auto">
                        <h2 className="heading-2 text-3xl mb-6">Transform Your Energy Strategy</h2>
                        <p className="text-lg text-medium-gray mb-8">
                            Get a free energy audit and discover exactly how much you can save with commercial solar.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary">Request Free Energy Audit</Button>
                        </Link>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
