import React from 'react';

const Header = () => {
  return (
    <div className=" sticky top-0 z-50 flex flex-col lg:flex-row items-center gap-4 p-4">
      {/* Brand and mobile Sign In */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <a href="/" className="shrink-0">
          <div className="font-bold text-blue-600 text-lg px-3 py-1.5 rounded-lg transition">
            <h1 className="text-2xl font-bold text-blue-600">Ticket Palace</h1>
          </div>
        </a>
        {/* Mobile Sign In */}
        <div className="lg:hidden">
          <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
            Sign In
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full lg:max-w-2xl">
        <div className="w-full max-w-4xl mx-auto">
          <form className="relative">
            <input
              type="text"
              placeholder="Search for events..."
              className="w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              defaultValue=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Sign In */}
      <div className="hidden lg:block ml-auto">
        <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
