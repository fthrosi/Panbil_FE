export default function UbahPassword({
  editData,
  handleChangeEdit,
  handleEditPass,
  handlePass,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditPass(editData);
  };
  return (
    <div className="min-h-screen w-full fixed inset-0 flex justify-center items-center px-2 bg-[rgba(0,0,0,0.5)] z-50">
      <div class="bg-white p-8 rounded-lg shadow-md text-center">
        <form class="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password Lama"
            required
            onChange={handleChangeEdit}
            value={editData.Password}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="PasswordBaru"
            id="PasswordBaru"
            placeholder="Password Baru"
            required
            onChange={handleChangeEdit}
            value={editData.PasswordBaru}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="w-full flex justify-end gap-3">
            <button
              className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              type="submit"
            >
              Simpan
            </button>
            <button
              className=" bg-red-500 lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              onClick={handlePass}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
