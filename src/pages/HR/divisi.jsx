import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDivisi, editDivisi, deleteDivisi } from "../../api/Divisi/api";
import EditDivisi from "../../component/modal/editDivisi";
import HapusDivisi from "../../component/modal/hapusDivisi";
import { toast } from "sonner";

export default function Divisi() {
  const [divisi, setDivisi] = useState([]);
  const [open, setOpen] = useState(false);
  const [hapus, setHapus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleModalHapus = async () => {
    setHapus(!hapus);
  };
  const [formData, setFormData] = useState({
    Nama: "",
  });
  const handleOpen = (employeeData = null) => {
    if (employeeData) {
      setSelectedId(employeeData.id);
      setFormData({
        Nama: employeeData.Nama,
      });
    }
    setOpen(!open);
  };
  const handleTutup = async () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleHapus = async () => {
      try {
        await deleteDivisi(selectedId);
        handleGetDivisi();
        handleModalHapus();
        toast.success("Berhasil Hapus Divisi");
      } catch (error) {
        handleModalHapus();
        toast.error(error.message);
      }
    };
  const handleEdit = async (formData) => {
    try {
      await editDivisi(selectedId, formData);
      handleTutup();
      setFormData({
        Nama: "",
      });
      handleGetDivisi();
      toast.success("Berhasil Edit Divisi");
    } catch (error) {
      toast.error(error.message);
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
  const head = [
    {
      name: "No",
      key: "no",
    },
    {
      name: "Nama Divisi",
      key: "nama",
    },
    {
      name: "Jumlah Karyawan",
      key: "jumlah",
    },
    {
      name: "Action",
      key: "action",
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
        return item.Nama;
      case "jumlah":
        return item.karyawans_count;
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
  const sortedDataMain = getSortedData(divisi, sortConfigMain);
  const indexOfLastItemMain = currentPageMain * itemsPerPage;
  const indexOfFirstItemMain = indexOfLastItemMain - itemsPerPage;
  const currentItemsMain = sortedDataMain.slice(
    indexOfFirstItemMain,
    indexOfLastItemMain
  );
  const totalPagesMain = Math.ceil(divisi.length / itemsPerPage);

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
    handleGetDivisi();
  }, []);
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      {open && (
        <EditDivisi
          formData={formData}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleTutup={handleTutup}
        />
      )}
      {hapus && (
        <HapusDivisi
          handleHapus={handleHapus}
          handleModalHapus={handleModalHapus}
        />
      )}
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="text-3xl font-bold">Kelola Data Divisi</h1>
        <div className="mt-5">
          <Link
            to={"/adddivisi"}
            className="p-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-200"
          >
            Tambah Divisi
          </Link>
        </div>
        <div className="overflow-x-auto mt-9 w-full">
          <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
            <thead>
              <tr className="text-xs md:text-sm lg:text-base">
                {head.map((item) => (
                  <th
                    key={item.key}
                    className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-50"
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
                  <td className="border border-gray-300 px-4 py-2">
                    {indexOfFirstItemMain + index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Nama}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.karyawans_count} orang
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-200"
                      onClick={() => handleOpen(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-200"
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
        </div>
      </div>
    </div>
  );
}
