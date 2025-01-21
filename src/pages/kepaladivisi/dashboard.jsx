import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getKaryawanDivisi } from "../../api/karyawan/api";
import { toast } from "sonner";
export default function DashboardKd() {
  const divisi = localStorage.getItem("userDivisi");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const datas = await getKaryawanDivisi(divisi);
      setData(datas.data);
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
      name: "Nama",
      key: "nama",
    },
    {
      name: "Kuota Cuti",
      key: "cuti",
    },
    {
      name: "Kuota Izin",
      key: "izin",
    },
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
      case "cuti":
        return item.Kuota_Cuti;
      case "izin":
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
  const totalPagesMain = Math.ceil(Array.isArray(data) ? data.length : 0);
  const sortedDataMain = getSortedData(
    Array.isArray(data) ? data : [],
    sortConfigMain
  );
  const currentItemsMain = Array.isArray(sortedDataMain)
    ? sortedDataMain.slice(indexOfFirstItemMain, indexOfLastItemMain)
    : [];
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="mt-5">
          <Link
            to={"/daftarpengajuan"}
            className="text-white bg-gray-700 p-3 rounded-md shadow-lg font-semibold"
          >
            Daftar Pengajuan
          </Link>
        </div>
        <div className="overflow-x-auto mt-9 w-full">
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
                    {item.Nama_depan} {item.Nama_belakang}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.Kuota_Cuti}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                    {item.Kuota_Izin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
