import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Learn from './pages/Learn.jsx'
import Quiz from './pages/Quiz.jsx'
import Review from './pages/Review.jsx'
import Progress from './pages/Progress.jsx'
import MixedQuiz from './pages/MixedQuiz.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learn/:moduleId" element={<Learn />} />
        <Route path="/quiz/mixed" element={<MixedQuiz />} />
        <Route path="/quiz/:moduleId" element={<Quiz />} />
        <Route path="/review" element={<Review />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Layout>
  )
}

export default App
