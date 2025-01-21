import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getKaryawan,
  editKaryawan,
  deleteKaryawan,
  resetCuti,
  resetIzin
} from "../../api/karyawan/api";
import EditKaryawan from "../../component/modal/modalEditKaryawan";
import HapusKaryawan from "../../component/modal/hapusKaryawan";
import { getDivisi } from "../../api/Divisi/api";
import { getRole } from "../../api/role/api";
import { toast } from "sonner";
import ModalKonfirmasi from "../../component/modal/modalKonfirmasi";

export default function Karyawan() {
  const [karyawan, setKaryawan] = useState([]);
  const [open, setOpen] = useState(false);
  const [hapus, setHapus] = useState(false);
  const [divisi, setDivisi] = useState([]);
  const [role, setRole] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [openKonfirmasi, setOpenKonfirmasi] = useState(false);
  const [handleFunction, setHandleFunction] = useState(null);
  const [modalNama, setModalNama] = useState("");
  
  const openModal = (nama, func) => {
    setModalNama(nama); // Set nama dinamis
    setHandleFunction(() => func); // Set fungsi dinamis
    setOpenKonfirmasi(true); // Buka modal
  };

  const closeModal = () => {
    setOpenKonfirmasi(false);
  };

  const handleCuti = async () =>{
    try {
      await resetCuti();
      fetchKaryawan();
      toast.success("Berhasil Reset Kuota Cuti");
      closeModal();
    } catch (error) {
      toast.error(error.message);
    }
  }
  const handleIzin = async () =>{
    try {
      await resetIzin();
      fetchKaryawan();
      toast.success("Berhasil Reset Kuota Izin");
      closeModal();
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleOpen = (employeeData = null) => {
    if (employeeData) {
      // Hanya set form data jika ada employeeData (saat edit)
      setSelectedId(employeeData.id);
      setFormData({
        DivisiId: employeeData.divisi.id,
        RoleId: employeeData.role.id,
        Nama_depan: employeeData.Nama_depan,
        Nama_belakang: employeeData.Nama_belakang,
        email: employeeData.email,
        Tanggal_Mulai_Bekerja: employeeData.Tanggal_Mulai_Bekerja,
        Email_Sistem: employeeData.Email_Sistem,
        Password: employeeData.Password,
      });
    }
    setOpen(!open);
  };
  const handleTutup = async () => {
    setOpen(false);
  };
  const handleModalHapus = async () => {
    setHapus(!hapus);
  };
  const [formData, setFormData] = useState({
    DivisiId: "",
    RoleId: "",
    Nama_depan: "",
    Nama_belakang: "",
    email: "",
    Tanggal_Mulai_Bekerja: "",
    Email_Sistem: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEdit = async (formData) => {
    try {
      await editKaryawan(selectedId, formData);
      handleOpen();
      setFormData({
        DivisiId: "",
        RoleId: "",
        Nama_depan: "",
        Nama_belakang: "",
        email: "",
        Tanggal_Mulai_Bekerja: "",
        Email_Sistem: "",
        Password: "",
      });
      fetchKaryawan();
      toast.success("Berhasil Edit Karyawan");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleHapus = async () => {
    try {
      await deleteKaryawan(selectedId);
      fetchKaryawan();
      handleModalHapus();
      toast.success("Berhasil Hapus Karyawan");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchKaryawan = async () => {
    try {
      const data = await getKaryawan();
      setKaryawan(data);
    } catch (error) {
      console.log("gagal");
    }
  };
  const handleGetDivisi = async (e) => {
    try {
      const data = await getDivisi();
      setDivisi(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleGetRole = async (e) => {
    try {
      const data = await getRole();
      setRole(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchKaryawan();
    handleGetDivisi();
    handleGetRole();
  }, []);

  const head = [
    { name: "No", key: "index" },
    { name: "Nama Karyawan", key: "nama" },
    { name: "Divisi", key: "divisi" },
    { name: "Jabatan", key: "jabatan" },
    { name: "Email Pribadi", key: "email" },
    { name: "Email Perusahaan", key: "emailSistem" },
    { name: "Tanggal Mulai Bekerja", key: "tmb" },
    { name: "Sisa Kuota Cuti", key: "kuotaCuti" },
    { name: "Sisa Kuota Izin", key: "kuotaIzin" },
    { name: "Action", key: "action" },
  ];

  const requestSortMain = (key) => {
    let direction = "ascending";
    if (
      sortConfigMain.key === key &&
      sortConfigMain.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfigMain({ key, direction });
  };

  const getValue = (item, key) => {
    switch (key) {
      case "nama":
        return `${item.Nama_depan} ${item.Nama_belakang}`;
      case "divisi":
        return item.divisi?.Nama;
      case "jabatan":
        return item.role?.name;
      case "email":
        return item.email;
      case "emailSistem":
        return item.Email_Sistem;
      case "tmb":
        return item.Tanggal_Mulai_Bekerja;
      case "kuotaCuti":
        return item.Kuota_Cuti;
      case "kuotaIzin":
        return item.Kuota_Izin;
      case "index":
        return item.id;
      default:
        return "";
    }
  };

  const getSortedData = (dataToSort, sortConfig) => {
    if (!sortConfig.key) return dataToSort;

    return [...dataToSort].sort((a, b) => {
      const aValue = getValue(a, sortConfig.key);
      const bValue = getValue(b, sortConfig.key);

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };
  const [sortConfigMain, setSortConfigMain] = useState({
    key: null,
    direction: "ascending",
  });
  const [currentPageMain, setCurrentPageMain] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItemMain = currentPageMain * itemsPerPage;
  const indexOfFirstItemMain = indexOfLastItemMain - itemsPerPage;
  const sortedDataMain = getSortedData(
    Array.isArray(karyawan) ? karyawan : [],
    sortConfigMain
  );
  const currentItemsMain = Array.isArray(sortedDataMain)
    ? sortedDataMain.slice(indexOfFirstItemMain, indexOfLastItemMain)
    : [];
  const totalPagesMain = Math.ceil(karyawan.length / itemsPerPage);

  const Pagination = ({ currentPage, setCurrentPage, totalPages }) => (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      {open && (
        <EditKaryawan
          formData={formData}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleTutup={handleTutup}
          divisi={divisi}
          role={role}
        />
      )}
      {hapus && (
        <HapusKaryawan
          handleHapus={handleHapus}
          handleModalHapus={handleModalHapus}
        />
      )}
      {openKonfirmasi && (
        <ModalKonfirmasi
          konfirmasi={closeModal}
          handle={handleFunction} 
          nama={modalNama} 
        />
      )}
      <div className="max-w-full lg:p-6 p-2 md:p-4">
        <h1 className="lg:text-3xl text-lg md:text-xl font-bold">
          Kelola Data Karyawan
        </h1>
        <div className="flex flex-wrap gap-x-2">
          <div className="mt-5">
            <Link
              to={"/addkaryawan"}
              className="p-2 bg-blue-600 rounded-md text-white font-semibold text-xs lg:text-base hover:bg-blue-300"
            >
              Tambah Karyawan
            </Link>
          </div>
          <div className="mt-5">
            <Link
              className="p-2 bg-red-500 rounded-md text-white font-semibold text-xs lg:text-base hover:bg-red-300"
              onClick={() => openModal("Kuota Cuti", handleCuti)}
            >
              Reset Kuota Cuti
            </Link>
          </div>
          <div className="mt-5">
            <Link
              className="p-2 bg-red-500 rounded-md text-white font-semibold text-xs lg:text-base hover:bg-red-300"
              onClick={() => openModal("Kuota Izin", handleIzin)}
            >
              Reset Kuota Izin
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto mt-9 w-full">
          <h1 className="font-bold text-xl">Tabel Karyawan</h1>
          {karyawan.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              Tidak ada data yang ditampilkan.
            </div>
          ) : (
            <>
              <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300 mt-2">
                <thead>
                  <tr className="text-xs md:text-sm lg:text-base">
                    {head.map((item) => (
                      <th
                        key={item.key}
                        className="border border-gray-300 px-4 py-2 cursor-pointer bg-gray-500"
                        onClick={() =>
                          item.key !== "action" && requestSortMain(item.key)
                        }
                      >
                        <div className="flex items-center justify-center gap-1">
                          {item.name}
                          {sortConfigMain.key === item.key && (
                            <span>
                              {sortConfigMain.direction === "ascending"
                                ? "↑"
                                : "↓"}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm lg:text-base">
                  {currentItemsMain.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-200">
                        {indexOfFirstItemMain + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.Nama_depan} {item.Nama_belakang}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.divisi.Nama}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.role.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.Email_Sistem}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.Tanggal_Mulai_Bekerja}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.Kuota_Cuti} Hari
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.Kuota_Izin} jam
                      </td>
                      <td className=" border-gray-300 px-4 py-2 flex justify-center gap-4">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300"
                          onClick={() => handleOpen(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300"
                          onClick={() => {
                            setSelectedId(item.id);
                            handleModalHapus();
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                currentPage={currentPageMain}
                setCurrentPage={setCurrentPageMain}
                totalPages={totalPagesMain}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
