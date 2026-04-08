'use client'

import { useTheme } from '@/providers/ThemeProvider'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme)
        setIsOpen(false)
    }

    const getIcon = () => {
        if (theme === 'system') {
            return <Monitor size={20} className="text-dark-gray dark:text-gray-300" />
        }
        return resolvedTheme === 'light' ? (
            <Sun size={20} className="text-yellow-500" />
        ) : (
            <Moon size={20} className="text-blue-300" />
        )
    }

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-primary-green/5 transition-colors duration-150"
                aria-label="Toggle theme"
                title="Theme settings"
            >
                {getIcon()}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-light-gray dark:border-gray-700 z-50">
                    <button
                        onClick={() => handleThemeChange('light')}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${theme === 'light'
                                ? 'bg-primary-green/5 text-primary-green dark:bg-primary-green/20'
                                : 'text-dark-gray dark:text-gray-300 hover:bg-primary-green/5 dark:hover:bg-primary-green/20 hover:text-primary-green'
                            } first:rounded-t-lg`}
                    >
                        <Sun size={18} />
                        <span>Light Mode</span>
                    </button>
                    <button
                        onClick={() => handleThemeChange('dark')}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${theme === 'dark'
                                ? 'bg-primary-green/5 text-primary-green dark:bg-primary-green/20'
                                : 'text-dark-gray dark:text-gray-300 hover:bg-primary-green/5 dark:hover:bg-primary-green/20 hover:text-primary-green'
                            }`}
                    >
                        <Sun size={18} />
                        <span>Dark Mode</span>
                    </button>
                    <button
                        onClick={() => handleThemeChange('system')}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${theme === 'system'
                                ? 'bg-primary-green/5 text-primary-green dark:bg-primary-green/20'
                                : 'text-dark-gray dark:text-gray-300 hover:bg-primary-green/5 dark:hover:bg-primary-green/20 hover:text-primary-green'
                            } last:rounded-b-lg`}
                    >
                        <Monitor size={18} />
                        <span>System</span>
                    </button>
                </div>
            )}
        </div>
    )
}
