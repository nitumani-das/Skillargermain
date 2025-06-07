import React from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 pt-32 md:pt-40">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-2xl overflow-hidden">
        
        {/* Left Illustration (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-8">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"
            alt="Signup Illustration"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Signup Form */}
        <div className="p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create your Skillarger account
          </h2>
          <p className="text-gray-500 mb-6">
            Join us and start your learning journey today.
          </p>

          {/* Signup Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Create Account
            </button>
          </form>

          {/* Social Signup */}
          <div className="my-6 border-t pt-4 text-center text-gray-500 text-sm">
            Or sign up with
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

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
