import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'


export const metadata = {
    title: 'Operations & Maintenance Services - SAF-AGA Renewable Energy Limited',
    description: 'Comprehensive O&M services ensuring your solar systems operate at peak performance. Proactive maintenance, 24/7 support, and performance optimization.',
}

export default function OperationsAndMaintenance() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Operations & Maintenance</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Maximize your solar system's performance and lifespan with comprehensive operations, maintenance, and monitoring services. Keep your systems running at 100% efficiency.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Get Maintenance Quote</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why O&M Matters */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="The Value of Professional Operations & Maintenance"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Solar systems are sophisticated installations with many components working together. Without proper maintenance, performance degrades, unexpected failures occur, and your investment's value decreases. Professional O&M ensures your systems deliver maximum returns throughout their 25-year design life.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            Our comprehensive O&M programs combine preventive maintenance, 24/7 monitoring, rapid response, predictive analytics, and continuous optimization—giving you peace of mind and maximum performance.
                        </p>
                    </div>
                </section>

                {/* Core Services */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Our Core O&M Services" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">🔍 Monitoring & Analytics</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>24/7 remote system monitoring</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Real-time performance dashboards</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Energy production analytics</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Predictive issue detection</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Automated alert systems</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">🔧 Preventive Maintenance</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Scheduled equipment inspections</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Panel cleaning and testing</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Electrical systems verification</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Battery health assessment</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Structural integrity checks</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">🚨 Emergency Response</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>24/7 emergency hotline</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Rapid mobilization team</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Same-day fault diagnosis</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Emergency repairs</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Equipment replacement</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">📈 Performance Optimization</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>System efficiency tuning</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Quarterly performance reviews</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Software updates & upgrades</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>Capacity planning</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✓</span>
                                        <span>ROI analysis & reporting</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Tiers */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Service Package Options" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border border-light-gray p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Basic Monitoring</h3>
                                <p className="text-primary-green font-semibold mb-4">Budget-Friendly</p>
                                <p className="text-medium-gray mb-6">Remote monitoring and quarterly inspections.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Remote monitoring</li>
                                    <li>✓ Quarterly site visits</li>
                                    <li>✓ Email alerts</li>
                                    <li>✓ Basic support</li>
                                    <li>✗ Emergency response</li>
                                </ul>
                            </div>
                            <div className="border-2 border-primary-green p-8 rounded-lg bg-gradient-to-b from-primary-green/5 to-transparent">
                                <div className="inline-block px-3 py-1 bg-primary-green text-white text-xs font-bold rounded mb-4">RECOMMENDED</div>
                                <h3 className="heading-3 text-lg mb-4">Comprehensive Care</h3>
                                <p className="text-primary-green font-semibold mb-4">Best Value</p>
                                <p className="text-medium-gray mb-6">Proactive monitoring and frequent maintenance.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ 24/7 monitoring</li>
                                    <li>✓ Monthly site visits</li>
                                    <li>✓ SMS & email alerts</li>
                                    <li>✓ Priority support</li>
                                    <li>✓ 24h emergency response</li>
                                </ul>
                            </div>
                            <div className="border border-light-gray p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Premium Support</h3>
                                <p className="text-primary-green font-semibold mb-4">Complete Protection</p>
                                <p className="text-medium-gray mb-6">Intensive management and predictive optimization.</p>
                                <ul className="space-y-2 text-sm text-medium-gray">
                                    <li>✓ Real-time monitoring</li>
                                    <li>✓ Weekly site inspections</li>
                                    <li>✓ Predictive analytics</li>
                                    <li>✓ Dedicated account manager</li>
                                    <li>✓ Same-day emergency response</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Maintenance Schedule */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Preventive Maintenance Schedule"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary-green pl-6 py-4">
                                <h3 className="font-semibold text-dark-gray mb-2">Monthly Tasks</h3>
                                <p className="text-medium-gray text-sm">Remote monitoring review, alert checking, basic performance analysis</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 py-4">
                                <h3 className="font-semibold text-dark-gray mb-2">Quarterly Tasks</h3>
                                <p className="text-medium-gray text-sm">Site visit, panel cleaning, electrical system testing, battery health check, software updates</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 py-4">
                                <h3 className="font-semibold text-dark-gray mb-2">Semi-Annual Tasks</h3>
                                <p className="text-medium-gray text-sm">Comprehensive performance audit, thermal imaging inspection, load balancing review</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 py-4">
                                <h3 className="font-semibold text-dark-gray mb-2">Annual Tasks</h3>
                                <p className="text-medium-gray text-sm">Full system testing, warranty review, financial reporting, ROI analysis, upgrade recommendations</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monitoring Technology */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Advanced Monitoring Technology" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="heading-3 text-lg mb-6">Real-Time Dashboard</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="text-2xl">📊</span>
                                        <div>
                                            <p className="font-semibold text-dark-gray mb-1">Live Performance Metrics</p>
                                            <p className="text-sm text-medium-gray">View current power output, consumption, and battery status in real-time</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-2xl">📱</span>
                                        <div>
                                            <p className="font-semibold text-dark-gray mb-1">Mobile Access</p>
                                            <p className="text-sm text-medium-gray">Monitor your system from anywhere, anytime via mobile app or web portal</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-2xl">🔔</span>
                                        <div>
                                            <p className="font-semibold text-dark-gray mb-1">Instant Alerts</p>
                                            <p className="text-sm text-medium-gray">Receive immediate notifications of any anomalies or issues</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="heading-3 text-lg mb-6">Predictive Analytics</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="text-2xl">🔮</span>
                                        <div>
                                            <p className="font-semibold text-dark-gray mb-1">Fault Prediction</p>
                                            <p className="text-sm text-medium-gray">AI-powered analysis predicts potential failures before they occur</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-2xl">📈</span>
                                        <div>
                                            <p className="font-semibold text-dark-gray mb-1">Performance Trends</p>
                                            <p className="text-sm text-medium-gray">Analyze historical data to optimize future operations and maintenance</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-2xl">💡</span>
                                        <div>
                                            <p className="font-semibold text-dark-gray mb-1">Smart Recommendations</p>
                                            <p className="text-sm text-medium-gray">Receive actionable insights to improve efficiency and identify upgrades</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support & Response */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Support Response Guarantees"
                            centered={false}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Issue Diagnosis</h3>
                                <p className="text-primary-green font-bold text-2xl mb-3">4 Hours</p>
                                <p className="text-medium-gray">Initial remote diagnosis for reported issues</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">On-Site Response</h3>
                                <p className="text-primary-green font-bold text-2xl mb-3">24 Hours</p>
                                <p className="text-medium-gray">Emergency support team mobilization (in most areas)</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Issue Resolution</h3>
                                <p className="text-primary-green font-bold text-2xl mb-3">72 Hours</p>
                                <p className="text-medium-gray">Most issues repaired within 3 business days</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <h3 className="heading-3 text-lg mb-4">Full Availability</h3>
                                <p className="text-primary-green font-bold text-2xl mb-3">24/7/365</p>
                                <p className="text-medium-gray">Round-the-clock emergency support without interruption</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reporting & Communication */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Transparent Reporting"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">📋</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Quarterly Reports</h3>
                                    <p className="text-medium-gray">Detailed performance summaries, maintenance logs, and recommendations</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">💰</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Financial Analysis</h3>
                                    <p className="text-medium-gray">Cost savings achieved, ROI tracking, and long-term projections</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">🌱</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Impact Metrics</h3>
                                    <p className="text-medium-gray">Environmental benefits, carbon offset, and sustainability achievements</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">👥</div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Dedicated Account Manager</h3>
                                    <p className="text-medium-gray">Your personal point of contact for questions, concerns, and optimization discussions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Protect Your Solar Investment</h2>
                        <p className="text-lg mb-8 text-green-50">Ensure maximum performance and longevity with professional operations and maintenance.</p>
                        <Link href="/contact">
                            <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                                Get O&M Quote
                            </Button>
                        </Link>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
