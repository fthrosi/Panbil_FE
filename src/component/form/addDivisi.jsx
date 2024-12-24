export default function FormAddDivisi(){
    return(
        <div className="mt-5 bg-white rounded-sm shadow-md p-2">
            <form className="w-full">
            <label htmlFor="" className="font-bold text-[18px]">
              Text
            </label>
            <div className="w-2/3 border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="text"
                name="text"
                placeholder="Masukkan text"
              />
            </div>
            <label htmlFor="" className="font-bold text-[18px]">
              Text
            </label>
            <div className="w-2/3 border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="text"
                name="text"
                placeholder="Masukkan text"
              />
            </div>
            <label htmlFor="" className="font-bold text-[18px]">
              Text
            </label>
            <div className="w-2/3 border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="text"
                name="text"
                placeholder="Masukkan text"
              />
            </div>
            <label htmlFor="" className="font-bold text-[18px]">
              Text
            </label>
            <div className="w-2/3 border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="text"
                name="text"
                placeholder="Masukkan text"
              />
            </div>
            <label htmlFor="" className="font-bold text-[18px]">
              Text
            </label>
            <div className="w-2/3 border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="text"
                name="text"
                placeholder="Masukkan text"
              />
            </div>
            <div className="w-full flex justify-end gap-3">
              <button
                className="bg-[rgb(16,185,129)] py-3 px-14 rounded-xl mt-5 nunito text-white  "
                type="submit"
              >
                Simpan
              </button>
              <button
                className=" bg-red-500 py-3 px-14 rounded-xl mt-5 nunito text-white  "
              >
                Batal
              </button>
            </div>
          </form>
        </div>
    )
}