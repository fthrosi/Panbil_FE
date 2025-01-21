export default function EditKaryawan({
  formData,
  handleChange,
  handleEdit,
  handleTutup,
  divisi,
  role,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData);
  };

  return (
    <div className="min-h-screen w-full fixed inset-0 flex justify-center items-center px-2 bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white w-1/2 p-8 rounded-lg shadow-md">
        <form className="w-full" onSubmit={handleSubmit}>
          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Divisi
          </label>
          <div className="border mt-2">
            <select
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              name="DivisiId"
              id="DivisiId"
              onChange={handleChange}
              value={formData.DivisiId}
              required
            >
              <option value="">--Pilih Divisi--</option>
              {divisi.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.Nama}
                </option>
              ))}
            </select>
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Role
          </label>
          <div className="border mt-2">
            <select
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              name="RoleId"
              id="RoleId"
              onChange={handleChange}
              value={formData.RoleId}
              required
            >
              <option value="">--Pilih Role--</option>
              {role.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Nama Depan
          </label>
          <div className="border mt-2">
            <input
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="text"
              name="Nama_depan"
              id="Nama_depan"
              placeholder="Masukkan Nama Depan"
              onChange={handleChange}
              value={formData.Nama_depan}
            />
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Nama Belakang
          </label>
          <div className="border mt-2">
            <input
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="text"
              name="Nama_belakang"
              id="Nama_belakang"
              placeholder="Masukkan Nama Belakang"
              onChange={handleChange}
              value={formData.Nama_belakang}
            />
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Email Pribadi
          </label>
          <div className="border mt-2">
            <input
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan Email Pribadi"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Email Perusahaan
          </label>
          <div className="border mt-2">
            <input
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="email"
              name="Email_Sistem"
              id="Email_Sistem"
              placeholder="Masukkan Email Sistem"
              onChange={handleChange}
              value={formData.Email_Sistem}
            />
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Tanggal Mulai Bekerja
          </label>
          <div className="border mt-2">
            <input
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="date"
              name="Tanggal_Mulai_Bekerja"
              id="Tanggal_Mulai_Bekerja"
              placeholder="Masukkan Tanggal Mulai Bekerja"
              onChange={handleChange}
              value={formData.Tanggal_Mulai_Bekerja}
            />
          </div>

          <label
            htmlFor=""
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Password
          </label>    
          <div className="border mt-2">
            <input
              className="w-full px-2 py-1 text-xs md:text-sm lg:text-base"
              type="password"
              name="Password"
              id="Password"
              placeholder="Masukkan Password"
              onChange={handleChange}
              value={formData.Password}
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
