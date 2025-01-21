import { useState } from "react";
import { AddPengajuan } from "../../api/pengajuan/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export default function FormPengajuanCuti() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [formData, setFormData] = useState({
    id_karyawan: id,
    id_jenis_pengajuan: "1",
    jenis: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    tujuan_cuti: "",
    alamat: "",
    Nomor_telepon: "",
    jumlah: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for jumlah field
    if (name === "jumlah") {
      // Only allow numbers and single decimal point
      const regex = /^\d*\.?\d*$/;
      if (value === "" || regex.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddPengajuan = async (e) => {
    e.preventDefault();
    try {
      const submissionData = {
        ...formData,
        jumlah: parseFloat(formData.jumlah) || 0
      };
      const data = await AddPengajuan(submissionData);
      setFormData({
        id_karyawan: id,
        id_jenis_pengajuan: "1",
        jenis: "",
        tanggal_mulai: "",
        tanggal_selesai: "",
        tujuan_cuti: "",
        alamat: "",
        Nomor_telepon: "",
        jumlah: "",
      });
      toast.success('Berhasil Mengajukan Cuti');
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
          Jenis Cuti
        </label>
        <div className="w-2/3 border mt-2">
          <select
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            name="jenis"
            id="jenis"
            onChange={handleChange}
            value={formData.jenis}
            required
          >
            <option value="">--Pilih Jenis Cuti--</option>
            <option value="Tahunan / Annual">Tahunan / Annual</option>
            <option value="Sakit / Sick">Sakit / Sick</option>
            <option value="Kawin / Marriage">Kawin / Marriage</option>
            <option value="Kemalangan / Compasonate">
              Kemalangan / Compasonate
            </option>
            <option value="Melahirkan / Gift Birth">
              Melahirkan / Gift Birth
            </option>
            <option value="Istri Melahirkan">Istri Melahirkan</option>
            <option value="anpa Bayaran / Unpaid Leave">
              Tanpa Bayaran / Unpaid Leave
            </option>
            <option value="uti Lainnya / Others Leave">
              Cuti Lainnya / Others Leave
            </option>
          </select>
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Tanggal Mulai
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="date"
            name="tanggal_mulai"
            id="tanggal_mulai"
            placeholder="Masukkan Tanggal Mulai Cuti"
            onChange={handleChange}
            value={formData.tanggal_mulai}
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Tanggal Selesai
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="date"
            name="tanggal_selesai"
            id="tanggal_selesai"
            placeholder="Masukkan Tanggal Selesai Cuti"
            onChange={handleChange}
            value={formData.tanggal_selesai}
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Tujuan Cuti
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="tujuan_cuti"
            id="tujuan_cuti"
            placeholder="Masukkan tujuan cuti"
            onChange={handleChange}
            value={formData.tujuan_cuti}
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Alamat Cuti
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="alamat"
            id="alamat"
            placeholder="Masukkan Alamat"
            onChange={handleChange}
            value={formData.alamat}
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          No.Telepon
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="tel"
            name="Nomor_telepon"
            id="Nomor_telepon"
            placeholder="Masukkan nomor telepon"
            onChange={handleChange}
            value={formData.Nomor_telepon}
            pattern="[0-9]{10,15}"
            required
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Cuti Yang Diambil
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="jumlah"
            id="jumlah"
            placeholder="Masukkan jumlah cuti (contoh: 2.5)"
            onChange={handleChange}
            value={formData.jumlah}
            pattern="^\d*\.?\d*$"
            title="Masukkan angka dengan format desimal menggunakan titik (.) Contoh: 2.5"
            required
          />
        </div>
        <div className="w-full flex justify-end gap-3">
          <button
            className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
            type="submit"
          >
            Simpan
          </button>
          <button className=" bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
