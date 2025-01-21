import { useState } from "react";
import { password } from "../../api/auth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Password() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [formData, setFormData] = useState({
      token: token,
      password: "",
      password_confirmation: "",
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
        const respon = await password(formData);
        setFormData({
          password: "",
          password_confirmation: "",
        });
        toast.success("Berhasil Ubah Password");
        setTimeout(() => {
            navigate('/');
        }, 1000);
        
      } catch (error) {
        toast.error(error.message);
      }
    };
    return (
      <div className="min-h-screen flex justify-center items-center px-2">
        <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
            <input
              type="password"
              name="password"
              placeholder="Password Baru"
              required
              id="password"
              onChange={handleChange}
              value={formData.password}
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Konfirmasi Password Baru"
              required
              id="password_confirmation"
              onChange={handleChange}
              value={formData.password_confirmation}
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="w-full flex justify-end gap-3">
              <button
                className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
                onClick={handleForgot}
              >
                Simpan
              </button>
            </div>
        </div>
      </div>
    );
  }
  