import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-[#2a2220] px-4">
      <h1 className="text-6xl font-bold mb-4 text-[#FFA601]">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="text-gray-300 mb-8 max-w-md">
        The page you're looking for doesn't exist or might have been moved.
      </p>
      <Link
        to="/"
        className="bg-[#FFA601] hover:bg-[#e09400] text-black font-semibold px-6 py-3 rounded transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
