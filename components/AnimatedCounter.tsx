'use client'

import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
    targetValue: number
    label?: string
    suffix?: string
    duration?: number
    countClassName?: string
}

export default function AnimatedCounter({
    targetValue,
    label,
    suffix = '',
    duration = 2000,
    countClassName = 'text-5xl font-bold text-primary-green mb-2',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            setCount(Math.floor(targetValue * progress))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [isVisible, targetValue, duration])

    return (
        <div ref={ref} className="text-center">
            <p className={countClassName}>
                {count.toLocaleString()}
                {suffix}
            </p>
            {label && (
                <p className="text-medium-gray text-sm font-medium uppercase tracking-wide">
                    {label}
                </p>
            )}
        </div>
    )
}
