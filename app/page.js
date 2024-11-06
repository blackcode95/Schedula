

import React from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h1 className="text-2xl font-semibold text-left text-zinc-500 mb-8">
          Hi there, welcome to <span className="text-blue-400 font-bold">Schedula</span>
        </h1>

        <h2 className="text-4xl font-bold text-black mb-6 text-left">Login</h2>
        <form className="flex flex-col space-y-4">
          <label className="text-left text-lg text-gray-700">
            Enter your Mobile Number <span className='text-red-400'>*</span>
            <input
              type="text"
              className="w-full mt-1 p-2 text-xl border border-blue-300 rounded-lg"
              placeholder="Mobile Number"
            />
          </label>

          <label className="text-left text-lg text-gray-700">
            Enter password
            <input
              type="password"
              className="w-full mt-1 p-2 text-xl border border-blue-300 rounded-lg"
              placeholder="Password"
            />
          </label>

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="scale-125"
                value="rememberMe"
              />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
