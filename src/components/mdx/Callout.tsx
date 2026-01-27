import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react'

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'danger'
  title?: string
  children: React.ReactNode
}

const calloutStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-600',
    title: 'text-blue-900',
    Icon: Info,
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200',
    icon: 'text-yellow-600',
    title: 'text-yellow-900',
    Icon: AlertTriangle,
  },
  tip: {
    container: 'bg-green-50 border-green-200',
    icon: 'text-green-600',
    title: 'text-green-900',
    Icon: Lightbulb,
  },
  danger: {
    container: 'bg-red-50 border-red-200',
    icon: 'text-red-600',
    title: 'text-red-900',
    Icon: AlertCircle,
  },
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[type]
  const Icon = style.Icon

  return (
    <div className={`my-6 p-4 border-l-4 rounded-r ${style.container}`}>
      <div className="flex gap-3">
        <Icon className={`flex-shrink-0 ${style.icon}`} size={20} />
        <div className="flex-1">
          {title && (
            <div className={`font-semibold mb-1 ${style.title}`}>
              {title}
            </div>
          )}
          <div className="text-gray-700 text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
