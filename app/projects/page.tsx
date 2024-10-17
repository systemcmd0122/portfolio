import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
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
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}