import { Link } from "react-router-dom";

export default function LupaPassword() {
  return (
    <div className="min-h-screen flex justify-center items-center px-2">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <h1 class="text-2xl font-semibold text-gray-800 mb-6">
          RESET PASSWORD
        </h1>
        <img
          src="logo.png"
          alt="Panbil Logo"
          class="w-24 h-auto mx-auto mb-4"
        />
        <form class="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Verifikasi"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Kirim Link Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
