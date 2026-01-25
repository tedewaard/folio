import { createFileRoute } from '@tanstack/react-router'
//import logo from '../logo.svg'
import TimelineCard from '../components/TimelineCard.tsx'

export const Route = createFileRoute('/timeline')({
  component: App,
})

function App() {
  return (
    <>
      <div className="h-20">
      </div>
      <div className="m-auto w-1 bg-black h-screen">
        <div>
          <TimelineCard/>
          <TimelineCard/>
          <TimelineCard/>
        </div>
      </div>
    </>
  )
}
