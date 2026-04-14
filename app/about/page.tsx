import Header from '@/components/Header'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import { Battery, Zap, BarChart3, Building2, Lightbulb, Wrench, MapPin, Truck, Plane, Phone, Globe, DollarSign, Settings, Landmark, Handshake, CheckCircle, Target, Heart, Users } from 'lucide-react'

export const metadata = {
    title: 'About SAF-AGA Renewable Energy Limited - Our Story, Vision & Team',
    description: 'Learn about SAF-AGA Renewable Energy Limited\'s mission to transform energy access across Nigeria with innovative renewable solutions.',
}

export default function About() {
    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">About SAF-AGA Renewable Energy Limited</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Transforming energy access across Nigeria through innovative, sustainable, and cost-effective renewable solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission, Vision, Values */}
                <section id="mission" className="section-spacing">
                    <div className="section-container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                            <div className="bg-primary-green text-white p-8 rounded-lg">
                                <div className="inline-flex items-baseline gap-2 mb-3">
                                    <h3 className="heading-3 text-lg text-white m-0">Our Mission</h3>
                                    <Target size={20} className="text-green-100 flex-shrink-0 relative top-0.5" />
                                </div>
                                <p className="text-green-50">
                                    To innovate and deploy diverse renewable energy solutions that meet the specific needs of rural communities, commercial entities, and industrial sectors, thereby enhancing quality of life, driving economic growth, and championing environmental sustainability.
                                </p>
                            </div>
                            <div className="bg-dark-green text-white p-8 rounded-lg">
                                <div className="inline-flex items-baseline gap-2 mb-3">
                                    <h3 className="heading-3 text-lg text-white m-0">Our Vision</h3>
                                    <Globe size={20} className="text-green-100 flex-shrink-0 relative top-0.5" />
                                </div>
                                <p className="text-gray-100">
                                    To lead Nigeria's transition to sustainable energy through access to customized, efficient, and affordable solar hybrid solutions.
                                </p>
                            </div>
                            <div className="bg-mint-green border border-light-gray p-8 rounded-lg">
                                <div className="inline-flex items-baseline gap-2 mb-3">
                                    <h3 className="heading-3 text-lg m-0">Our Core Values</h3>
                                    <Heart size={20} className="text-dark-gray flex-shrink-0 relative top-0.5" />
                                </div>
                                <ul className="space-y-2 text-medium-black text-md">
                                    <li className="flex items-center gap-2">
                                        <Lightbulb size={16} className="text-primary-green flex-shrink-0" />
                                        Service
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Handshake size={16} className="text-primary-green flex-shrink-0" />
                                        Trust
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Globe size={16} className="text-primary-green flex-shrink-0" />
                                        Integrity
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Users size={16} className="text-primary-green flex-shrink-0" />
                                        Relationship
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-primary-green flex-shrink-0" />
                                        Excellence
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section id="our-story" className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Our Story"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            SAF-AGA RENEWABLE ENERGY LIMITED is a leading renewable energy company strategically headquartered in Abuja, Nigeria, focused on harnessing solar hybrid technologies to provide sustainable, accessible, and costeffective electricity.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            As an advocate for sustainable growth, the company is committed to delivering innovative, efficient, and environmentally responsible energy solutions to communities, industries, and businesses across Nigeria.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed mb-6">
                            Established as a Limited Liability Company under the Corporate Affairs Commission, the enterprise prides itself on a unique blend of innovation, community service, and environmental stewardship.
                        </p>
                        <p className="text-lg text-medium-gray leading-relaxed">
                            Today, SAF-AGA Renewable Energy Limited remains committed to our founding mission: making renewable energy accessible, affordable, and reliable for everyone. We continue to innovate, invest in our team, and push the boundaries of what's possible in Nigeria's renewable energy sector.
                            We pride ourselves as an entity of professionals, with excellence, integrity, and teamwork.
                        </p>
                    </div>
                </section>

                {/* Key Achievements */}
                <section className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Our Track Record" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white border-t-4 border-primary-green p-8 rounded-lg text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2">500+</p>
                                <p className="text-medium-gray font-semibold">Projects Completed</p>
                                <p className="text-sm text-medium-gray mt-2">Across all sectors</p>
                            </div>
                            <div className="bg-white border-t-4 border-primary-green p-8 rounded-lg text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2">2M+</p>
                                <p className="text-medium-gray font-semibold">People Served</p>
                                <p className="text-sm text-medium-gray mt-2">Direct & indirect beneficiaries</p>
                            </div>
                            <div className="bg-white border-t-4 border-primary-green p-8 rounded-lg text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2">150+ MW</p>
                                <p className="text-medium-gray font-semibold">Installed Capacity</p>
                                <p className="text-sm text-medium-gray mt-2">Clean energy generated</p>
                            </div>
                            <div className="bg-white border-t-4 border-primary-green p-8 rounded-lg text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2">1M+ T</p>
                                <p className="text-medium-gray font-semibold">Carbon Offset</p>
                                <p className="text-sm text-medium-gray mt-2">Annually equivalent to trees planted</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Expertise */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="What We're Experts In" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg">
                                <Battery className="mb-4 text-primary-green" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Mini-Grid Systems</h3>
                                <p className="text-medium-gray text-sm">Designing and deploying community solar systems that serve 100-10,000 households with 24/7 power.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <Zap className="mb-4 text-primary-green" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Captive Power</h3>
                                <p className="text-medium-gray text-sm">Custom solar installations for businesses, schools, hospitals, and industrial facilities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <BarChart3 className="mb-4 text-primary-green" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Energy Auditing</h3>
                                <p className="text-medium-gray text-sm">Comprehensive energy assessments identifying savings opportunities and cost reduction strategies.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <Building2 className="mb-4 text-primary-green" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Project Development</h3>
                                <p className="text-medium-gray text-sm">End-to-end EPC services from concept development through operations and maintenance.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <Lightbulb className="mb-4 text-primary-green" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Smart Infrastructure</h3>
                                <p className="text-medium-gray text-sm">IoT-enabled streetlighting and monitoring systems providing real-time insights.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg">
                                <Wrench className="mb-4 text-primary-green" size={40} />
                                <h3 className="heading-3 text-lg mb-3">Long-Term Support</h3>
                                <p className="text-medium-gray text-sm">24/7 monitoring and maintenance ensuring maximum system performance and longevity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Team */}
                <section id="team" className="section-spacing">
                    <div className="section-container">
                        <SectionHeading title="Our Leadership Team" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <div className="bg-off-white p-8 rounded-lg text-center">
                                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-green">
                                    <Image
                                        src="/images/team-members/godbless-safugha.jpg"
                                        alt="Godbless Safugha"
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="heading-3 text-lg mb-1">Dr. Godbless Safugha</h3>
                                <p className="text-primary-green font-semibold mb-3">Managing Director (MD / CEO)</p>
                                <p className="text-medium-gray text-sm">
                                    Development economist with 18 years of experience in the financial services industry. He is an accomplished executive leader with a proven track record in financial inclusion, project management, business development, and renewable energy.
                                </p>
                            </div>

                            {/* Team Member 2 */}
                            <div className="bg-off-white p-8 rounded-lg text-center">
                                <div className="w-48 h-48 mx-auto bg-primary-green rounded-full flex items-center justify-center text-4xl mb-4">
                                    👨‍🔬
                                </div>
                                <h3 className="heading-3 text-lg mb-1">Mr. Agara Anthony Chuks</h3>
                                <p className="text-primary-green font-semibold mb-3">Executive Director</p>
                                <p className="text-medium-gray text-sm">
                                    Top-performing professional with a strong passion for sales, Marketing, business development and expansion. An excellence-oriented, highly-motivated, productive and dynamic professional with strong commercial awareness.
                                </p>
                            </div>

                            {/* Team Member 3 */}
                            <div className="bg-off-white p-8 rounded-lg text-center">
                                <div className="w-48 h-48 mx-auto bg-primary-green rounded-full flex items-center justify-center text-4xl mb-4">
                                    👨‍🔬
                                </div>
                                <h3 className="heading-3 text-lg mb-1">Henry Oluwarotimi Alikali</h3>
                                <p className="text-primary-green font-semibold mb-3">Chief Finance Officer (CFO)</p>
                                <p className="text-medium-gray text-sm">
                                    Graduate of Accounting and a Certified National Accountant (CAN) wi th a career spanning over 10 years of experience managing financial and administration systems.
                                    He has worked on numerous projects from esteemed organizations such as MEDA, UNICEF, USAID, CIDA, DFID, TY Danjuma Foundation, and Emeraid Capital.
                                </p>
                            </div>

                            {/* Team Member 4 */}
                            <div className="bg-off-white p-8 rounded-lg text-center">
                                <div className="w-48 h-48 mx-auto bg-primary-green rounded-full flex items-center justify-center text-4xl mb-4">
                                    💼
                                </div>
                                <h3 className="heading-3 text-lg mb-1">Damilola Ayodele</h3>
                                <p className="text-primary-green font-semibold mb-3">Chief Technology Officer (CTO)</p>
                                <p className="text-medium-gray text-sm">
                                    Damilola Ayodele is a highly accomplished Chief Technology Officer with a distinguished track record of driving innovation and leading technology teams within the renewable energy sector. Mr. Ayodele is particularly skilled at leveraging his extensive technical expertise to develop sustainable solutions, optimize operations, and enhance product offerings.
                                </p>
                            </div>

                            {/* Team Member 5 */}
                            <div className="bg-off-white p-8 rounded-lg text-center">
                                <div className="w-48 h-48 mx-auto bg-primary-green rounded-full flex items-center justify-center text-4xl mb-4">
                                    👩‍💻
                                </div>
                                <h3 className="heading-3 text-lg mb-1">Amara Chioma</h3>
                                <p className="text-primary-green font-semibold mb-3">Director of Technology</p>
                                <p className="text-medium-gray text-sm">
                                    Software engineer leading our digital transformation, IoT solutions, and monitoring platform development.
                                </p>
                            </div>

                            {/* Team Member 6 */}
                            <div className="bg-off-white p-8 rounded-lg text-center">
                                <div className="w-48 h-48 mx-auto bg-primary-green rounded-full flex items-center justify-center text-4xl mb-4">
                                    📊
                                </div>
                                <h3 className="heading-3 text-lg mb-1">Segun Lawal</h3>
                                <p className="text-primary-green font-semibold mb-3">Head of Finance</p>
                                <p className="text-medium-gray text-sm">
                                    Financial expert managing budgets, funding strategies, and ensuring sustainable business growth and returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coverage Areas */}
                <section id="profile" className="section-spacing bg-off-white">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Geographic Coverage"
                            centered={false}
                        />
                        <p className="text-lg text-medium-gray leading-relaxed mb-8">
                            We operate across all 36 states of Nigeria. The Federal Capital Territory is our headquarters. Our strategic presence in major cities enables rapid deployment and responsive support throughout the country.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-dark-gray mb-4">Headquarters Office Address</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    {/* <li className="flex gap-3">
                                        <MapPin size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Lagos—Southwest Regional Hub</span>
                                    </li> */}
                                    <li className="flex gap-3">
                                        <MapPin size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Abuja—North Central Regional Hub</span>
                                    </li>
                                    {/* <li className="flex gap-3">
                                        <MapPin size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Port Harcourt—South-South Regional Hub</span>
                                    </li> */}
                                    {/* <li className="flex gap-3">
                                        <MapPin size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Kano—North West Regional Hub</span>
                                    </li> */}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-dark-gray mb-4">Service Capacity</h3>
                                <ul className="space-y-3 text-medium-gray">
                                    <li className="flex gap-3">
                                        <Truck size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Same-day emergency response in major cities</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Plane size={20} className="text-primary-green flex-shrink-0" />
                                        <span>48-hour response in remote areas</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Phone size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Remote monitoring nationwide</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Handshake size={20} className="text-primary-green flex-shrink-0" />
                                        <span>Local partnership networks throughout Nigeria</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications & Partnerships */}
                <section id="certifications" className="section-spacing">
                    <div className="section-container max-w-5xl">
                        <SectionHeading title="Certifications & Partnerships" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-semibold text-dark-gray mb-6">Industry Certifications</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <CheckCircle size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">ISO 9001:2015</p>
                                            <p className="text-sm text-medium-gray">Quality Management Systems</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">ISO 45001:2018</p>
                                            <p className="text-sm text-medium-gray">Occupational Health & Safety</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">NIGECERC License</p>
                                            <p className="text-sm text-medium-gray">Electrical installation registration</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">LED Manufacturers Partnership</p>
                                            <p className="text-sm text-medium-gray">Authorized distributor for premium brands</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id="partners">
                                <h3 className="font-semibold text-dark-gray mb-6">Key Partners</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <Globe size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">International Climate Finance Partners</p>
                                            <p className="text-sm text-medium-gray">Partnerships with global climate funds</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <DollarSign size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">Financial Institutions</p>
                                            <p className="text-sm text-medium-gray">Facilitating project financing and credit facilities</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Settings size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">Technology Partners</p>
                                            <p className="text-sm text-medium-gray">Integration with global monitoring platforms</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Landmark size={24} className="text-primary-green flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-dark-gray">Government Agencies</p>
                                            <p className="text-sm text-medium-gray">Collaborating on national electrification goals</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section id="all-partners" className="section-spacing bg-gray-100">
                    <div className="section-container">
                        <div className="text-center mb-12">
                            <div className="inline-block mb-4">
                                <span className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                                    Trusted Partnerships
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Network of Partners</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                We collaborate with leading organizations and government agencies across Nigeria and Beyond to deliver sustainable energy solutions
                            </p>
                        </div>

                        {/* Scrolling Partners Container - Row 1 */}
                        <div className="overflow-hidden mb-8">
                            <style>{`
                                @keyframes scroll-left {
                                    0% {
                                        transform: translateX(0);
                                    }
                                    100% {
                                        transform: translateX(-50%);
                                    }
                                }
                                @keyframes scroll-left-reverse {
                                    0% {
                                        transform: translateX(-50%);
                                    }
                                    100% {
                                        transform: translateX(0);
                                    }
                                }
                                .partners-scroll {
                                    display: flex;
                                    animation: scroll-left 20s linear infinite;
                                    width: 200%;
                                }
                                .partners-scroll-reverse {
                                    display: flex;
                                    animation: scroll-left-reverse 20s linear infinite;
                                    width: 200%;
                                }
                                .partners-scroll:hover,
                                .partners-scroll-reverse:hover {
                                    animation-play-state: paused;
                                }
                            `}</style>
                            <div className="partners-scroll">
                                {/* First set of logos */}
                                {[
                                    { src: '/images/partner-images/emeraid-agency.png', alt: 'Emeraid' },
                                    { src: '/images/partner-images/jinko-solar.png', alt: 'JinKO Solar' },
                                    { src: '/images/partner-images/nxt-grid-energy.png', alt: 'NXT GRID' },
                                    { src: '/images/partner-images/pind-agency.png', alt: 'PIND' },
                                    { src: '/images/partner-images/green-energy.png', alt: 'SAF-AGA' },
                                ].map((logo, index) => (
                                    <div
                                        key={`logo-1-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {[
                                    { src: '/images/partner-images/emeraid-agency.png', alt: 'Emeraid' },
                                    { src: '/images/partner-images/jinko-solar.png', alt: 'JinKO Solar' },
                                    { src: '/images/partner-images/nxt-grid-energy.png', alt: 'NXT GRID' },
                                    { src: '/images/partner-images/pind-agency.png', alt: 'PIND' },
                                    { src: '/images/partner-images/green-energy.png', alt: 'SAF-AGA' },
                                ].map((logo, index) => (
                                    <div
                                        key={`logo-2-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scrolling Partners Container - Row 2 (scrolling reverse) */}
                        <div className="overflow-hidden mb-8">
                            <div className="partners-scroll-reverse">
                                {/* First set of logos */}
                                {[
                                    { src: '/images/partner-images/rean-energy.png', alt: 'REAN' },
                                    { src: '/images/partner-images/rea-agency.png', alt: 'REA' },
                                    { src: '/images/partner-images/rean-energy.png', alt: 'REAN' },
                                    { src: '/images/partner-images/rea-agency.png', alt: 'REA' },
                                ].map((logo, index) => (
                                    <div
                                        key={`logo-row2-1-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {[
                                    { src: '/images/partner-images/rean-energy.png', alt: 'REAN' },
                                    { src: '/images/partner-images/rea-agency.png', alt: 'REA' },
                                    { src: '/images/partner-images/rean-energy.png', alt: 'REAN' },
                                    { src: '/images/partner-images/rea-agency.png', alt: 'REA' },
                                ].map((logo, index) => (
                                    <div
                                        key={`logo-row2-2-${index}`}
                                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-4"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={150}
                                            height={60}
                                            className="object-contain max-h-16"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Partners Grid */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Partners</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                                    <h4 className="font-semibold text-dark-gray mb-2">International Climate Finance Partners</h4>
                                    <p className="text-sm text-medium-gray">Access to global climate funds and international grant programs</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                                    <h4 className="font-semibold text-dark-gray mb-2">Financial Institutions</h4>
                                    <p className="text-sm text-medium-gray">Supporting project financing and flexible credit facilities</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                                    <h4 className="font-semibold text-dark-gray mb-2">Technology Partners</h4>
                                    <p className="text-sm text-medium-gray">Integration with global monitoring and management platforms</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                                    <h4 className="font-semibold text-dark-gray mb-2">Government Agencies</h4>
                                    <p className="text-sm text-medium-gray">Collaborating on national electrification and energy goals</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                                    <h4 className="font-semibold text-dark-gray mb-2">LED & Equipment Manufacturers</h4>
                                    <p className="text-sm text-medium-gray">Authorized distributor for premium global brands</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                                    <h4 className="font-semibold text-dark-gray mb-2">NGOs & Development Partners</h4>
                                    <p className="text-sm text-medium-gray">Working together on community development and capacity building</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact for Partnership */}
                        <div className="mt-12 text-center">
                            <p className="text-medium-gray mb-4">Interested in partnering with us?</p>
                            <Link href="/contact">
                                <Button
                                    variant="primary"
                                    className="hover:!bg-dark-green"
                                >
                                    Get in Touch
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
                        <p className="text-lg mb-8 text-green-50 max-w-3xl mx-auto text-center">
                            Whether you're ready to transform your energy future or join our team, we're here to help. Let's build a sustainable Nigeria together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" className="border border-white">
                                Start Your Project
                            </Button>
                            <Button variant="ghost" className="!text-white !border !border-white !bg-dark-green hover:!bg-dark-green hover:!text-white">
                                View Careers
                            </Button>
                        </div>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
