export default function FormAddUnitUsaha(){
    return(
        <div className="mt-5 bg-white rounded-sm shadow-md p-2">
            <form className="w-full">
            <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
              Nama Unit Usaha
            </label>
            <div className="w-2/3 border mt-2">
              <input
                className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
                type="text"
                name="namaunitusaha"
                placeholder="Masukkan Nama Unit Usaha"
              />
            </div>
            <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
              Alamat
            </label>
            <div className="w-2/3 border mt-2">
              <input
                className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
                type="text"
                name="alamat"
                placeholder="Masukkan Alamat"
              />
            </div>
            <label htmlFor="" className="font-bold text-sm md:text-base lg:text-lg">
              Nomor Telepon
            </label>
            <div className="w-2/3 border mt-2">
              <input
                className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
                type="number"
                name="notelp"
                placeholder="Masukkan Nomor Telepon"
              />
            </div>
            <div className="w-full flex justify-end gap-3">
              <button
                className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
                type="submit"
              >
                Simpan
              </button>
              <button
                className=" bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
    )
}