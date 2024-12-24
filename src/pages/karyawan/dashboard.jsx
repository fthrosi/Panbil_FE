import { Link } from "react-router-dom";
export default function DashboardKaryawan() {
  return (
    <div className="p-6">
      <Link
          className="font-semibold w-64 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md"
        >
          Pengajuan
        </Link>
    </div>
  );
}
