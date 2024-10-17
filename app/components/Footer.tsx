const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/systemcmd0122" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              GitHub
            </a>
            <a href="https://discord.gg/m24YAckq7U" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              Discord Server
            </a>
            <a href="https://x.com/Tisk_01010100" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer