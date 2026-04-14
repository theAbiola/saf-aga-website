import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import { CheckCircle, Zap, DollarSign, Percent, TrendingUp, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Lease to Own - SAF-AGA Renewable Energy Limited',
    description: 'Transition from leasing to ownership with installment plans that grow with your energy savings.',
}

export default function LeaseToOwn() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Lease to Own</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Transition from leasing to ownership with installment plans that grow with your energy savings and help you achieve full asset ownership.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Learn About Lease to Own</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="What is Lease to Own?"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Lease to Own is the flexible path to solar ownership. Start by leasing a solar system and enjoying immediate energy savings, then transition to ownership as your finances improve. Each payment builds equity, and your growing energy savings help fund the purchase price.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            This financing model is perfect for businesses and new organizations that want to move toward clean energy without a large upfront investment. You enjoy the benefits immediately while building toward full ownership.
                        </p>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="How Lease to Own Works" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/solar-panel4.jpg"
                                    alt="Lease to Own Solar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">1</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Phase 1: Lease Period</h3>
                                            <p className="text-medium-gray">Sign a flexible lease agreement for your solar system. Enjoy reduced energy costs immediately with low monthly payments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">2</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Build Energy Savings</h3>
                                            <p className="text-medium-gray">Watch your energy bills drop significantly as your solar system generates clean power. Savings accumulate month after month.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">3</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Phase 2: Purchase Option</h3>
                                            <p className="text-medium-gray">Use your energy savings as a down payment to begin buying the system. Monthly ownership payments often equal or are less than lease payments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-lg">4</div>
                                        <div>
                                            <h3 className="heading-3 text-lg mb-2">Full Ownership</h3>
                                            <p className="text-medium-gray">After completing payments, you own the system outright, enjoying nearly-free electricity for the remaining 20+ years of system life.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Lease to Own Benefits" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-green">
                                <Zap className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Immediate Energy Savings</h3>
                                <p className="text-medium-gray text-sm">Start saving on energy costs from day one, with savings typically covering lease payments.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-green">
                                <DollarSign className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Low Upfront Costs</h3>
                                <p className="text-medium-gray text-sm">Minimal initial investment required. No large capital outlay needed to start enjoying clean energy.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-green">
                                <CheckCircle className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Full Maintenance Included</h3>
                                <p className="text-medium-gray text-sm">During lease phase, all maintenance and repairs are our responsibility. Worry-free operation.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-green">
                                <TrendingUp className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Path to Ownership</h3>
                                <p className="text-medium-gray text-sm">Build equity gradually. Your lease payments contribute toward the purchase price if you decide to buy.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-green">
                                <Percent className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Affordable Purchase Terms</h3>
                                <p className="text-medium-gray text-sm">When you're ready to buy, financing terms are designed to keep payments manageable and competitive.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-green">
                                <Award className="text-primary-green mb-4" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Long-Term Asset</h3>
                                <p className="text-medium-gray text-sm">Own an asset that generates value for 25+ years with minimal degradation and maintenance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lease vs Buy vs Lease to Own Comparison */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Find Your Best Option" />
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg shadow-lg border-collapse">
                                <thead className="bg-primary-green text-white">
                                    <tr>
                                        <th className="p-4 text-left">Feature</th>
                                        <th className="p-4 text-center">Full Lease</th>
                                        <th className="p-4 text-center">Lease to Own</th>
                                        <th className="p-4 text-center">Full Purchase</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">Upfront Cost</td>
                                        <td className="p-4 text-center text-green-600">Very Low</td>
                                        <td className="p-4 text-center text-green-600">Very Low</td>
                                        <td className="p-4 text-center text-orange-600">High</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">Monthly Payment</td>
                                        <td className="p-4 text-center">Higher</td>
                                        <td className="p-4 text-center">Moderate</td>
                                        <td className="p-4 text-center">Moderate (declining)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">Long-term Cost</td>
                                        <td className="p-4 text-center">Highest</td>
                                        <td className="p-4 text-center">Moderate</td>
                                        <td className="p-4 text-center">Lowest</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">Ownership</td>
                                        <td className="p-4 text-center">Never</td>
                                        <td className="p-4 text-center">✓ After purchase</td>
                                        <td className="p-4 text-center">✓ Immediate</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">Maintenance</td>
                                        <td className="p-4 text-center">✓ Included</td>
                                        <td className="p-4 text-center">✓ Included (lease phase)</td>
                                        <td className="p-4 text-center">Your responsibility</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Tax Benefits</td>
                                        <td className="p-4 text-center">None</td>
                                        <td className="p-4 text-center">After purchase</td>
                                        <td className="p-4 text-center">✓ Available</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Ideal For */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Lease to Own is Ideal For" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-primary-green/10 p-8 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-3">Growing Businesses</h3>
                                <p className="text-medium-gray">Companies expecting to expand energy consumption or improve financial position to eventually own their solar system.</p>
                            </div>
                            <div className="bg-primary-green/10 p-8 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-3">New Enterprises</h3>
                                <p className="text-medium-gray">Startups and new organizations that want clean energy but prefer flexibility during early growth phases.</p>
                            </div>
                            <div className="bg-primary-green/10 p-8 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-3">Community Organizations</h3>
                                <p className="text-medium-gray">NGOs, schools, and nonprofits with limited capital but clear long-term commitment to sustainability.</p>
                            </div>
                            <div className="bg-primary-green/10 p-8 rounded-lg border-l-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-3">Flexible Finance Seekers</h3>
                                <p className="text-medium-gray">Organizations wanting the option to transition from leasing to ownership as circumstances permit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container text-center max-w-2xl mx-auto">
                        <h2 className="heading-2 text-3xl mb-6">Ready to Lease to Own?</h2>
                        <p className="text-lg text-medium-gray mb-8">
                            Explore how Lease to Own can help you transition to clean, affordable solar energy while building toward full ownership.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary">Schedule a Consultation</Button>
                        </Link>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
