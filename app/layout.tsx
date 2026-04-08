import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'SAF-AGA Renewable Energy Limited - Renewable Energy Solutions in Nigeria',
    description: 'Powering sustainable futures for homes, businesses, and communities. SAF-AGA Renewable Energy Limited delivers solar systems, mini-grid solutions, and energy storage across Nigeria.',
    keywords: 'renewable energy, solar power, mini-grid, Nigeria, clean energy, energy audit, sustainable power',
    authors: [{ name: 'SAF-AGA Renewable Energy Limited' }],
    icons: {
        icon: '/saf-aga.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.safagaenergy.com',
        siteName: 'SAF-AGA Renewable Energy Limited',
        title: 'SAF-AGA Renewable Energy Limited - Renewable Energy Solutions',
        description: 'Powering sustainable futures for homes, businesses, and communities across Nigeria.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#001BB7" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
