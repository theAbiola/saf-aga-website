import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

interface ProjectCardProps {
    id: string
    title: string
    location: string
    state: string
    capacity: string
    beneficiaries: number
    type: string
    status: 'completed' | 'ongoing' | 'planned'
    image?: string
    description: string
}

export default function ProjectCard({
    id,
    title,
    location,
    state,
    capacity,
    beneficiaries,
    type,
    status,
    image,
    description,
}: ProjectCardProps) {
    const statusColors = {
        completed: 'bg-primary-green text-white',
        ongoing: 'bg-blue-500 text-white',
        planned: 'bg-gray-400 text-white',
    }

    const typeEmojis: { [key: string]: string } = {
        'mini-grid': '🔋',
        'captive-power': '⚡',
        'streetlighting': '💡',
        'industrial': '🏭',
        'commercial': '🏢',
        'healthcare': '🏥',
        'educational': '📚',
    }

    return (
        <Link href={`/projects/${id}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                {/* Image/Visual */}
                <div className="relative w-full h-40 bg-gradient-to-br from-primary-green/10 to-dark-green/10 flex items-center justify-center overflow-hidden">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="text-6xl">{typeEmojis[type] || '🔆'}</div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColors[status]}`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                        <span className="text-xs text-medium-gray">{state}</span>
                    </div>

                    {/* Title */}
                    <h3 className="heading-3 text-lg mb-2 line-clamp-2">{title}</h3>

                    {/* Location */}
                    <p className="text-sm text-medium-gray mb-4 flex items-center gap-2">
                        <span>📍</span>
                        {location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-medium-gray mb-6 flex-grow line-clamp-2">{description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-light-gray">
                        <div>
                            <p className="text-xs text-medium-gray font-semibold">CAPACITY</p>
                            <p className="text-lg font-bold text-primary-green">{capacity}</p>
                        </div>
                        <div>
                            <p className="text-xs text-medium-gray font-semibold">BENEFICIARIES</p>
                            <p className="text-lg font-bold text-primary-green">{beneficiaries.toLocaleString()}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Button variant="ghost" className="text-left p-0 justify-start">
                        View Project →
                    </Button>
                </div>
            </div>
        </Link>
    )
}
