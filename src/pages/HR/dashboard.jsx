import { Link } from "react-router-dom";

export default function DashboardHr() {
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-x-4 gap-y-4 mt-10">
          <Link
            className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 hover:bg-red-500 hover:text-white"
            to={"/karyawan"}
          >
            Karyawan
          </Link>
          <Link to={"/divisi"} className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 hover:bg-red-500 hover:text-white">
            Divisi
          </Link>
        </div>
        <div className="flex gap-x-4 gap-y-4 mt-4">
          <Link to={"/pengajuan"} className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 hover:bg-red-500 hover:text-white">
            Pengajuan
          </Link>
          <Link to={"/cetakpengajuan"} className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 hover:bg-red-500 hover:text-white">
            Cetak Pengajuan
          </Link>
        </div>
      </div>
    </div>
  );
}
