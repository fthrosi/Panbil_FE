export default function EditDivisi({
  formData,
  handleChange,
  handleEdit,
  handleTutup,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData);
  };
  return (
    <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white w-1/2 p-8 rounded-lg shadow-md">
        <form className="w-full" onSubmit={handleSubmit}>
          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Nama Divisi
          </label>
          <div className="border mt-2">
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
            <button
              onClick={handleTutup}
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
