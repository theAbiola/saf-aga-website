'use client'

import { useState, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    ChevronDown,
    BookOpen,
    Target,
    Users,
    Building2,
    Award,
    Handshake,
    Zap,
    BarChart3,
    Wrench,
    Lightbulb,
    MapPin,
    Heart,
    Bell,
    FileText,
    Calendar,
    Power,
    Percent,
    Sun,
    Moon,
} from 'lucide-react'

interface NavItem {
    href?: string
    label: string
    icon?: ReactNode
    children?: NavItem[]
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const navLinks: NavItem[] = [
        { href: '/', label: 'Home' },
        {
            href: '/about',
            label: 'About Us',
            children: [
                { href: '/about#our-story', label: 'Our Story', icon: <BookOpen size={18} /> },
                { href: '/about#mission', label: 'Mission & Vision', icon: <Target size={18} /> },
                { href: '/about#team', label: 'Our Team', icon: <Users size={18} /> },
                { href: '/about#profile', label: 'Company Profile', icon: <Building2 size={18} /> },
                { href: '/about#certifications', label: 'Certifications', icon: <Award size={18} /> },
                { href: '/about#partners', label: 'Partners', icon: <Handshake size={18} /> },
            ],
        },
        {
            href: '/services',
            label: 'Services',
            children: [
                { href: '/services/mini-grid-solutions', label: 'Mini-Grid Solutions', icon: <Zap size={18} /> },
                { href: '/services/productive-use-equipment', label: 'Productive Use Equipment', icon: <Wrench size={18} /> },
                { href: '/services/energising-education', label: 'Energising Education', icon: <BarChart3 size={18} /> },
                { href: '/services/solar-home-system', label: 'Solar Home System', icon: <Wrench size={18} /> },
                { href: '/services/energy-as-a-service', label: 'Energy As A Service', icon: <Power size={18} /> },
                { href: '/services/commercial-industries', label: 'Commercial & Industries', icon: <Building2 size={18} /> },
            ],
        },
        {
            href: '/projects',
            label: 'Projects',
            children: [
                { href: '/projects', label: 'Rural Electrification', icon: <Zap size={18} /> },
                { href: '/projects', label: 'Commercial Installations', icon: <Building2 size={18} /> },
            ],
        },
        {
            href: '/updates',
            label: 'Updates & Media',
            children: [
                { href: '/updates#announcements', label: 'Announcements', icon: <Bell size={18} /> },
                { href: '/updates#case-studies', label: 'Case Studies', icon: <FileText size={18} /> },
                { href: '/updates#press', label: 'Press Releases', icon: <FileText size={18} /> },
                { href: '/updates#events', label: 'Events', icon: <Calendar size={18} /> },
                { href: '/updates#media', label: 'Media Gallery', icon: <FileText size={18} /> },
            ],
        },
        { href: '/contact', label: 'Contact Us' },
    ]

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 w-full bg-white shadow-sm z-50">
                <div className="section-container h-[60px] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-[125px] w-auto">
                            <Image
                                src="/SAF-AGA-Logo.png"
                                alt="SAF-AGA Logo"
                                height={125}
                                width={425}
                                priority
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-8 items-center">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                {link.children ? (
                                    <>
                                        {/* Link with dropdown */}
                                        <Link
                                            href={link.href || '#'}
                                            className="text-dark-gray font-medium text-md hover:text-primary-green transition-colors duration-150 flex items-center gap-1.5 py-2"
                                        >
                                            {link.label}
                                            <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-light-gray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2 pb-2">
                                            {link.children.map((child, childIndex) => (
                                                <Link
                                                    key={childIndex}
                                                    href={child.href || '#'}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-dark-gray text-sm hover:bg-primary-green/5 hover:text-primary-green transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                                                >
                                                    <span className="text-primary-green/70 group-hover:text-primary-green transition-colors">{child.icon}</span>
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    /* Direct link without dropdown */
                                    <Link
                                        href={link.href || '#'}
                                        className="text-dark-gray font-medium text-md hover:text-primary-green transition-colors duration-150 py-2"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Theme Toggle and Mobile Hamburger */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden flex flex-col gap-1.5 w-6"
                            aria-label="Toggle menu"
                        >
                            <span className={`w-full h-0.5 bg-dark-gray transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-dark-gray transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-dark-gray transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-[50px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden">
                    <nav className="flex flex-col p-4 gap-1">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                {link.children ? (
                                    <>
                                        <button
                                            onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                                            className="w-full text-left text-dark-gray font-medium py-2.5 px-2 hover:text-primary-green hover:bg-primary-green/5 rounded-lg transition-colors flex items-center justify-between"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {openDropdown === link.label && (
                                            <div className="pl-4 flex flex-col gap-1 mt-1 mb-2">
                                                {link.children.map((child, childIndex) => (
                                                    <Link
                                                        key={childIndex}
                                                        href={child.href || '#'}
                                                        className="flex items-center gap-3 text-dark-gray text-sm py-2 px-2 hover:text-primary-green hover:bg-primary-green/5 rounded transition-colors"
                                                        onClick={() => setMenuOpen(false)}
                                                    >
                                                        <span className="text-primary-green/70">{child.icon}</span>
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href || '#'}
                                        className="text-dark-gray font-medium py-2.5 px-2 hover:text-primary-green hover:bg-primary-green/5 rounded-lg transition-colors block"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}

            {/* Spacer for fixed header */}
            <div className="h-12" />
        </>
    )
}
