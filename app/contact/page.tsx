'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (error) setError('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSubmitted(false)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message')
            }

            setSubmitted(true)
            setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
            // Hide success message after 8 seconds
            setTimeout(() => setSubmitted(false), 8000)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <PageContainer>
                {/* Hero Section */}
                <section className="pt-24 pb-12 bg-gradient-to-r from-primary-green/10 to-dark-green/10">
                    <div className="section-container">
                        <div className="max-w-3xl">
                            <h1 className="heading-1 text-4xl sm:text-5xl lg:text-6xl mb-6">Contact Us</h1>
                            <p className="text-xl text-medium-gray mb-6">
                                Ready to transform your energy future? Reach out to our team. We'll get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info & Form Section */}
                <section className="section-spacing">
                    <div className="section-container max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Information */}
                            <div>
                                <SectionHeading
                                    title="Get in Touch"
                                    centered={false}
                                />

                                <div className="space-y-8">
                                    {/* Lagos Office */}
                                    {/* <div>
                                        <h3 className="font-semibold text-dark-gray mb-2">Lagos – Southwest Hub</h3>
                                        <p className="text-medium-gray text-sm mb-2">
                                            27 Akanbi Ogedengbe Street, Victoria Island, Lagos
                                        </p>
                                        <p className="text-medium-gray text-sm mb-2">
                                            <span className="font-semibold">Phone:</span> +234 (0)1 3000 5000
                                        </p>
                                        <p className="text-medium-gray text-sm">
                                            <span className="font-semibold">Hours:</span> Mon - Fri, 9am - 6pm WAT
                                        </p>
                                    </div> */}

                                    {/* Abuja Office */}
                                    <div>
                                        <h3 className="font-semibold text-dark-gray mb-2">Abuja – North Central Hub</h3>
                                        <p className="text-medium-gray text-sm mb-2">
                                            12 Algiers Street, Wuse Zone 5, Abuja Nigeria.
                                        </p>
                                        <p className="text-medium-gray text-sm mb-2">
                                            <span className="font-semibold">Phone:</span> +234 (0)8036048403
                                        </p>
                                        <p className="text-medium-gray text-sm mb-2">
                                            <span className="font-semibold">Phone:</span> +234 (0)8030455123
                                        </p>
                                        <p className="text-medium-gray text-sm">
                                            <span className="font-semibold">Hours:</span> Mon - Fri, 9am - 6pm WAT
                                        </p>
                                    </div>

                                    {/* General Contact */}
                                    <div className="pt-4 border-t border-light-gray">
                                        <h3 className="font-semibold text-dark-gray mb-3">General Inquiries</h3>
                                        <p className="text-medium-gray text-sm mb-2">
                                            <span className="font-semibold">Email:</span> info@safagarenewableenergy.com.ng
                                        </p>
                                        <p className="text-medium-gray text-sm mb-2">
                                            <span className="font-semibold">Emergency Support:</span> +234 (0)8036048403
                                        </p>
                                        <p className="text-medium-gray text-sm">
                                            <span className="font-semibold">24/7 Support:</span> support@safagarenewableenergy.com.ng
                                        </p>
                                    </div>

                                    {/* Social Links */}
                                    <div className="pt-4 border-t border-light-gray">
                                        <h3 className="font-semibold text-dark-gray mb-3">Follow Us</h3>
                                        <div className="flex gap-4">
                                            <a href="#" className="text-primary-green hover:text-dark-green transition">
                                                LinkedIn
                                            </a>
                                            <a href="#" className="text-primary-green hover:text-dark-green transition">
                                                Twitter
                                            </a>
                                            <a href="#" className="text-primary-green hover:text-dark-green transition">
                                                Facebook
                                            </a>
                                            <a href="#" className="text-primary-green hover:text-dark-green transition">
                                                Instagram
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-off-white p-8 rounded-lg">
                                    <h2 className="heading-2 text-2xl mb-6">Send us a message</h2>

                                    {submitted && (
                                        <div className="mb-6 p-4 bg-primary-green/10 border border-primary-green rounded-lg">
                                            <p className="text-primary-green font-semibold">✓ Message received!</p>
                                            <p className="text-medium-gray text-sm mt-1">
                                                We'll review your message and get back to you within 24 hours.
                                            </p>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-red-600 font-semibold">✗ Error sending message</p>
                                            <p className="text-red-500 text-sm mt-1">
                                                {error}
                                            </p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-dark-gray mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-dark-gray mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-dark-gray mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                                placeholder="+234 800 000 0000"
                                            />
                                        </div>

                                        {/* Company */}
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-dark-gray mb-2">
                                                Company / Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                                placeholder="Your company"
                                            />
                                        </div>

                                        {/* Service Interest */}
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-semibold text-dark-gray mb-2">
                                                Service Interest *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                                            >
                                                <option value="">Select a service...</option>
                                                <option value="mini-grid-solutions">Mini-Grid Solutions</option>
                                                <option value="energising-education">Energising Education</option>
                                                <option value="operations-and-maintenance">Operations and Maintenance</option>
                                                <option value="energy-as-a-service">Energy As A Service</option>
                                                <option value="productive-use-equipment">Productive Use Equipment</option>
                                                <option value="commercial-industries">Commercial & Industries</option>
                                                <option value="lease-to-own">Lease to Own</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-dark-gray mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                                                placeholder="Tell us about your energy needs..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            variant="primary"
                                            className="w-full hover:!bg-dark-green disabled:opacity-50 disabled:cursor-not-allowed"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </Button>

                                        <p className="text-xs text-medium-gray">
                                            * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Response Section */}
                <section className="section-spacing bg-off-white">
                    <div className="section-container">
                        <SectionHeading title="We Respond Quickly" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2 text-center">4hr</p>
                                <p className="text-medium-gray text-sm">Email response time</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2 text-center">24hr</p>
                                <p className="text-medium-gray text-sm">Phone callback within</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2 text-center">24/7</p>
                                <p className="text-medium-gray text-sm">Emergency support line</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold text-primary-green mb-2 text-center">10+</p>
                                <p className="text-medium-gray text-sm">Years of experience</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-spacing">
                    <div className="section-container max-w-4xl">
                        <SectionHeading
                            title="Frequently Asked Questions"
                            centered={false}
                        />
                        <div className="space-y-6">
                            <details className="border border-light-gray rounded-lg p-6 group cursor-pointer">
                                <summary className="font-semibold text-dark-gray flex justify-between items-center">
                                    How long does a typical solar project take?
                                    <span className="text-primary-green group-open:rotate-180 transition">▼</span>
                                </summary>
                                <p className="text-medium-gray text-sm mt-4">
                                    Project timelines vary based on size and complexity. Small residential systems typically take 2-4 weeks from survey to commissioning. Larger commercial or industrial projects may take 2-6 months including permitting and engineering phases.
                                </p>
                            </details>

                            <details className="border border-light-gray rounded-lg p-6 group cursor-pointer">
                                <summary className="font-semibold text-dark-gray flex justify-between items-center">
                                    Do you offer financing options?
                                    <span className="text-primary-green group-open:rotate-180 transition">▼</span>
                                </summary>
                                <p className="text-medium-gray text-sm mt-4">
                                    Yes! We work with several financial institutions to provide attractive financing options. We can also assist with grant applications and climate finance opportunities depending on your project type.
                                </p>
                            </details>

                            <details className="border border-light-gray rounded-lg p-6 group cursor-pointer">
                                <summary className="font-semibold text-dark-gray flex justify-between items-center">
                                    What is the warranty on solar systems?
                                    <span className="text-primary-green group-open:rotate-180 transition">▼</span>
                                </summary>
                                <p className="text-medium-gray text-sm mt-4">
                                    Solar panels typically come with 25-year manufacturer warranties. Inverters and batteries have 10-15 year warranties. Our workmanship is guaranteed for 5 years, with extended maintenance packages available.
                                </p>
                            </details>

                            <details className="border border-light-gray rounded-lg p-6 group cursor-pointer">
                                <summary className="font-semibold text-dark-gray flex justify-between items-center">
                                    Can solar work in Nigeria's climate?
                                    <span className="text-primary-green group-open:rotate-180 transition">▼</span>
                                </summary>
                                <p className="text-medium-gray text-sm mt-4">
                                    Absolutely! Nigeria has excellent solar resources. Even during rainy seasons, solar systems generate significant power. We design systems accounting for seasonal variations and dust accumulation.
                                </p>
                            </details>

                            <details className="border border-light-gray rounded-lg p-6 group cursor-pointer">
                                <summary className="font-semibold text-dark-gray flex justify-between items-center">
                                    Do you handle system maintenance?
                                    <span className="text-primary-green group-open:rotate-180 transition">▼</span>
                                </summary>
                                <p className="text-medium-gray text-sm mt-4">
                                    Yes! We offer comprehensive Operations & Maintenance packages including 24/7 monitoring, preventive maintenance, emergency repair, and optimization services.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing bg-primary-green text-white">
                    <div className="section-container text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-lg mb-8 text-green-50">
                            Share your project details above or call us directly. Our team is ready to help transform your energy future.
                        </p>
                        <Button variant="secondary" className="!border-white !text-white hover:!bg-dark-green">
                            Call +234 (0)803 604 8403
                        </Button>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
