'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    resolvedTheme: ResolvedTheme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('system')
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')
    const [isMounted, setIsMounted] = useState(false)

    const getSystemTheme = (): ResolvedTheme => {
        if (typeof window !== 'undefined') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            return prefersDark ? 'dark' : 'light'
        }
        return 'light'
    }

    const applyTheme = (themeToApply: Theme) => {
        const html = document.documentElement
        const actualTheme: ResolvedTheme = themeToApply === 'system' ? getSystemTheme() : themeToApply

        setResolvedTheme(actualTheme)

        if (actualTheme === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }

    useEffect(() => {
        setIsMounted(true)

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') as Theme | null
        const themeToUse = savedTheme || 'system'

        setThemeState(themeToUse)
        applyTheme(themeToUse)

        // Listen to system theme changes
        if (themeToUse === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const handleChange = () => {
                applyTheme('system')
            }
            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
    }

    // Prevent flash of unstyled content
    if (!isMounted) {
        return <>{children}</>
    }

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
