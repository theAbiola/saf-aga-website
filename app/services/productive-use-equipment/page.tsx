import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import { CheckCircle, Zap, Wrench, Users, Lightbulb, TrendingUp } from 'lucide-react'

export const metadata = {
    title: 'Productive Use Equipment - SAF-AGA Renewable Energy Limited',
    description: 'Empower businesses and communities with solar-powered productive equipment for agriculture, water pumping, and small enterprises.',
}

export default function ProductiveUseEquipment() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Productive Use Equipment</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Empower businesses and communities with solar-powered equipment for agriculture, water systems, and small enterprises.
                            </p>
                            <Button variant="primary">Request a Consultation</Button>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What is Productive Use Equipment?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Productive Use Equipment (PUE) refers to solar-powered appliances and machines that generate income and improve livelihoods. From irrigation pumps for farmers to ice-making units for fishing communities, solar-powered equipment eliminates fuel costs and enables economic growth in off-grid areas.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            SAF-AGA Renewable Energy Limited identifies optimal equipment solutions for each community, providing training, installation, and ongoing support to maximize economic returns and sustainability.
                        </p>
                    </div>
                </section>

                {/* Key Applications */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Key Applications" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Lightbulb className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Solar Water Pumping</h3>
                                <p className="text-medium-gray text-sm">Reliable irrigation systems powering agricultural investments in rural communities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Zap className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Cold Chain Solutions</h3>
                                <p className="text-medium-gray text-sm">Solar-powered refrigeration for food preservation and commodity aggregation centers.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Wrench className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Processing Equipment</h3>
                                <p className="text-medium-gray text-sm">Solar-powered mills, presses, and processors for agricultural enterprises.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Users className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Business Outlets</h3>
                                <p className="text-medium-gray text-sm">Mobile phone charging, welding services, and other income-generating services.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <TrendingUp className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Aquaculture Systems</h3>
                                <p className="text-medium-gray text-sm">Solar aeration and water circulation for fish farming and aquaculture expansion.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Healthcare Equipment</h3>
                                <p className="text-medium-gray text-sm">Vaccine coolers, medical refrigeration, and health center equipment powered by solar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Support PUE */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Our Productive Use Approach" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/solar-panel3.jpg"
                                    alt="Productive Use Equipment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">1</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Needs Assessment</h3>
                                            <p className="text-medium-gray">We evaluate community skills, available resources, and market demand to select optimal equipment.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">2</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">System Design & Installation</h3>
                                            <p className="text-medium-gray">Custom solar arrays sized to power equipment reliably and efficiently.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">3</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Training & Capacity Building</h3>
                                            <p className="text-medium-gray">Hands-on training for equipment operation, maintenance, and business management.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">4</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Ongoing Support</h3>
                                            <p className="text-medium-gray">Maintenance, spare parts, and technical support ensure long-term productivity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Economic & Social Benefits" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">✓ Income Generation</h3>
                                <p className="text-medium-gray text-sm">Equipment owners earn significant income while reducing operating costs through solar power.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">✓ Employment Creation</h3>
                                <p className="text-medium-gray text-sm">New jobs in operation, maintenance, and service delivery within communities.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">✓ Local Economic Development</h3>
                                <p className="text-medium-gray text-sm">Equipment attracts more businesses and entrepreneurs to the area.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">✓ Improved Livelihoods</h3>
                                <p className="text-medium-gray text-sm">Higher agricultural productivity, food security, and household incomes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">✓ Environmental Sustainability</h3>
                                <p className="text-medium-gray text-sm">Eliminates diesel fuel use and reduces carbon emissions significantly.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">✓ Community Resilience</h3>
                                <p className="text-medium-gray text-sm">Strengthens local food systems and reduces dependence on external supply chains.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-spacing">
                    <div className="section-container text-center max-w-2xl mx-auto">
                        <h2 className="heading-2 text-3xl mb-6">Unlock Economic Potential with Solar Power</h2>
                        <p className="text-lg text-medium-gray mb-8">
                            Connect your community or business with solar-powered productive equipment that generates sustainable income.
                        </p>
                        <Button variant="primary">Schedule a Free Assessment</Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
