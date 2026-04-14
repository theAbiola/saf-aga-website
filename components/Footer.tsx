import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/projects', label: 'Projects' },
        { href: '/updates', label: 'Updates & Media' },
        { href: '/contact', label: 'Contact Us' },
    ]

    const services = [
        { href: '/services/mini-grid-solutions', label: 'Mini-Grid Solutions' },
        { href: '/services/energising-education', label: 'Energising Education' },
        { href: '/services/solar-home-system', label: 'Solar Home System' },
        { href: '/services/energy-as-a-service', label: 'Energy As A Service' },
        { href: '/services/productive-use-equipment', label: 'Productive Use Equipment' },
        { href: '/services/commercial-industries', label: 'Commercial & Industries' },
    ]

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
        { icon: Twitter, href: 'https://x.com', label: 'Twitter' },
        { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
    ]

    return (
        <footer className="bg-dark-gray text-light-gray">
            {/* Main Footer Content */}
            <div className="section-container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <div>
                    <h3 className="text-white font-bold mb-4">SAF-AGA Renewable Energy Limited</h3>
                    <p className="text-sm mb-6">
                        SAF-AGA Renewable Energy Limited delivers sustainable power solutions across Nigeria. We specialize in mini-grid systems, solar installations, and energy storage solutions.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-gray hover:text-primary-green transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm hover:text-primary-green transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    className="text-sm hover:text-primary-green transition-colors"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                            <Phone size={16} className="flex-shrink-0 mt-1" />
                            <div className="text-sm">
                                <p>+234 (0)8036048403</p>
                                <p>+234 (0)8030455123</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <Mail size={16} className="flex-shrink-0 mt-1" />
                            <div className="text-sm">
                                <p>info@safagarenewableenergy.com.ng</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <MapPin size={16} className="flex-shrink-0 mt-1" />
                            <p className="text-sm">
                                12 Algiers Street, Wuse Zone 5, Abuja Nigeria.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-medium-gray bg-black/20">
                <div className="section-container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm">
                        © {currentYear} SAF-AGA RENEWABLE ENERGY LIMITED. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-sm hover:text-primary-green transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-sm hover:text-primary-green transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
