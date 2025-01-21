import { useState, useEffect } from "react";
import { addDivisi } from "../../api/Divisi/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export default function FormAddDivisi() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nama: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddDivisi = async (e) => {
    e.preventDefault();
    try {
      const data = await addDivisi(formData);
      setFormData({
        Nama: "",
      });
      toast.success('Berhasil Tambah Divisi');
      setTimeout(() => {
          navigate('/divisi');
      }, 500);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="mt-5 bg-white rounded-sm shadow-md p-2">
      <form className="w-full" onSubmit={handleAddDivisi}>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Nama Divisi
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="Nama"
            id="Nama"
            placeholder="Masukkan Nama Divisi"
            onChange={handleChange}
            value={formData.Nama}
          />
        </div>
        <div className="w-full flex justify-end gap-3">
          <button
            className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
            type="submit"
          >
            Simpan
          </button>
          <button className=" bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base" onClick={navigate('/divisi')}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
