'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
    items: React.ReactNode[]
    autoRotate?: boolean
    rotateInterval?: number
    itemsPerSlide?: number
    className?: string
    hideArrows?: boolean
    hideDots?: boolean
}

export default function Carousel({
    items,
    autoRotate = true,
    rotateInterval = 5000,
    itemsPerSlide = 3,
    className = '',
    hideArrows = false,
    hideDots = false,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(autoRotate)

    const maxIndex = Math.max(0, items.length - itemsPerSlide)

    useEffect(() => {
        if (!isAutoPlay) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1))
        }, rotateInterval)

        return () => clearInterval(timer)
    }, [isAutoPlay, rotateInterval, maxIndex])

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1))
        setIsAutoPlay(false)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1))
        setIsAutoPlay(false)
    }

    const handleDotClick = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlay(false)
    }

    return (
        <div className={`relative w-full ${className} ${itemsPerSlide === 1 ? 'flex justify-center' : ''}`}>
            {/* Carousel Container */}
            <div className={`overflow-hidden ${itemsPerSlide === 1 ? 'w-full max-w-2xl' : 'w-full'}`}>
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 px-2`}
                            style={{
                                width: `${100 / itemsPerSlide}%`,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            {!hideArrows && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {!hideDots && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`transition-all duration-300 rounded ${index === currentIndex
                                ? 'bg-primary-green w-8 h-2'
                                : 'bg-light-gray w-2 h-2 hover:bg-medium-gray'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
