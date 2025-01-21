import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UbahPassword from "./auth/ubahPassword";
import { getProfile, UpdateFoto } from "../api/profile/api";
import { getPhoto } from "../api";
import UbahEmail from "../component/modal/ubahEmail";
import { UpdateEmail,UpdatePass } from "../api/profile/api";
import { toast } from "sonner";

export default function Profile() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const id = localStorage.getItem("id");
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });
  const [editData, setEditData] = useState({
    Password: "",
    PasswordBaru: "",
  });
  const handleOpen = (employeeData = null) => {
    if (employeeData) {
      setFormData({
        email: employeeData.email,
      });
    }
    setOpen(!open);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEdit = async (formData) => {
    try {
      await UpdateEmail(id, formData);
      handleOpen();
      setFormData({
        email: "",
        Password: "",
      });
      fetchData();
      toast.success("Berhasil Edit Data");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleEditPass = async (editData) => {
    try {
      await UpdatePass(id, editData);
      handlePass();
      setEditData({
        Password: "",
        PasswordBaru: "",
      });
      fetchData();
      toast.success("Berhasil Edit Password");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleTutup = async () => {
    setOpen(false);
  };
  const handleFoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append("Foto", file);
      console.log(file, formData.foto);
      const respons = await UpdateFoto(id, formData);
      fetchData();
      toast.success('Berhasil Mengubah Foto');
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fetchData = async () => {
    try {
      const datas = await getProfile(id);
      setData(datas.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [pass, setPass] = useState(false);
  const handlePass = () => {
    setPass(!pass);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="lg:pl-64 px-2 md:px-4 ">
      {open && (
        <UbahEmail
          formData={formData}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleTutup={handleTutup}
        />
      )}
      {pass && (
        <UbahPassword
          editData={editData}
          handleChangeEdit={handleChangeEdit}
          handleEditPass={handleEditPass}
          handlePass={handlePass}
        />
      )}
      <div className="pt-6 pl-6 pr-2">
        <div className="bg-white rounded-sm shadow-md p-2 z-10">
          <div className="flex">
            <div className="flex justify-start items-center lg:gap-10 gap-5">
              <div
                className="lg:size-40 size-20 bg-blue-500 rounded-full"
                onClick={() => document.getElementById("profil").click()}
              >
                <img
                  className="w-full h-full rounded-full "
                  src={
                    data.Foto ? getPhoto(data.Foto) : "/assets/images/5856.jpg"
                  }
                  alt=""
                />
              </div>
              <input
                id="profil"
                type="file"
                className="w-full box-border hidden"
                onChange={(event) => {
                  const file = event.target.files[0];
                  handleFoto(file);
                }}
                accept="image/*"
              />
              <div>
                <h1 className="text-base md:text-xl lg:text-2xl font-semibold">
                  {data.Nama_depan} {data.Nama_belakang}
                </h1>
                <h1 className="text-sm md:text-lg lg:text-xl">
                  {data.Email_Sistem}
                </h1>
              </div>
            </div>
          </div>
          <h1 className="mt-8 md:text-lg lg:text-xl font-semibold">
            Email Pribadi
          </h1>
          <div className="w-full bg-gray-100  p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            {data.email}
          </div>
          <h1 className="mt-2 md:text-lg lg:text-xl font-semibold">
            Tanggal Mulai Bekerja
          </h1>
          <div className="w-full bg-gray-100 mt-2 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            {data.Tanggal_Mulai_Bekerja}
          </div>
          <h1 className="mt-2 md:text-lg lg:text-xl font-semibold">Divisi</h1>
          <div className="w-full bg-gray-100 mt-2 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            Divisi {data.divisi?.Nama}
          </div>
          <h1 className="mt-2 md:text-lg lg:text-xl font-semibold">Jabatan</h1>
          <div className="w-full bg-gray-100 mt-2 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            {data.role?.name}
          </div>
          <div className="w-full flex justify-end gap-3">
            <button
              className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              onClick={() => handleOpen(data)}
            >
              Edit Profile
            </button>
            <button
              className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              onClick={handlePass}
            >
              Ubah Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
