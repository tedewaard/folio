import { Link, useRouterState } from '@tanstack/react-router'

export default function Header() {
  const router = useRouterState()
  const isHome = router.location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
          Trevor Edewaard
        </Link>
        <nav className="flex gap-6">
          {isHome ? (
            <>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#work-projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </a>
              <a href="#timeline" className="text-gray-600 hover:text-gray-900 transition-colors">
                Timeline
              </a>
            </>
          ) : (
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
          )}
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
