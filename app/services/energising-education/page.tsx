import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'

export const metadata = {
    title: 'Energising Education - SAF-AGA Renewable Energy Limited',
    description: 'Reliable solar power solutions for schools and educational institutions across Nigeria. Empower learning with sustainable energy.',
}

export default function EnergiesingEducation() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Energising Education</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Empower Nigeria's schools and educational institutions with reliable, affordable solar power. Transform learning environments and enable digital education across the nation.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Request a Consultation</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* The Challenge */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="The Challenge in Nigerian Schools"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Many schools across Nigeria lack reliable electricity, creating barriers to quality education. Power outages disrupt classes, prevent the use of learning technologies, and limit operational efficiency. Students struggle with inadequate lighting and learning resources, while institutions face unsustainable diesel generator costs.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            SAF-AGA's Energising Education program provides renewable solar solutions designed specifically for schools—ensuring 24/7 reliable power for classrooms, laboratories, administrative offices, and digital learning platforms.
                        </p>
                    </div>
                </section>

                {/* Why Schools Choose Us */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Why Schools Choose Energising Education" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Cost-Effective Operations</h3>
                                <p className="text-medium-gray text-sm">Replace expensive diesel generators with sustainable solar power, reducing operational costs by up to 80%.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Reliable Learning</h3>
                                <p className="text-medium-gray text-sm">24/7 power ensures uninterrupted classes, lab work, and access to digital learning resources and online education platforms.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Safe Environments</h3>
                                <p className="text-medium-gray text-sm">Reliable lighting improves safety on campus, enables evening study sessions, and supports 24-hour security operations.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Environmental Leadership</h3>
                                <p className="text-medium-gray text-sm">Model sustainability for students by using clean energy, reinforcing environmental stewardship in curriculum.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Government Support</h3>
                                <p className="text-medium-gray text-sm">Align with national education and sustainability goals, qualifying for government grants and donor funding.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg border-t-4 border-primary-green">
                                <h3 className="heading-3 text-lg mb-2">Long-Term Support</h3>
                                <p className="text-medium-gray text-sm">Ongoing maintenance, training, and performance monitoring ensure your system runs smoothly for 25+ years.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Solutions */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Our Education-Focused Solutions"
                            centered={false}
                        />
                        <div className="space-y-8">
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2 text-lg">Primary & Secondary School Solar Systems</h3>
                                <p className="text-medium-gray">Complete solar installations (50-200 kWp) with battery storage powering classrooms, laboratories, administration blocks, and student facilities.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2 text-lg">University Campus Solutions</h3>
                                <p className="text-medium-gray">Large-scale solar + hybrid systems (200-500+ kWp) designed for multi-building campuses with varying power demands across academic, residential, and administrative areas.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2 text-lg">Classroom & Lab-Specific Power</h3>
                                <p className="text-medium-gray">Prioritized power delivery for computer labs, science facilities, and digital learning centers—ensuring critical systems stay online during load-shedding.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6">
                                <h3 className="font-semibold text-dark-gray mb-2 text-lg">Flexible Financing Models</h3>
                                <p className="text-medium-gray">Budget-friendly payment plans, Energy-as-a-Service options, and connections to grant funding to eliminate upfront capital barriers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation Process */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="Our Implementation Process" />
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Assessment & Planning</h3>
                                    <p className="text-medium-gray">Evaluate facility power needs, roof space, budget constraints, and educational priorities to design the right system.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Funding & Approval</h3>
                                    <p className="text-medium-gray">Assist with grant applications, financing arrangements, and internal approvals to move forward smoothly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">3</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Design & Engineering</h3>
                                    <p className="text-medium-gray">Custom system design, equipment selection, and technical specifications tailored to your school's infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">4</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Installation & Commissioning</h3>
                                    <p className="text-medium-gray">Expert installation with minimal disruption to school operations. Full system testing and staff training before handover.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green text-white font-bold">5</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-gray mb-2">Operations & Support</h3>
                                    <p className="text-medium-gray">24/7 remote monitoring, regular maintenance, performance tracking, and ongoing support throughout system lifetime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Real Impact: Education Institutions We've Powered"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Enugu State University (350 kWp)</h3>
                                <p className="text-medium-gray text-sm">Solar system powering academic buildings, hostels, and administrative offices. Eliminates power outages and saves ~₦25M annually on generator fuel.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Port Harcourt Secondary School (100 kWp)</h3>
                                <p className="text-medium-gray text-sm">Reliable power for 40+ classrooms, computer lab, and science facilities. Students now access digital learning platforms without interruptions.</p>
                            </div>
                            <div className="border-l-4 border-primary-green pl-6 bg-off-white p-6 rounded">
                                <h3 className="font-semibold text-dark-gray mb-2">Rural Education Mission (150 kWp Mini-Grid)</h3>
                                <p className="text-medium-gray text-sm">Integrated mini-grid serving 3 schools across a rural community, providing 24/7 power and enabling distance learning initiatives.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your School's Energy Future?</h2>
                        <p className="text-lg mb-8 text-green-50">Let's discuss how solar power can improve learning outcomes and reduce operational costs at your institution.</p>
                        <Link href="/contact">
                            <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                                Request a Consultation
                            </Button>
                        </Link>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
