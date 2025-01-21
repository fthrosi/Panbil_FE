import { useState } from "react";
import { forgotPassword } from "../../api/auth";
import { toast } from "sonner";
export default function LupaPassword() {
  const [formData, setFormData] = useState({
    email: "",
    Email_Sistem: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleForgot = async () => {
    try {
      const respon = await forgotPassword(formData);
      setFormData({
        email: "",
        Email_Sistem: "",
      });
      toast.success("Email Konfirmasi Telah Dikirmkan Ke Email Anda");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-2">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <h1 class="text-2xl font-semibold text-gray-800 mb-6">
          RESET PASSWORD
        </h1>
        <img
          src="/assets/icons/Logo-Panbil-Corporate.png"
          alt="Panbil Logo"
          class="w-24 h-auto mx-auto mb-4"
        />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            id="email"
            onChange={handleChange}
            value={formData.email}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="Email_Sistem"
            placeholder="Email Sistem"
            required
            id="Email_Sistem"
            onChange={handleChange}
            value={formData.Email_Sistem}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
          />
          <button
            onClick={handleForgot}
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
          >
            Kirim Link Reset Password
          </button>
      </div>
    </div>
  );
}
