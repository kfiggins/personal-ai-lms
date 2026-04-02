import { Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx'
import { DataProvider, useData } from './contexts/DataContext.jsx'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Category from './pages/Category.jsx'
import Learn from './pages/Learn.jsx'
import Quiz from './pages/Quiz.jsx'
import Review from './pages/Review.jsx'
import Progress from './pages/Progress.jsx'
import MixedQuiz from './pages/MixedQuiz.jsx'
import Guide from './pages/Guide.jsx'
import Settings from './pages/Settings.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'

function AppRoutes() {
  const { user, loading: authLoading } = useAuth()
  const { loading: dataLoading } = useData()

  if (authLoading || (user && dataLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Login />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/learn/:moduleId" element={<Learn />} />
        <Route path="/quiz/mixed" element={<MixedQuiz />} />
        <Route path="/quiz/:moduleId" element={<Quiz />} />
        <Route path="/review" element={<Review />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </AuthProvider>
  )
}

export default App
