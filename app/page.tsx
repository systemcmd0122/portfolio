import Link from 'next/link'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  const featuredProjects = [
    {
      title: "Void Pulse",
      description: "様々な、人たちと交流したり、自分の趣味などを共有したりすることのできるサイトです。",
      imageUrl: "/voidpulse.png",
      projectUrl: "https://auth-blog-lemon.vercel.app/"
    },
    {
      title: "Syntax Echo",
      description: "現在、多く使われている様々なプログラミング言語の解説や、Next.js、Vue.jsなどのフレームワークなどに関する解説などをまとめたサイトです。",
      imageUrl: "/syntaxecho.png",
      projectUrl: "https://syntax-echo.vercel.app/"
    },
    {
      title: "This site",
      description: "Tisk_01010100のポートフォリオサイトです。",
      imageUrl: "/portfolio.png",
      projectUrl: "/projects/3"
    },
    // Add more projects as needed
  ]

  return (
    <div className="space-y-10">
      <section className="text-center slide-in">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to My Developer Portfolio</h1>
        <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">主に、アプリ開発、Web開発、生成AIなどを中心として活動しているDeveloperです。</p>
        <Link href="/contact" className="btn btn-primary inline-block">
          Get in Touch
        </Link>
      </section>

      <section className="fade-in">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="text-center fade-in">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Docker', 'C', 'HTML & CSS'].map((skill, index) => (
            <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}