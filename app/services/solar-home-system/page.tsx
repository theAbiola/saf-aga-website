import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'

export const metadata = {
    title: 'Solar Home System - SAF-AGA Renewable Energy Limited',
    description: 'Affordable solar power solutions for homes across Nigeria. Reliable electricity for families with flexible payment plans.',
}

export default function SolarHomeSystem() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Solar Home System</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Bring reliable, affordable solar power to your home. Break free from unreliable grid supply and expensive diesel generators. Our Solar Home Systems provide 24/7 electricity with flexible payment plans designed for Nigerian families.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Get Your Solar Home System</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Solar Home Systems */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Why Solar Home Systems?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Nigeria's grid is unreliable. Power outages disrupt daily life, impact productivity, and force families to spend thousands of naira on diesel generators—an expensive and polluting solution. Solar Home Systems offer a better way.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            Our Solar Home Systems are designed specifically for Nigerian families. They provide 24/7 clean, reliable electricity, reduce your energy costs by up to 70%, and come with flexible payment options that fit your budget. No more blackouts. No more generator fuel costs.
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Benefits of Solar Home Systems" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">24/7 Reliable Power</h3>
                                <p className="text-medium-gray text-sm">Solar panels charge during the day; battery storage powers your home through the night. No more depending on the grid.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Save Money</h3>
                                <p className="text-medium-gray text-sm">Reduce energy costs by up to 70%. No more expensive generator fuel or high electricity tariffs.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Environment Friendly</h3>
                                <p className="text-medium-gray text-sm">Clean renewable energy with zero emissions. Help protect the environment while powering your home.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Flexible Payments</h3>
                                <p className="text-medium-gray text-sm">Affordable monthly installments, lease-to-own options, or pay-as-you-use models. Fits your budget.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Low Maintenance</h3>
                                <p className="text-medium-gray text-sm">Simple, durable systems with minimal upkeep. Works for 25+ years with proper care.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Increase Home Value</h3>
                                <p className="text-medium-gray text-sm">Solar systems add value to your property, making it more attractive to potential buyers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* System Options */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading
                            title="Our Solar Home System Options"
                            centered={false}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                            <div className="bg-off-white p-8 rounded-lg border-2 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Basic (3-5 kWp)</h3>
                                <p className="text-sm text-medium-gray mb-4">For small homes and apartments</p>
                                <ul className="space-y-2 text-sm text-medium-gray mb-6">
                                    <li>✓ 3-5 solar panels</li>
                                    <li>✓ 48V battery system</li>
                                    <li>✓ Powers essential appliances</li>
                                    <li>✓ Day/night operation</li>
                                </ul>
                                <p className="text-primary-green font-semibold">Starting from ₦500k</p>
                            </div>
                            <div className="bg-off-white p-8 rounded-lg border-2 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Standard (8-10 kWp)</h3>
                                <p className="text-sm text-medium-gray mb-4">For average family homes</p>
                                <ul className="space-y-2 text-sm text-medium-gray mb-6">
                                    <li>✓ 8-10 solar panels</li>
                                    <li>✓ 96V battery system</li>
                                    <li>✓ Powers most appliances</li>
                                    <li>✓ Air conditioning compatible</li>
                                </ul>
                                <p className="text-primary-green font-semibold">Starting from ₦1.2M</p>
                            </div>
                            <div className="bg-off-white p-8 rounded-lg border-2 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Premium (15+ kWp)</h3>
                                <p className="text-sm text-medium-gray mb-4">For large homes and small businesses</p>
                                <ul className="space-y-2 text-sm text-medium-gray mb-6">
                                    <li>✓ 15+ solar panels</li>
                                    <li>✓ 192V battery system</li>
                                    <li>✓ Powers all appliances</li>
                                    <li>✓ High-capacity operation</li>
                                </ul>
                                <p className="text-primary-green font-semibold">Starting from ₦2.5M</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Installation Process */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Installation Process" />
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Free Home Assessment</h3>
                                    <p className="text-medium-gray">We visit your home, analyze your electricity needs, roof space, and budget to recommend the perfect system.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Choose Your Plan</h3>
                                    <p className="text-medium-gray">Select a system size and payment option that works for you—outright purchase, installments, or lease-to-own.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">3</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Professional Installation</h3>
                                    <p className="text-medium-gray">Our certified technicians install your system safely and efficiently—usually in 1-2 days with minimal disruption.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">4</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Training & Handover</h3>
                                    <p className="text-medium-gray">We train you on system use, maintenance, and monitoring. You now have 24/7 clean power.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">5</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Ongoing Support</h3>
                                    <p className="text-medium-gray">Remote monitoring, annual maintenance, and 24/7 customer support. Your system stays healthy for 25+ years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Options */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Flexible Payment Options"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Pay Upfront</h3>
                                <p className="text-medium-gray text-sm">Own your system outright. Lowest lifetime cost. Eligible for government subsidies.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Monthly Installments</h3>
                                <p className="text-medium-gray text-sm">Spread costs over 12-36 months. Minimum interest. Own the system after final payment.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Energy as a Service (EAAS)</h3>
                                <p className="text-medium-gray text-sm">Pay only for the electricity you use. We own and maintain the system. Predictable monthly costs.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Lease to Own</h3>
                                <p className="text-medium-gray text-sm">Lease with option to purchase. Build equity with every payment. Own after lease term.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Power Your Home with Solar?</h2>
                        <p className="text-lg mb-8 text-green-50">Schedule a free home assessment and discover how much you can save with solar.</p>
                        <Link href="/contact">
                            <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                                Schedule Free Assessment
                            </Button>
                        </Link>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
