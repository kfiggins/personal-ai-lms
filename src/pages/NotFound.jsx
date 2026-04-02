import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="text-6xl mb-4">404</div>
      <h1 className="text-2xl font-bold mb-2">Page not found</h1>
      <p className="text-text-secondary mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
