import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseClasses = 'font-semibold rounded-md transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2'

    const variantClasses = {
        primary: 'bg-primary-green text-white hover:bg-forest-green active:bg-dark-green hover:scale-105 disabled:bg-light-gray disabled:text-medium-gray disabled:cursor-not-allowed disabled:scale-100',
        secondary: 'border-2 border-primary-green text-primary-green hover:bg-green-50 active:bg-light-green disabled:border-light-gray disabled:text-medium-gray disabled:cursor-not-allowed',
        ghost: 'bg-transparent text-primary-green hover:text-dark-green hover:underline disabled:text-medium-gray disabled:cursor-not-allowed',
    }

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
