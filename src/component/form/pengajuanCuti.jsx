export default function FormPengajuanCuti() {
  return (
    <div className="mt-5 bg-white rounded-sm shadow-md p-2">
      <form className="w-full">
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Jenis Cuti
        </label>
        <div className="w-2/3 border mt-2">
          <select
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="nama"
          >
            <option value="">--Pilih Jenis Cuti--</option>
            <option value="1">Tahunan / Annual</option>
            <option value="2">Sakit / Sick</option>
            <option value="3">Kawin / Marriage</option>
            <option value="4">Kemalangan / Compasonate</option>
            <option value="5">Melahirkan / Gift Birth</option>
            <option value="4">Istri Melahirkan</option>
            <option value="5">Tanpa Bayaran / Unpaid Leave</option>
            <option value="4">Cuti Lainnya / Others Leave</option>
          </select>
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Tujuan Cuti
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="text"
            placeholder="Masukkan text"
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Alamat Cuti
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="text"
            placeholder="Masukkan text"
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          No.Telepon
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="number"
            name="text"
            placeholder="Masukkan text"
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Cuti Yang Diambil
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="Number"
            name="text"
            placeholder="Masukkan text"
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
