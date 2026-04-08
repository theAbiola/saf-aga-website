import React from 'react'

interface PageContainerProps {
    children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <main className="min-h-screen bg-white">
            {children}
        </main>
    )
}
