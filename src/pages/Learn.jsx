import { useParams } from 'react-router-dom'

function Learn() {
  const { moduleId } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Learn</h1>
      <p className="text-text-secondary">Module: {moduleId}</p>
    </div>
  )
}

export default Learn
