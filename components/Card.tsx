import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
}

export default function Card({
    children,
    className = '',
    hover = true,
}: CardProps) {
    return (
        <div
            className={`bg-white rounded-lg shadow-sm ${hover ? 'transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1' : ''} ${className}`}
        >
            {children}
        </div>
    )
}
