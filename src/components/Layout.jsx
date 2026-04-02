import { NavLink } from 'react-router-dom'

function Layout({ children }) {
  return (
    <>
      <nav className="bg-dark-surface border-b border-dark-border px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-accent hover:text-accent-hover transition-colors">
            Claude Code Academy
          </NavLink>
          <div className="flex gap-6">
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
