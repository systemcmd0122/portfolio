import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover-lift">
      {/* Image コンポーネントの修正 */}
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link href={projectUrl} className="btn btn-primary inline-block">
          View Project
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard