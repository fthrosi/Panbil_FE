import React, { useState, useEffect } from "react";
import {
  getCutiDivisi,
  getIzinDivisi,
  updateStatus,
} from "../../api/pengajuan/api";
import Penolakan from "../../component/modal/modalPenolakan";
import { toast } from "sonner";

const DaftarPengajuan = () => {
  const [cuti, setCuti] = useState([]);
  const [izin, setIzin] = useState([]);
  const [open,setOpen] = useState(false);
  const [id,setId] = useState(null);
  const divisi = localStorage.getItem("userDivisi");
  const handleTutup = async (id) =>{
    setFormData({
      status: "Denied",
    });
    setId(id);
    setOpen(!open);
  }
  const handleOpen = async () =>{
    handleAccept(id,"Denied");
    setOpen(false);
  }
  const [formData, setFormData] = useState({
    status: "",
    alasan_penolakan: "",
  });
  const fetchData = async () => {
    try {
      const responscuti = await getCutiDivisi(divisi);
      setCuti(responscuti.data);
      const responseizin = await getIzinDivisi(divisi);
      setIzin(responseizin.data);
    } catch (error) {
      // toast.error('Login Gagal');
      console.log("gagal");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAccept = async (id,status) => {
    try {
      let dataToSend;
      if(status === "Accepted") {
        dataToSend = {
          status: "Accepted"
        };
      } else {
        dataToSend = formData;  // Untuk denied, gunakan formData yang sudah terisi alasan
      }
      
      const respons = await updateStatus(id, dataToSend);
      setFormData({  // Reset form
        status: "",
        alasan_penolakan: "",
      });
      toast.success("Status Sudah Diperbarui")
      fetchData();
    } catch (error) {
      toast.error(error.message)
    }
  };
  const head = [
    { name: "No", key: "no" },
    { name: "Nama Karyawan", key: "nama" },
    { name: "Tanggal Pengajuan", key: "tglP" },
    { name: "Jenis Cuti", key: "jenis" },
    { name: "Tujuan Cuti", key: "tujuan" },
    { name: "Tanggal Mulai Cuti", key: "tglM" },
    { name: "Tanggal Selesai Cuti", key: "tglS" },
    { name: "Kuota Cuti", key: "kuota" },
    { name: "Jumlah Cuti", key: "jml" },
    { name: "Status", key: "status" },
    { name: "Action", key: "action" },
  ];
  const headIzin = [
    { name: "No", key: "no" },
    { name: "Nama Karyawan", key: "nama" },
    { name: "Tanggal Pengajuan", key: "tglP" },
    { name: "Tanggal Izin", key: "tizin" },
    { name: "Waktu Mulai", key: "wmulai" },
    { name: "Waktu Selesai", key: "wselesai" },
    { name: "Alasan izin", key: "alasanIzin" },
    { name: "Deskripsi", key: "deskripsi" },
    { name: "Sisa Izin", key: "sisa" },
    { name: "Status", key: "status" },
    { name: "Action", key: "action" },
  ];
  // Separate states for each table
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
  const requestSortIzin = (key) => {
    let direction = "ascending";
    if (
      sortConfigIzin.key === key &&
      sortConfigIzin.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfigIzin({ key, direction });
  };

  const getValue = (item, key) => {
    switch (key) {
      case "nama":
        return `${item.karyawan.Nama_depan} ${item.karyawan.Nama_belakang}`;
      case "tglP":
        return item.tanggal_pengajuan;
      case "jenis":
        return item.detail_pengajuan.jenis;
      case "tujuan":
        return item.detail_pengajuan.tujuan_cuti;
      case "tglM":
        return item.detail_pengajuan.tanggal_mulai;
      case "tglS":
        return item.detail_pengajuan.tanggal_selesai;
      case "kuota":
        return item.karyawan.Kuota_Cuti;
      case "jml":
        return item.detail_pengajuan.jumlah;
      case "status":
        return item.status;
      case "index":
        return item.id;
      default:
        return "";
    }
  };
  const getValueIzin = (item, key) => {
    switch (key) {
      case "nama":
        return `${item.karyawan.Nama_depan} ${item.karyawan.Nama_belakang}`;
      case "tglP":
        return item.tanggal_pengajuan;
      case "tizin":
        return item.detail_pengajuan.tanggal;
      case "wmulai":
        return item.detail_pengajuan.waktu_mulai;
      case "wselesai":
        return item.detail_pengajuan.waktu_selesai;
      case "alasanIzin":
        return item.detail_pengajuan.alasan_izin;
      case "deskripsi":
        return item.detail_pengajuan.deskripsi;
      case "sisa":
        return item.karyawan.Kuota_Izin;
      case "status":
        return item.status;
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
  const getSortedDataIzin = (dataToSort, sortConfig) => {
    if (!sortConfig.key) return dataToSort;

    return [...dataToSort].sort((a, b) => {
      const aValue = getValueIzin(a, sortConfig.key);
      const bValue = getValueIzin(b, sortConfig.key);

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
  const [sortConfigIzin, setSortConfigIzin] = useState({
    key: null,
    direction: "ascending",
  });
  const [currentPageMain, setCurrentPageMain] = useState(1);
  const [currentPageIzin, setCurrentPageIzin] = useState(1);
  const itemsPerPage = 5;
  const itemsPerPageIzin = 5;
  const indexOfLastItemMain = currentPageMain * itemsPerPage;
  const indexOfFirstItemMain = indexOfLastItemMain - itemsPerPage;
  const totalPagesMain = Math.ceil(Array.isArray(cuti) ? cuti.length / itemsPerPage : 0);
  const sortedDataMain = getSortedData(
    Array.isArray(cuti) ? cuti : [],
    sortConfigMain
  );
  const currentItemsMain = Array.isArray(sortedDataMain)
  ? sortedDataMain.slice(indexOfFirstItemMain, indexOfLastItemMain)
  : [];
  const sortedDataIzin = getSortedDataIzin(
    Array.isArray(izin) ? izin : [],
    sortConfigIzin
  );
  const indexOfLastItemIzin = currentPageIzin * itemsPerPageIzin;
  const indexOfFirstItemIzin = indexOfLastItemIzin - itemsPerPageIzin;
  const currentItemsIzin = Array.isArray(sortedDataIzin)
  ? sortedDataIzin.slice(indexOfFirstItemIzin, indexOfLastItemIzin)
  : [];
    
  const totalPagesIzin = Math.ceil(Array.isArray(izin) ? izin.length / itemsPerPageIzin : 0);
  const Pagination = ({ currentPage, setCurrentPage, totalPages }) => (
    <div className="flex justify-center gap-2 mt-4">
      {totalPages > 0 && (  // Tambahkan pengecekan ini
        <>
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
        </>
      )}
    </div>
  );
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4">
      {open && (
        <Penolakan
          formData={formData}
          handleChange={handleChange}
          handleOpen={handleOpen}
        />
      )}
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="text-3xl font-bold">Daftar Pengajuan Cuti</h1>
        <div className="overflow-x-auto mt-9 w-full">
          <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
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
                          {sortConfigMain.direction === "ascending" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm lg:text-base">
              {currentItemsMain.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-200">
                    {indexOfFirstItemMain + index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.karyawan.Nama_depan} {item.karyawan.Nama_belakang}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.tanggal_pengajuan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.detail_pengajuan.jenis}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.detail_pengajuan.tujuan_cuti}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.detail_pengajuan.tanggal_mulai}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.detail_pengajuan.tanggal_selesai}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.karyawan.Kuota_Cuti}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.detail_pengajuan.jumlah}
                  </td>
                  <td className={`font-semibold border border-gray-300 px-4 py-2 ${item.status == "Pending" ? "bg-blue-400 text-white": item.status == "Accept"?"bg-green-600 text-white":"bg-red-600 text-white"}`}>
                    {item.status}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-x-4 ">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300"
                      onClick={() => {
                        setFormData({
                          status: "Accepted",
                        });
                        handleAccept(item.id,"Accepted");
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300"
                      onClick={() => {
                        handleTutup(item.id);
                      }}
                    >
                      Denied
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
        </div>

        <h1 className="mt-10 text-3xl font-bold">Daftar Pengajuan Izin</h1>
        <div className="overflow-x-auto mt-9 w-full">
          <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
            <thead>
              <tr className="text-xs md:text-sm lg:text-base">
                {headIzin.map((item) => (
                  <th
                    key={item.key}
                    className="border border-gray-300 px-4 py-2 cursor-pointer  bg-gray-500"
                    onClick={() => requestSortIzin(item.key)}
                  >
                    <div className="flex items-center justify-center gap-1">
                      {item.name}
                      {sortConfigIzin.key === item.key && (
                        <span>
                          {sortConfigIzin.direction === "ascending"
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
              {currentItemsIzin.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-200">
                    {indexOfFirstItemIzin + index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.karyawan.Nama_depan} {item.karyawan.Nama_belakang}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.tanggal_pengajuan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.detail_pengajuan.tanggal}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.detail_pengajuan.waktu_mulai}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.detail_pengajuan.waktu_selesai}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.detail_pengajuan.alasan_izin}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.detail_pengajuan.deskripsi}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.karyawan.Kuota_Izin}
                  </td>
                  <td className={`font-semibold border border-gray-300 px-4 py-2 ${item.status == "Pending" ? "bg-blue-400 text-white": item.status == "Accept"?"bg-green-600 text-white":"bg-red-600 text-white"}`}>
                    {item.status}
                  </td>
                  <td className=" px-4 py-2 flex justify-center gap-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300"
                      onClick={() => {
                        setFormData({
                          status: "Accepted",
                        });
                        handleAccept(item.id,"Accepted");
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300"
                      onClick={() => {
                        handleTutup(item.id);
                      }}
                    >
                      Denied
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            currentPage={currentPageIzin}
            setCurrentPage={setCurrentPageIzin}
            totalPages={totalPagesIzin}
          />
        </div>
      </div>
    </div>
  );
};

export default DaftarPengajuan;
