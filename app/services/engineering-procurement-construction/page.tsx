import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
    title: 'Engineering, Procurement & Construction Services - SAF-AGA Renewable Energy Limited',
    description: 'Complete turnkey solar solutions from engineering design through installation. Professional project management for large-scale energy projects across Nigeria.',
}

export default function EngineeringProcurementConstruction() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Engineering, Procurement & Construction</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Turnkey solutions for large-scale solar projects. From design to installation to commissioning—we manage every aspect of your energy transformation.
                            </p>
                            <Button variant="primary">Get Project Consultation</Button>
                        </div>
                    </div>
                </section>

                {/* EPC Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What is EPC?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            EPC (Engineering, Procurement, and Construction) is a comprehensive approach to delivering large-scale energy projects. As your single point of contact, we handle everything: designing the optimal system for your needs, sourcing equipment from verified suppliers, managing construction, testing, and delivering a fully operational facility.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            This turnkey approach eliminates coordination challenges, reduces project risk, and ensures quality at every stage. You get a guaranteed end-to-end solution, not a collection of disparate services.
                        </p>
                    </div>
                </section>

                {/* Four Phases */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Our Integrated EPC Process" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-8 rounded-lg text-center">
                                <div className="text-5xl mb-4">🏗️</div>
                                <h3 className="heading-3 text-lg mb-3">Engineering</h3>
                                <p className="text-sm text-medium-gray">Design optimization, feasibility studies, technical specifications</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg text-center">
                                <div className="text-5xl mb-4">📦</div>
                                <h3 className="heading-3 text-lg mb-3">Procurement</h3>
                                <p className="text-sm text-medium-gray">Equipment sourcing, quality assurance, supply chain management</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg text-center">
                                <div className="text-5xl mb-4">👷</div>
                                <h3 className="heading-3 text-lg mb-3">Construction</h3>
                                <p className="text-sm text-medium-gray">Installation, integration, testing, quality control</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg text-center">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="heading-3 text-lg mb-3">Commissioning</h3>
                                <p className="text-sm text-medium-gray">Performance testing, handover, training, warranty</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed EPC Services */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Complete EPC Services" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="heading-3 text-lg mb-4">Engineering Phase</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Site assessment and space analysis</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Load analysis and consumption modeling</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">System design and capacity planning</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Structural engineering review</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Electrical design and schematics</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Regulatory compliance planning</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="heading-3 text-lg mb-4">Procurement Phase</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Quality-approved supplier sourcing</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Competitive bidding and negotiation</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Equipment procurement and logistics</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Quality inspection upon delivery</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Warranty and support agreements</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Cost-effective supply management</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Construction & Commissioning */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="heading-3 text-lg mb-4">Construction Phase</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Project site preparation</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Equipment installation and integration</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Infrastructure setup (cabling, mounting)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Connection to building/grid systems</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Health & safety compliance</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Project schedule management</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="heading-3 text-lg mb-4">Commissioning Phase</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">System testing and verification</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Performance validation against specs</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Operator training and documentation</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Monitoring system setup</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">Warranty and support activation</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary-green">✓</span>
                                        <span className="text-dark-gray">System handover to customer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Types */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Project Types We Execute" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white border border-light-gray p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏭</div>
                                <h3 className="heading-3 text-lg mb-3">Industrial Projects</h3>
                                <p className="text-medium-gray text-sm">Large-scale manufacturing plants and industrial facilities (500kW - 5MW+)</p>
                            </div>
                            <div className="bg-white border border-light-gray p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏥</div>
                                <h3 className="heading-3 text-lg mb-3">Healthcare Facilities</h3>
                                <p className="text-medium-gray text-sm">Hospitals, clinics, and medical centers requiring critical backup power</p>
                            </div>
                            <div className="bg-white border border-light-gray p-8 rounded-lg">
                                <div className="text-4xl mb-4">🎓</div>
                                <h3 className="heading-3 text-lg mb-3">Educational Institutions</h3>
                                <p className="text-medium-gray text-sm">Universities, colleges, and educational campuses with campus-wide needs</p>
                            </div>
                            <div className="bg-white border border-light-gray p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏢</div>
                                <h3 className="heading-3 text-lg mb-3">Commercial Complexes</h3>
                                <p className="text-medium-gray text-sm">Multi-building commercial zones and business parks</p>
                            </div>
                            <div className="bg-white border border-light-gray p-8 rounded-lg">
                                <div className="text-4xl mb-4">📡</div>
                                <h3 className="heading-3 text-lg mb-3">Infrastructure Projects</h3>
                                <p className="text-medium-gray text-sm">Telecom towers, water treatment, and critical infrastructure</p>
                            </div>
                            <div className="bg-white border border-light-gray p-8 rounded-lg">
                                <div className="text-4xl mb-4">🌳</div>
                                <h3 className="heading-3 text-lg mb-3">Community Projects</h3>
                                <p className="text-medium-gray text-sm">Microgrids and grid infrastructure for rural electrification</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Our EPC */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading title="Why Choose ACOB EPC Services" />
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">🎯</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Single Point of Responsibility</h3>
                                    <p className="text-medium-gray">One unified contract, one accountable party for quality and timeline</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">⏱️</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Faster Project Delivery</h3>
                                    <p className="text-medium-gray">Integrated approach eliminates coordination delays and bottlenecks</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">💰</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Cost Control</h3>
                                    <p className="text-medium-gray">Transparent fixed pricing, no hidden costs or surprise change orders</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">✨</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Guaranteed Quality</h3>
                                    <p className="text-medium-gray">Rigorous testing and performance guarantees with contractual backing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready for Your Next Energy Project?</h2>
                        <p className="text-lg mb-8 text-green-50">Let us manage the complete journey from design to operation.</p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Start EPC Consultation
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
