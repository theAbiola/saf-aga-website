interface SectionHeadingProps {
    title: string
    subtitle?: string
    centered?: boolean
    className?: string
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    className = '',
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className="heading-2 text-3xl sm:text-4xl font-bold text-dark-gray mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-medium-gray text-base sm:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
