import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 pt-32 md:pt-40">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 shadow-lg rounded-2xl overflow-hidden">
        
        {/* Left Illustration */}
        <div className="bg-gray-50 flex items-center justify-center p-8 hidden md:flex">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"
            alt="Learning Illustration"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Login Form */}
        <div className="p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Log in to continue your learning journey
          </h2>
          <p className="text-gray-500 mb-6">
            Welcome back! Please log in to your account.
          </p>

          {/* Email Login */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Continue with Email
            </button>
          </form>

          {/* Social Login */}
          <div className="my-6 border-t pt-4 text-center text-gray-500 text-sm">
            Or continue with
          </div>
          <div className="flex justify-center space-x-4">
            <button className="border p-2 rounded-lg hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
            <button className="border p-2 rounded-lg hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
            <button className="border p-2 rounded-lg hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/831/831276.png"
                alt="Apple"
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Signup & Org Login */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Sign up
            </a>
          </div>
          <div className="mt-2 text-center text-sm">
            <a href="#" className="text-purple-600 hover:underline">
              Log in with your organization
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
