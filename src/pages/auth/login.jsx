import { useAuth } from "../../utils/AuthContext";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [Email_Sistem, SetEmail_Sistem] = useState('');
  const [Password, SetPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(Email_Sistem, Password);
      if (data.token) {
        // Simpan token dan informasi lainnya ke localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('id', data.karyawan.id);
        localStorage.setItem('userRole', data.karyawan.role.name); // Simpan role
        localStorage.setItem('userDivisi', data.karyawan.divisi.Nama); // Simpan divisi

        // Update status login di context
        setIsLoggedIn(true);
        
        const role = data.karyawan.role.name.toLowerCase();
        const divisi = data.karyawan.divisi.Nama.toLowerCase();
        toast.success('Login Berhasil');
        setTimeout(() => {
          if(role === "kepala divisi"){
            navigate('/kddashboard');
          } else if(divisi === "hr"){
            navigate('/hrdashboard');
          } else {
            navigate('/karyawandashboard');
          }
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-2">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <img src="/assets/icons/Logo-Panbil-Corporate.png" alt="Panbil Logo" className="w-24 h-auto mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Selamat Datang di Panbil
        </h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Masukan Email"
            value={Email_Sistem}
            required
            onChange={(e) => SetEmail_Sistem(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p>Lupa Password? <Link to={"/lupapassword"} className="italic text-blue-500">klik disini</Link></p>
      </div>
    </div>
  );
}
