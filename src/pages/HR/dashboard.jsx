import { Link } from "react-router-dom";

export default function DashboardHr() {
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex gap-x-4 gap-y-4 mt-10">
        <Link
          className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 "
        >
          Karyawan
        </Link>
        <Link
          className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2"
        >
          Divisi
        </Link>
      </div>
      <div className="flex gap-x-4 gap-y-4 mt-4">
        <Link
          className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2"
        >
          Jabatan
        </Link>
        <Link
          className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2"
        >
          Unit Usaha
        </Link>
      </div>
      <div className="flex gap-x-4 gap-y-4 mt-4">
        <Link
          className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2"
        >
          Cetak Pengajuan
        </Link>
      </div>
    </div>
  );
}
