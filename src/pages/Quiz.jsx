import { useParams } from 'react-router-dom'

function Quiz() {
  const { moduleId } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Quiz</h1>
      <p className="text-text-secondary">Quiz for module: {moduleId}</p>
    </div>
  )
}

export default Quiz
