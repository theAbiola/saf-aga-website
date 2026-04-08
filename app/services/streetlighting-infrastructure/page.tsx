import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
    title: 'Streetlighting Infrastructure Solutions - SAF-AGA Renewable Energy Limited',
    description: 'Modern solar streetlighting systems that improve safety, connectivity, and quality of life in communities and municipalities across Nigeria.',
}

export default function StreetlightingInfrastructure() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Streetlighting Infrastructure</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Transform communities with modern solar streetlighting. Enhance safety, enable commerce, reduce crime, and improve quality of life in both urban and rural areas.
                            </p>
                            <Button variant="primary">Request Infrastructure Proposal</Button>
                        </div>
                    </div>
                </section>

                {/* Impact & Importance */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Why Street Lighting Matters"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Reliable street lighting is fundamental to community development. It transforms non-functioning streets into safe, secure spaces that enable commerce, education, and social activity at night. Poor or absent street lighting contributes to security risks, limits economic activity, and reduces quality of life.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            Our solar streetlighting solutions provide modern, sustainable infrastructure that improves community safety, supports local economies, and demonstrates commitment to sustainable development—all without ongoing utility costs.
                        </p>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Key Benefits" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="heading-3 text-lg mb-3">Enhanced Safety & Security</h3>
                                <p className="text-medium-gray">Well-lit streets dramatically reduce crime, accidents, and security incidents while improving community perception and trust.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="heading-3 text-lg mb-3">Economic Development</h3>
                                <p className="text-medium-gray">Enables evening commerce, street vendors, transportation, and services—unlocking new economic opportunities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="heading-3 text-lg mb-3">Educational Opportunity</h3>
                                <p className="text-medium-gray">Enables evening study, homework, and educational activities—improving schooling outcomes.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🌱</div>
                                <h3 className="heading-3 text-lg mb-3">Sustainable Infrastructure</h3>
                                <p className="text-medium-gray">Solar-powered systems eliminate fuel costs, grid dependency, and environmental impact.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">💰</div>
                                <h3 className="heading-3 text-lg mb-3">Zero Operating Costs</h3>
                                <p className="text-medium-gray">After initial installation, enjoy 15+ years of operation with minimal maintenance and no electricity bills.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="heading-3 text-lg mb-3">Smart Connectivity</h3>
                                <p className="text-medium-gray">IoT-enabled systems provide remote monitoring, adaptive lighting, and data-driven maintenance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* System Types */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Streetlight System Options" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border border-light-gray p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Solar Post Lights</h3>
                                <p className="text-medium-gray mb-6">Individual solar-powered streetlights ideal for streets, pathways, and community spaces.</p>
                                <div className="space-y-2 text-sm text-medium-gray">
                                    <p>✓ 10-80W LED options</p>
                                    <p>✓ Integrated solar panels</p>
                                    <p>✓ Battery backup (8-12hrs)</p>
                                    <p>✓ Motion sensors available</p>
                                </div>
                            </div>
                            <div className="border border-light-gray p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Integrated Systems</h3>
                                <p className="text-medium-gray mb-6">All-in-one poles combining lighting, solar, and battery in single installation.</p>
                                <div className="space-y-2 text-sm text-medium-gray">
                                    <p>✓ Standard & high-output models</p>
                                    <p>✓ Easy installation</p>
                                    <p>✓ Minimal wiring needed</p>
                                    <p>✓ Cost-effective deployment</p>
                                </div>
                            </div>
                            <div className="border border-light-gray p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Smart Grid Systems</h3>
                                <p className="text-medium-gray mb-6">Networked streetlights with central monitoring and intelligent controls.</p>
                                <div className="space-y-2 text-sm text-medium-gray">
                                    <p>✓ Centralized management</p>
                                    <p>✓ Adaptive lighting</p>
                                    <p>✓ Real-time monitoring</p>
                                    <p>✓ Data-driven optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Implementation Process"
                            centered={false}
                        />
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Survey & Planning</h3>
                                    <p className="text-medium-gray">Map street networks, assess lighting needs, calculate coverage requirements, plan pole placement.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Site Preparation</h3>
                                    <p className="text-medium-gray">Clear areas, prepare foundations, coordinate with local authorities for street permits.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">3</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Installation</h3>
                                    <p className="text-medium-gray">Install poles and lighting units, complete electrical connections, configure settings.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">4</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Testing & Commissioning</h3>
                                    <p className="text-medium-gray">Verify operation, adjust settings, setup monitoring systems, conduct safety checks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">5</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Community Training</h3>
                                    <p className="text-medium-gray">Train local maintenance teams, establish maintenance schedules, handover to local authorities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specifications */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Typical System Specifications" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            <div className="bg-gradient-to-br from-primary-green/5 to-transparent p-8 rounded-lg border border-primary-green/20">
                                <h3 className="heading-3 text-lg mb-4">Solar Array</h3>
                                <ul className="space-y-2 text-medium-gray text-sm">
                                    <li>• High-efficiency monocrystalline panels</li>
                                    <li>• 50-300W capacity per unit</li>
                                    <li>• Optimized for tropical climates</li>
                                    <li>• 15+ year lifespan</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-primary-green/5 to-transparent p-8 rounded-lg border border-primary-green/20">
                                <h3 className="heading-3 text-lg mb-4">LED Lighting</h3>
                                <ul className="space-y-2 text-medium-gray text-sm">
                                    <li>• 10-80W LED fixtures</li>
                                    <li>• 4000-6000K color temperature</li>
                                    <li>• High luminous efficiency</li>
                                    <li>• 50,000+ hour lifespan</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-primary-green/5 to-transparent p-8 rounded-lg border border-primary-green/20">
                                <h3 className="heading-3 text-lg mb-4">Battery Storage</h3>
                                <ul className="space-y-2 text-medium-gray text-sm">
                                    <li>• Lithium or LiFePO4 options</li>
                                    <li>• 100-400Ah capacity</li>
                                    <li>• 8-12 hours autonomy</li>
                                    <li>• 3,000+ charge cycles</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-primary-green/5 to-transparent p-8 rounded-lg border border-primary-green/20">
                                <h3 className="heading-3 text-lg mb-4">Controls & Monitoring</h3>
                                <ul className="space-y-2 text-medium-gray text-sm">
                                    <li>• MPPT charge controllers</li>
                                    <li>• Motion sensors optional</li>
                                    <li>• Remote monitoring capability</li>
                                    <li>• Schematic documentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Target Applications */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Where We Deploy Streetlighting" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="heading-3 text-lg mb-2">Urban Streets</h3>
                                <p className="text-medium-gray text-sm">City roads, major thoroughfares, and urban pathways</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="heading-3 text-lg mb-2">Community Roads</h3>
                                <p className="text-medium-gray text-sm">Village main streets and community gathering spaces</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="heading-3 text-lg mb-2">School Campuses</h3>
                                <p className="text-medium-gray text-sm">School grounds, sports fields, and educational facilities</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="heading-3 text-lg mb-2">Health Facilities</h3>
                                <p className="text-medium-gray text-sm">Hospital grounds, clinic courtyards, medical facilities</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="heading-3 text-lg mb-2">Market Areas</h3>
                                <p className="text-medium-gray text-sm">Commercial zones, market fronts, and business districts</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="heading-3 text-lg mb-2">Pathways & Parks</h3>
                                <p className="text-medium-gray text-sm">Pedestrian walkways, public parks, and recreational areas</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Bring Modern Lighting to Your Community</h2>
                        <p className="text-lg mb-8 text-green-50">Transform your streets with sustainable, reliable solar lighting infrastructure.</p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Request Street Lighting Proposal
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
