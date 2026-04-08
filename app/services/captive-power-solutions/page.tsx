import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
    title: 'Captive Power Solutions - SAF-AGA Renewable Energy Limited',
    description: 'Cut your energy bills by 70% with custom solar systems designed for businesses, schools, and residences.',
}

export default function CaptivePowerSolutions() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Captive Power Solutions</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Cut your energy bills by 70% with custom solar systems designed for businesses, schools, healthcare facilities, and residential properties across Nigeria.
                            </p>
                            <Button variant="primary">Get Your Energy Audit</Button>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What are Captive Power Solutions?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Captive power systems are custom-designed solar installations that generate electricity directly for your facility or organization. Unlike grid-connected systems, these are tailored to meet your specific energy consumption patterns and requirements.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            Our solutions combine rooftop or ground-mounted solar panels, battery storage, and intelligent energy management systems to maximize your energy independence and minimize operational costs.
                        </p>
                    </div>
                </section>

                {/* Industries Served */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Industries We Serve" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏭</div>
                                <h3 className="heading-3 text-lg mb-3">Manufacturing</h3>
                                <p className="text-medium-gray">Reduce production costs with reliable solar power for industrial operations.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏥</div>
                                <h3 className="heading-3 text-lg mb-3">Healthcare</h3>
                                <p className="text-medium-gray">Ensure uninterrupted power for clinics, hospitals, and medical facilities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="heading-3 text-lg mb-3">Education</h3>
                                <p className="text-medium-gray">Power schools and universities with cost-effective renewable energy.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">📡</div>
                                <h3 className="heading-3 text-lg mb-3">Telecommunications</h3>
                                <p className="text-medium-gray">Stabilize operations for telecom towers and data centers.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏢</div>
                                <h3 className="heading-3 text-lg mb-3">Commercial</h3>
                                <p className="text-medium-gray">Lower operating expenses for offices, retail, and commercial buildings.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <div className="text-4xl mb-4">🏠</div>
                                <h3 className="heading-3 text-lg mb-3">Residential</h3>
                                <p className="text-medium-gray">Achieve energy independence for homes and residential complexes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Key Benefits"
                            centered={false}
                        />
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="text-2xl">💷</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-1">Up to 70% Energy Cost Reduction</h3>
                                    <p className="text-medium-gray">Immediate and long-term savings on electricity bills</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="text-2xl">✅</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-1">Zero Power Interruptions</h3>
                                    <p className="text-medium-gray">Battery backup ensures continuous operations during outages</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="text-2xl">📊</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-1">Real-Time Monitoring</h3>
                                    <p className="text-medium-gray">Track energy production and consumption via mobile app</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="text-2xl">🌱</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-1">Environmental Responsibility</h3>
                                    <p className="text-medium-gray">Reduce carbon footprint and demonstrate sustainability commitment</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="text-2xl">📈</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-1">Increased Property Value</h3>
                                    <p className="text-medium-gray">Solar systems add value to real estate and businesses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Options */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Customizable System Designs" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Rooftop Systems</h3>
                                <p className="text-medium-gray mb-4">Install solar panels on existing building roofs to maximize space utilization.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Minimal landuse requirements</li>
                                    <li>✓ Ideal for urban areas</li>
                                    <li>✓ Easy maintenance access</li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-3">Ground-Mounted Systems</h3>
                                <p className="text-medium-gray mb-4">Flexible ground installations for larger capacity requirements.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Higher capacity potential</li>
                                    <li>✓ Better cooling efficiency</li>
                                    <li>✓ Expandable designs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to cut your energy costs by 70%?</h2>
                        <p className="text-lg mb-8 text-green-50">Get a free energy audit and custom solar solution for your facility.</p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Request Free Audit
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
