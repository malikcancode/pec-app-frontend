"use client";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col w-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 w-full">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">◊</span>
          </div>
          <span className="text-green-600 font-bold text-xl">PEC</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-black cursor-pointer text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Sign up
          </button>
          {/* <button className="p-2 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
            <FiMenu size={20} />
          </button> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-4 md:px-6 w-full">
        <div className="text-center md:text-left w-full">
          {/* Mobile (sm and below) */}
          <h1 className="text-4xl font-bold text-black leading-tight mb-6 sm:hidden">
            Global TOP1
            <br />
            brand
            <br />
            dropshipping
            <br />
            one-stop
            <br />
            solution.
          </h1>

          {/* Desktop (sm+) */}
          <h1 className="hidden sm:block text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            Global TOP1 brand dropshipping one-stop solution.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl mb-8 w-full">
            Great cooperation. Great development. Provide an integrated and
            comprehensive brand drop shipping service.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors mb-12"
          >
            Start your operation
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 md:p-6 w-full">
        <p className="text-gray-600 text-center md:text-left w-full">
          Discover why millions of entrepreneurs choose PEC to build their
          business — from hello world to IPO.
        </p>
      </footer>
    </div>
  );
}

export default Home;
