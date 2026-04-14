import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import { CheckCircle, Zap, DollarSign, Clock, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Energy As A Service - SAF-AGA Renewable Energy Limited',
    description: 'Pay only for the energy you use with flexible financing options that eliminate upfront capital costs.',
}

export default function EnergyAsAService() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Energy As A Service</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Pay only for the energy you use with flexible financing options that eliminate upfront capital costs and project risk.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Request a Consultation</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What is Energy As A Service?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Energy as a Service (EaaS) is a revolutionary financing model that removes the capital burden of renewable energy installations. Instead of purchasing solar systems outright, you pay for the energy produced—much like a utility bill, but from your own clean, on-site generation.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            SAF-AGA Renewable Energy Limited handles design, installation, maintenance, and monitoring. You benefit from lower energy costs immediately, with no upfront investment, making renewable energy accessible to businesses and communities of all sizes.
                        </p>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Key Benefits" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <DollarSign className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Zero Upfront Costs</h3>
                                <p className="text-medium-gray text-sm">No capital expenditure required. SAF-AGA Renewable Energy Limited finances the entire system.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Zap className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Immediate Savings</h3>
                                <p className="text-medium-gray text-sm">Start reducing energy costs from day one with predictable, fixed energy rates.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Full Maintenance Included</h3>
                                <p className="text-medium-gray text-sm">24/7 monitoring, repairs, and maintenance handled by our expert team.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Clock className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Fast Deployment</h3>
                                <p className="text-medium-gray text-sm">Quick installation process gets you generating clean energy within weeks.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <TrendingUp className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Scalable Growth</h3>
                                <p className="text-medium-gray text-sm">Expand your system capacity as your energy needs grow.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Users className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Dedicated Support</h3>
                                <p className="text-medium-gray text-sm">Personalized service and priority support from our energy experts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="How Energy As A Service Works" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">1</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Assessment & Design</h3>
                                            <p className="text-medium-gray">We evaluate your energy needs and design a custom solar solution tailored to your facility.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">2</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Installation</h3>
                                            <p className="text-medium-gray">Our certified team handles all engineering, procurement, and installation with minimal disruption.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">3</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Monitoring & Operations</h3>
                                            <p className="text-medium-gray">24/7 remote monitoring ensures optimal performance. We handle all maintenance and repairs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">4</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Monthly Billing</h3>
                                            <p className="text-medium-gray">Pay a fixed rate per kilowatt-hour generated, just like a traditional utility.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/solar-panel2.jpg"
                                    alt="Energy As A Service Installation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Perfect For */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Perfect For" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Businesses & Manufacturers</h3>
                                <p className="text-medium-gray text-sm">Reduce operating costs by 30-70% while maintaining power security for critical operations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Educational Institutions</h3>
                                <p className="text-medium-gray text-sm">Prove institutional commitment to sustainability while controlling energy expenses.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Healthcare Facilities</h3>
                                <p className="text-medium-gray text-sm">Ensure reliable backup power for critical services without capital investment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-spacing">
                    <div className="section-container text-center max-w-2xl mx-auto">
                        <h2 className="heading-2 text-3xl mb-6">Ready to Switch to Energy As A Service?</h2>
                        <p className="text-lg text-medium-gray mb-8">
                            Let's discuss how Energy As A Service can transform your energy strategy and reduce costs without capital investment.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary">Schedule a Free Consultation</Button>
                        </Link>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
