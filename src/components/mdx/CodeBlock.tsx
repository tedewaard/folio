import { useState, useEffect, useRef } from 'react'
import { Copy, Check } from 'lucide-react'
import hljs from 'highlight.js'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
}

export default function CodeBlock({ children, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current && language) {
      hljs.highlightElement(codeRef.current)
    }
  }, [children, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden bg-gray-900">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm text-gray-300 font-mono">{title}</span>
          {language && (
            <span className="text-xs text-gray-500 uppercase">{language}</span>
          )}
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded hover:bg-gray-700 transition-colors z-10"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code ref={codeRef} className={language ? `language-${language}` : ''}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  )
}
