import { useState, useEffect } from "react";
import { getDivisi } from "../../api/Divisi/api";
import { getRole } from "../../api/role/api";
import { addKaryawan } from "../../api/karyawan/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export default function FormAddKaryawan() {
  const navigate = useNavigate();
  const [divisi, setDivisi] = useState([]);
  const [role, setRole] = useState([]);
  const [formData, setFormData] = useState({
    DivisiId: "",
    RoleId: "",
    Nama_depan: "",
    Nama_belakang: "",
    email: "",
    Tanggal_Mulai_Bekerja: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddKaryawan = async (e) => {
    e.preventDefault();
    try {
      const data = await addKaryawan(formData);
      setFormData({
        DivisiId: "",
        RoleId: "",
        Nama_depan: "",
        Nama_belakang: "",
        email: "",
        Tanggal_Mulai_Bekerja: "",
      });
      toast.success('Berhasil Menambah Karyawan');
      setTimeout(() => {
        navigate('/karyawan');
    }, 500);
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  };
  const handleGetDivisi = async (e) => {
    try {
      const data = await getDivisi();
      setDivisi(data);
    } catch (error) {
      toast.error(error.message)
    }
  };
  const handleGetRole = async (e) => {
    try {
      const data = await getRole();
      setRole(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    handleGetDivisi();
    handleGetRole();
  }, []);
  return (
    <div className="mt-5 bg-white rounded-sm shadow-md p-2">
      <form className="w-full" onSubmit={handleAddKaryawan}>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Divisi
        </label>
        <div className="w-2/3 border mt-2">
          <select
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            name="DivisiId"
            id="DivisiId"
            onChange={handleChange}
            value={formData.DivisiId}
            required
          >
            <option value="">--Pilih Divisi--</option>
            {divisi.map((item) => (
              <option key={item.id} value={item.id}>
                {item.Nama}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Role
        </label>
        <div className="w-2/3 border mt-2">
          <select
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            name="RoleId"
            id="RoleId"
            onChange={handleChange}
            value={formData.RoleId}
            required
          >
            <option value="">--Pilih Role--</option>
            {role.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Nama Depan
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="Nama_depan"
            id="Nama_depan"
            placeholder="Masukkan Nama Depan"
            onChange={handleChange}
            value={formData.Nama_depan}
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Nama Belakang
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="Nama_belakang"
            id="Nama_belakang"
            placeholder="Masukkan Nama Belakang"
            onChange={handleChange}
            value={formData.Nama_belakang}
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Email Pribadi
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="email"
            name="email"
            id="email"
            placeholder="Masukkan Email Pribadi"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Tanggal Mulai Bekerja
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="date"
            name="Tanggal_Mulai_Bekerja"
            id="Tanggal_Mulai_Bekerja"
            placeholder="Masukkan Tanggal Mulai Bekerja"
            onChange={handleChange}
            value={formData.Tanggal_Mulai_Bekerja}
          />
        </div>
        <div className="w-full flex justify-end gap-3">
          <button
            className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
            type="submit"
          >
            Simpan
          </button>
          <button className=" bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base" onClick={() => navigate('/karyawan')}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
