import { Link } from "react-router-dom";
export default function DashboardKaryawan() {
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="p-6">
        <Link to={"/pengajuan"} className="font-semibold w-64 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md hover:bg-red-500">
          Pengajuan
        </Link>
      </div>
    </div>
  );
}
