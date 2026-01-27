export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          Let's connect
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/trevor-edewaard-b21923a4/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/tedewaard" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
