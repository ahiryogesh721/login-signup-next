import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <p className="text-gray-600 mb-8">Please sign up or log in to continue</p>
      <div className="flex space-x-4">
        <Link href="/auth/signup" passHref>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Sign Up
          </button>
        </Link>
        <Link href="/auth/login" passHref>
          <button className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
