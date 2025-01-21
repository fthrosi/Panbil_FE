import { useState } from "react";
import { AddPengajuan } from "../../api/pengajuan/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export default function FormPengajuanIzin() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [formData, setFormData] = useState({
    id_karyawan: id,
    id_jenis_pengajuan: "2",
    tanggal: "",
    waktu_mulai: "",
    alasan_izin: "",
    deskripsi: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddPengajuan = async (e) => {
    e.preventDefault();
    try {
      const data = await AddPengajuan(formData);
      setFormData({
        id_karyawan: id,
        id_jenis_pengajuan: "2",
        tanggal: "",
        waktu_mulai: "",
        alasan_izin: "",
        deskripsi: "",
      });
      toast.success('Berhasil Mengajukan Izin');
      setTimeout(() => {
        navigate('/pengajuan');
    }, 500);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="mt-5 bg-white rounded-sm shadow-md p-2">
      <form className="w-full" onSubmit={handleAddPengajuan}>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Reason
        </label>
        <div className="w-2/3 border mt-2">
          <select
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            name="alasan_izin"
            id="alasan_izin"
            onChange={handleChange}
            value={formData.alasan_izin}
            required
          >
            <option value="">--Pilih Jenis Izin--</option>
            <option value="Laleness">Laleness</option>
            <option value="Leaving and returning to office">Leaving and returning to office</option>
            <option value="Going home earlier">Going home earlier</option>
            <option value="No Finger print - IN">No Finger print - IN</option>
            <option value="No Finger print - OUT">No Finger print - OUT</option>
          </select>
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Day/Date
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="date"
            placeholder="Masukkan Tanggal Izin"
            name="tanggal"
            id="tanggal"
            onChange={handleChange}
            value={formData.tanggal}
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Time
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="time"
            placeholder="Masukkan waktu mulai"
            name="waktu_mulai"
            id="waktu_mulai"
            onChange={handleChange}
            value={formData.waktu_mulai}
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Description
        </label>
        <div className="w-2/3 border mt-2">
          <textarea
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            placeholder="Masukkan deskripsi"
            name="deskripsi"
            id="deskripsi"
            onChange={handleChange}
            value={formData.deskripsi}
            required
          />
        </div>
        <div className="w-full flex justify-end gap-3">
          <button
            className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base hover:bg-green-200"
            type="submit"
          >
            Simpan
          </button>
          <button className=" bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base hover:bg-red-200" onClick={() => navigate('/pengajuan')}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
