import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCutiId, getIzinId } from "../../api/pengajuan/api";

export default function Pengajuan() {
  const [cuti, setCuti] = useState([]);
  const [izin, setIzin] = useState([]);
  const id = localStorage.getItem("id");
  const fetchData = async () => {
    try {
      const responscuti = await getCutiId(id);
      setCuti(responscuti);
      const responseizin = await getIzinId(id);
      setIzin(responseizin);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const head = [
    {
      name: "No",
      key: "no",
    },
    {
      name: "Tanggal Pengajuan",
      key: "tp",
    },
    {
      name: "Tujuan Cuti",
      key: "tc",
    },
    {
      name: "Tanggal Mulai Cuti",
      key: "tmc",
    },
    {
      name: "Tanggal Selesai Cuti",
      key: "tsc",
    },
    {
      name: "Sisa Kuota Cuti",
      key: "skc",
    },
    {
      name: "Jumlah Cuti",
      key: "jc",
    },
    {
      name: "Status",
      key: "status",
    },
    { name: "Alasan Penolakan", key: "alasan" },
  ];
  const headIzin = [
    {
      name: "No",
      key: "no",
    },
    {
      name: "Tanggal Pengajuan",
      key: "tpengajuan",
    },
    {
      name: "Tanggal Izin",
      key: "tizin",
    },
    {
      name: "Waktu Mulai",
      key: "wmulai",
    },
    {
      name: "Waktu Selesai",
      key: "wselesai",
    },
    {
      name: "Alasan izin",
      key: "alasanIzin",
    },
    {
      name: "Deskripsi",
      key: "deskripsi",
    },
    {
      name: "Sisa Izin",
      key: "sisa",
    },
    {
      name: "Status",
      key: "status",
    },
    { name: "Alasan Penolakan", key: "alasan" },
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
      case "tp":
        return item.tanggal_pengajuan;
      case "tc":
        return item.detail_pengajuan.tujuan_cuti;
      case "tmc":
        return item.detail_pengajuan.tanggal_mulai;
      case "tsc":
        return item.detail_pengajuan.tanggal_selesai;
      case "skc":
        return item.karyawan.Kuota_Cuti;
      case "jc":
        return item.detail_pengajuan.jumlah;
      case "status":
        return item.status;
      case "alasan":
        return item.alasan_penolakan;
      case "index":
        return item.id;
      default:
        return "";
    }
  };
  const getValueIzin = (item, key) => {
    switch (key) {
      case "tpengajuan":
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
      case "alasan":
        return item.alasan_penolakan;
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
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="text-3xl font-bold">Pengajuan</h1>
        <div className="flex gap-x-4 gap-y-4 mt-10">
          <Link
            className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 hover:bg-red-200"
            to={"/pengajuancuti"}
          >
            Cuti
          </Link>
          <Link
            to={"/pengajuanizin"}
            className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 hover:bg-red-200"
          >
            Izin
          </Link>
        </div>
        <div className="overflow-x-auto mt-9 w-full">
          <h1 className="font-bold text-xl">Tabel Cuti</h1>
          {cuti.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              Tidak ada data yang ditampilkan.
            </div>
          ) : (
            <>
              <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="text-xs md:text-sm lg:text-base">
                    {head.map((item) => (
                      <th
                        key={item.key}
                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-50 bg-gray-500"
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
                  {currentItemsMain.map((item, indexIzin) => (
                    <tr key={indexIzin}>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-200">
                        {indexOfFirstItemMain + indexIzin + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.tanggal_pengajuan}
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
                        {item.karyawan.Kuota_Cuti} Hari
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.detail_pengajuan.jumlah} Hari
                      </td>
                      <td className={`font-semibold border border-gray-300 px-4 py-2 ${item.status == "Pending" ? "bg-blue-400 text-white": item.status == "Accepted"?"bg-green-600 text-white":"bg-red-600 text-white"}`}>
                        {item.status}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.alasan_penolakan}
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
        <div className="overflow-x-auto mt-9 w-full">
          <h1 className="font-bold text-xl">Tabel Izin</h1>
          {izin.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              Tidak ada data yang ditampilkan.
            </div>
          ) : (
            <>
              <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="text-xs md:text-sm lg:text-base">
                    {headIzin.map((item) => (
                      <th
                        key={item.key}
                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-50 bg-gray-500"
                        onClick={() =>
                          item.key !== "action" && requestSortIzin(item.key)
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
                  {currentItemsIzin.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-200">
                        {indexOfFirstItemIzin + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.tanggal_pengajuan}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.detail_pengajuan.tanggal}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.detail_pengajuan.waktu_mulai}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.detail_pengajuan.waktu_selesai}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.detail_pengajuan.alasan_izin}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.detail_pengajuan.deskripsi}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                        {item.karyawan.Kuota_Izin} Jam
                      </td>
                      <td className={`font-semibold border border-gray-300 px-4 py-2 ${item.status == "Pending" ? "bg-blue-400 text-white": item.status == "Accepted"?"bg-green-600 text-white":"bg-red-600 text-white"}`}>
                        {item.status}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.alasan_penolakan}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
