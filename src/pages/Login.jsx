import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setSubmitting(true)

    if (isSignUp) {
      const { error } = await signUp(email, password)
      if (error) {
        setError(error.message)
      } else {
        setMessage('Check your email for a confirmation link.')
      }
    } else {
      const { error } = await signIn(email, password)
      if (error) {
        setError(error.message)
      } else {
        navigate('/')
      }
    }

    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-dark-card border border-dark-border rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-accent mb-2">Claude Code Academy</h1>
        <p className="text-text-secondary mb-6">
          {isSignUp ? 'Create an account to save your progress' : 'Sign in to continue learning'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md text-text-primary focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-md text-text-primary focus:outline-none focus:border-accent"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          {message && (
            <p className="text-green-400 text-sm">{message}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2 px-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors disabled:opacity-50"
          >
            {submitting ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-text-secondary">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(null); setMessage(null) }}
            className="text-accent hover:text-accent-hover transition-colors"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
