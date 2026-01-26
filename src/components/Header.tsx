export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Trevor Edewaard
        </h1>
        <nav className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#timeline" className="text-gray-600 hover:text-gray-900 transition-colors">
            Timeline
          </a>
        </nav>
      </div>
    </header>
  )
}
