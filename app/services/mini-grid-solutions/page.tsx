import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
    title: 'Mini-Grid Solutions - SAF-AGA Renewable Energy Limited',
    description: 'Transform rural communities with reliable 24/7 solar power that reduces costs by up to 60%.',
}

export default function MiniGridSolutions() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Mini-Grid Solutions</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Transform rural communities with reliable 24/7 solar power that reduces costs by up to 60% and creates lasting economic opportunities.
                            </p>
                            <Button variant="primary">Request a Consultation</Button>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What are Mini-Grid Solutions?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Mini-grids are small-scale electricity systems that generate, store, and distribute renewable energy to isolated communities. Our hybrid solar mini-grids combine photovoltaic systems, energy storage, and smart management to provide reliable power to rural areas without access to the main grid.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            We design, build, and operate mini-grids that serve households, SMEs, schools, and health facilities, creating economic opportunities while advancing energy security.
                        </p>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Key Benefits" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">💰</div>
                                <h3 className="heading-3 text-lg mb-3">Cost Reduction</h3>
                                <p className="text-medium-gray">Reduce energy costs by up to 60% compared to diesel generators.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="heading-3 text-lg mb-3">24/7 Reliability</h3>
                                <p className="text-medium-gray">Battery storage ensures continuous power availability day and night.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🌍</div>
                                <h3 className="heading-3 text-lg mb-3">Environmental Impact</h3>
                                <p className="text-medium-gray">Zero emissions and reduced carbon footprint for sustainable communities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">📈</div>
                                <h3 className="heading-3 text-lg mb-3">Economic Growth</h3>
                                <p className="text-medium-gray">Enable productive use activities and business opportunities in communities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🔧</div>
                                <h3 className="heading-3 text-lg mb-3">Low Maintenance</h3>
                                <p className="text-medium-gray">Minimal operational complexity with remote monitoring capabilities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="heading-3 text-lg mb-3">Smart Management</h3>
                                <p className="text-medium-gray">Advanced control systems optimize energy distribution and demand.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Benefits */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Who Benefits from Mini-Grid Solutions?"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div>
                                <h3 className="heading-3 text-lg mb-2">Rural Communities</h3>
                                <p className="text-medium-gray">Provide electricity to underserved communities without grid access.</p>
                            </div>
                            <div>
                                <h3 className="heading-3 text-lg mb-2">Healthcare Facilities</h3>
                                <p className="text-medium-gray">Ensure reliable power for clinics, hospitals, and medical equipment.</p>
                            </div>
                            <div>
                                <h3 className="heading-3 text-lg mb-2">Educational Institutions</h3>
                                <p className="text-medium-gray">Enable digital learning and quality education in remote areas.</p>
                            </div>
                            <div>
                                <h3 className="heading-3 text-lg mb-2">Small Enterprises</h3>
                                <p className="text-medium-gray">Support SMEs with affordable, reliable power for productivity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Technical Specifications"
                            centered={false}
                        />
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg">
                                <p className="font-semibold text-dark-gray mb-2">System Sizes</p>
                                <p className="text-medium-gray">40 kWp to 350 kWp capacity configurations</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <p className="font-semibold text-dark-gray mb-2">Storage Capacity</p>
                                <p className="text-medium-gray">Large-scale lithium or lead-acid battery systems for 24/7 operation</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <p className="font-semibold text-dark-gray mb-2">Coverage</p>
                                <p className="text-medium-gray">Typically serves 500-4,000+ beneficiaries per system</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <p className="font-semibold text-dark-gray mb-2">Monitoring</p>
                                <p className="text-medium-gray">Real-time remote monitoring and predictive maintenance systems</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation Process */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Our Implementation Process"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">1</div>
                                <div>
                                    <h3 className="heading-3 text-lg mb-2">Site Assessment</h3>
                                    <p className="text-medium-gray">Comprehensive site surveys and community engagement</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">2</div>
                                <div>
                                    <h3 className="heading-3 text-lg mb-2">Custom Design</h3>
                                    <p className="text-medium-gray">Engineering design tailored to community needs and resources</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">3</div>
                                <div>
                                    <h3 className="heading-3 text-lg mb-2">Procurement</h3>
                                    <p className="text-medium-gray">Supply high-quality equipment and materials</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">4</div>
                                <div>
                                    <h3 className="heading-3 text-lg mb-2">Installation</h3>
                                    <p className="text-medium-gray">Expert installation and system commissioning</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">5</div>
                                <div>
                                    <h3 className="heading-3 text-lg mb-2">Training & Operations</h3>
                                    <p className="text-medium-gray">Comprehensive training and long-term O&M support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to bring reliable power to your community?</h2>
                        <p className="text-lg mb-8 text-green-50">Let's discuss your mini-grid project and find the right solution.</p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Schedule a Consultation
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
