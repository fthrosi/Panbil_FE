export default function ModalLogout({ tutup, handleLogout }) {
    return (
      <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50">
        <div className="w-[550px] bg-white rounded-md">
          <div className="px-8 py-8">
            <h1 className="font-nunito text-[25px] font-bold text-center mb-6 border-b-2">
              Konfirmasi Keluar
            </h1>
            <h1 className="font-nunito text-[25px] font-bold text-center mb-6">
              Apakah anda yakin untuk keluar?
            </h1>
            <div className="w-full flex justify-end gap-3">
              <button
                onClick={tutup}
                className=" bg-red-500 py-3 px-5 rounded-xl mt-5 nunito text-white  "
              >
                Batal
              </button>
              <button
                className="bg-[rgb(16,185,129)] py-3 px-5 rounded-xl mt-5 nunito text-white  "
                onClick={handleLogout}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  