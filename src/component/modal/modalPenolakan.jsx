export default function Penolakan({
  formData,
  handleChange,
  handleOpen,
}) {
  const handleSubmit = (e) => {
    handleOpen();
  };

  return (
    <div className="min-h-screen w-full fixed inset-0 flex justify-center items-center px-2 bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white w-1/2 p-8 rounded-lg shadow-md">
        <form className="w-full" onSubmit={handleSubmit}>
          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Alasan Penolakan
          </label>
          <div className="w-2/3 border mt-2">
            <textarea
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="text"
              placeholder="Masukkan deskripsi"
              name="alasan_penolakan"
              id="alasan_penolakan"
              onChange={handleChange}
              value={formData.alasan_penolakan}
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
            <button
              onClick={handleOpen}
              className="bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
