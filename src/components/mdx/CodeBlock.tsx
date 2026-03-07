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

  // Split code into lines for line numbering
  const trimmedCode = children.trim()
  const lines = trimmedCode.split('\n')

  return (
    <div className="my-4 rounded-lg overflow-hidden bg-gray-900">
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
          className="absolute top-3 right-3 rounded hover:bg-gray-700 transition-colors z-10"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
        <pre className="overflow-x-auto m-0 p-0">
          <div className="flex">
            <div className="py-2 pl-3 pr-2 text-gray-500 text-right border-r border-gray-700 select-none font-mono text-sm" style={{ lineHeight: '1.625' }}>
              {lines.map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
            <code ref={codeRef} className={`block py-2 pl-3 pr-3 flex-1 font-mono text-sm whitespace-pre ${language ? `language-${language}` : ''}`} style={{ lineHeight: '1.625' }}>
              {trimmedCode}
            </code>
          </div>
        </pre>
      </div>
    </div>
  )
}
