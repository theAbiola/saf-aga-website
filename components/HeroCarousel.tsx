'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MapPin } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

interface CarouselSlide {
    image: string
    alt: string
    location: string
}

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)

    const slides: CarouselSlide[] = [
        { image: '/images/solar-background.png', alt: 'Solar Panel Installation 1', location: 'Okpokunou, 91kWp, Delta State.' },
        { image: '/solar-panel1.jpg', alt: 'Solar Panel Installation 1', location: 'Enekorogha, 120 kWp, Bayelsa State.' },
        { image: '/solar-panel2.jpg', alt: 'Solar Panel Installation 2', location: 'Ogriagbene, 150 kWp, Delta State.' },
        { image: '/solar-panel1.jpg', alt: 'Solar Panel Installation 1', location: 'Enekorogha, 120 kWp, Bayelsa State.' },
        { image: '/solar-panel2.jpg', alt: 'Solar Panel Installation 2', location: 'Ogriagbene, 150 kWp, Delta State.' },
        { image: '/images/solar-background.png', alt: 'Solar Panel Installation 1', location: 'Okpokunou, 91kWp, Delta State.' },
    ]

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlay) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(interval)
    }, [isAutoPlay, slides.length])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlay(false)
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlay(true), 10000)
    }

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-full min-h-screen">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 overflow-hidden transition-all duration-500 ease-out ${index === currentSlide
                            ? 'opacity-100 visibility-visible'
                            : 'opacity-0 visibility-hidden'
                            }`}
                    >
                        <div className={`absolute inset-0 transition-transform duration-500 ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'
                            }`}>
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                className="object-cover w-full h-full"
                                sizes="100vw"
                            />
                        </div>
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

                        {/* Location Label */}
                        <div className="hidden sm:flex absolute bottom-2 right-8 items-center gap-2 text-white">
                            <MapPin size={18} className="text-dark-green" />
                            <span className="text-sm sm:text-base font-medium">{slide.location}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="section-container hero-content">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="mb-4 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider bg-dark-gray/30 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                            RENEWABLE ENERGY EXPERTS
                        </div>

                        <h1 className="heading-1 mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                            Powering sustainable futures for homes, businesses, and communities.
                        </h1>

                        <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
                            We deliver dependable solar, mini-grid, and energy storage solutions that unlock productivity and resilience for communities across Nigeria.
                        </p>

                        {/* Stats with Animated Counters */}
                        <div className="grid grid-cols-3 gap-4 mb-12">
                            <div className="bg-dark-gray/30 backdrop-blur-sm rounded-lg px-4 py-4 border border-white/10">
                                <AnimatedCounter
                                    targetValue={100}
                                    suffix="+"
                                    countClassName="text-2xl sm:text-3xl font-bold text-white"
                                />
                                <div className="text-xs sm:text-sm text-gray-200 mt-2">Installed Projects</div>
                            </div>
                            <div className="bg-dark-gray/30 backdrop-blur-sm rounded-lg px-1 py-4 border border-white/10">
                                <AnimatedCounter
                                    targetValue={7}
                                    suffix="MW+"
                                    countClassName="text-2xl sm:text-3xl font-bold text-white"
                                />
                                <div className="text-xs sm:text-sm text-gray-200 mt-2">Total Capacity Installed</div>
                            </div>
                            <div className="bg-dark-gray/30 backdrop-blur-sm rounded-lg px-1 py-4 border border-white/10">
                                <AnimatedCounter
                                    targetValue={50}
                                    suffix="+"
                                    countClassName="text-2xl sm:text-3xl font-bold text-white"
                                />
                                <div className="text-xs sm:text-sm text-gray-200 mt-2">Communities Served</div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5 sm:mb-0">
                            <Link href="/services">
                                <button className="bg-primary-green hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2">
                                    View Our Services
                                    <ChevronRight size={20} />
                                </button>
                            </Link>
                            <Link href="/projects">
                                <button className="bg-dark-green/100 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg border border-white/40 transition-colors duration-150">
                                    Explore recent projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-primary-green w-8'
                            : 'bg-white/50 hover:bg-white/75 w-2'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
