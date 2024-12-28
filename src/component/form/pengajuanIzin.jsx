export default function FormPengajuanIzin() {
  return (
    <div className="mt-5 bg-white rounded-sm shadow-md p-2">
      <form className="w-full">
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Reason
        </label>
        <div className="w-2/3 border mt-2">
          <select
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
            name="nama"
          >
            <option value="">--Pilih Jenis Izin--</option>
            <option value="1">Laleness</option>
            <option value="2">Leaving and returning to office</option>
            <option value="3">Going home earlier</option>
            <option value="4">No Finger print - IN</option>
            <option value="5">No Finger print - OUT</option>
          </select>
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Day/Date
        </label>
        <div className="w-2/3 border mt-2">
          <input
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="date"
            name="text"
            placeholder="Masukkan text"
          />
        </div>
        <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
          Time
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
          Description
        </label>
        <div className="w-2/3 border mt-2">
          <textarea
            className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
            type="text"
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
