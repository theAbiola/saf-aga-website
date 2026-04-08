import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
    title: 'Professional Energy Audit - SAF-AGA Renewable Energy Limited',
    description: 'Discover hidden energy waste with our comprehensive energy audits. Identify cost-saving opportunities and optimize your facility efficiency.',
}

export default function ProfessionalEnergyAudit() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Professional Energy Audit</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Discover exactly where your facility is losing money. Our expert energy audits reveal hidden inefficiencies and deliver actionable solutions to reduce costs by 30-50%.
                            </p>
                            <Button variant="primary">Schedule Your Audit</Button>
                        </div>
                    </div>
                </section>

                {/* What is an Energy Audit */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What is an Energy Audit?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            An energy audit is a comprehensive assessment of how your facility consumes electrical energy. Our certified auditors analyze your buildings, equipment, systems, and usage patterns to identify opportunities for cost reduction and efficiency improvement.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            The result is a detailed, personalized report that ranks savings opportunities by cost-benefit ratio, payback period, and environmental impact—giving you a clear roadmap to energy savings.
                        </p>
                    </div>
                </section>

                {/* Three-Level Audit Packages */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Energy Audit Packages" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Level 1: Walk-Through</h3>
                                <p className="text-sm text-medium-gray mb-4">Quick assessment</p>
                                <p className="text-medium-gray mb-6">Visual inspection and preliminary recommendations for cost-effective improvements.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Site visit (2-4 hours)</li>
                                    <li>✓ Basic analysis</li>
                                    <li>✓ Quick-win recommendations</li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Level 2: Standard</h3>
                                <p className="text-sm text-medium-gray mb-4">Comprehensive analysis</p>
                                <p className="text-medium-gray mb-6">Detailed energy survey with utility billing analysis and energy modeling projections.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Full facility survey</li>
                                    <li>✓ Utility analysis</li>
                                    <li>✓ Equipment testing</li>
                                    <li>✓ Detailed report</li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Level 3: Investment Grade</h3>
                                <p className="text-sm text-medium-gray mb-4">Financing-ready analysis</p>
                                <p className="text-medium-gray mb-6">Precision measurements and analysis suitable for securing financing for major energy projects.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Precision measurements</li>
                                    <li>✓ Engineering analysis</li>
                                    <li>✓ ROI calculations</li>
                                    <li>✓ Financing support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audit Process */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Our Audit Process"
                            centered={false}
                        />
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Initial Consultation</h3>
                                    <p className="text-medium-gray">Review your facility type, size, usage patterns, and specific concerns.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">On-Site Assessment</h3>
                                    <p className="text-medium-gray">Our auditors conduct detailed facility walk-through, measuring equipment efficiency and system performance.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">3</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Billing Analysis</h3>
                                    <p className="text-medium-gray">Examine 12-24 months of utility bills to identify consumption patterns and anomalies.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">4</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Detailed Analysis</h3>
                                    <p className="text-medium-gray">Model energy usage, calculate savings potential, and rank recommendations by payback period.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">5</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Report & Presentation</h3>
                                    <p className="text-medium-gray">Receive comprehensive report with findings, recommendations, and implementation timeline.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Analyze */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="What We Analyze" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Building Systems</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <span>🔌</span>
                                        <span>Lighting systems & controls</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>❄️</span>
                                        <span>HVAC & cooling systems</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>♻️</span>
                                        <span>Ventilation & air quality</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>💧</span>
                                        <span>Water heating systems</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Operational Factors</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <span>📊</span>
                                        <span>Peak load patterns</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>⏰</span>
                                        <span>Operating schedules</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>🔧</span>
                                        <span>Equipment maintenance</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>👥</span>
                                        <span>Behavioral factors</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Your Results */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What You Get"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2">Detailed Report</h3>
                                <p className="text-medium-gray">Executive summary, findings, 20-50 ranked recommendations with cost-benefit analysis</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2">Financial Projections</h3>
                                <p className="text-medium-gray">Potential savings, implementation costs, payback periods, ROI analysis, and financing options</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2">Implementation Support</h3>
                                <p className="text-medium-gray">Phase recommendations, project timeline, contractor sourcing, and project management assistance</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2">Monitoring Setup</h3>
                                <p className="text-medium-gray">Baseline data and recommendations for ongoing energy tracking and performance verification</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Discover Your Energy Savings Potential</h2>
                        <p className="text-lg mb-8 text-green-50">Get a free initial consultation and learn what you can save.</p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Request Energy Audit
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
