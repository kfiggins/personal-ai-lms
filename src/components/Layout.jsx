import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

function Layout({ children }) {
  const { user, signOut } = useAuth()

  return (
    <>
      <nav className="bg-dark-surface border-b border-dark-border px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-accent hover:text-accent-hover transition-colors">
            Claude Code Academy
          </NavLink>
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              Progress
            </NavLink>
            <NavLink
              to="/review"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              Review
            </NavLink>
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              Guide
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`
              }
              title="Settings"
            >
              Settings
            </NavLink>
            {user && (
              <>
                <span className="text-xs text-text-secondary truncate max-w-[150px]" title={user.email}>
                  {user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
        {children}
      </main>
    </>
  )
}

export default Layout
