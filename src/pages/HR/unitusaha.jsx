import { Link } from "react-router-dom";

export default function UnitUsaha() {
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="max-w-full lg:p-6 p-2 md:p-4">
        <h1 className="lg:text-3xl text-lg md:text-xl font-bold">
          Kelola Data Unit Usaha
        </h1>
        <div className="mt-5">
          <Link
            to={"/addunitusaha"}
            className="p-2 bg-blue-600 rounded-md text-white font-semibold text-xs lg:text-base"
          >
            Tambah Unit Usaha
          </Link>
        </div>

        <div className="overflow-x-auto mt-9 w-full">
          <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
            <thead>
              <tr className="text-xs md:text-sm lg:text-base">
                <th className="border border-gray-300 px-4 py-2">
                  Nama Anggota Divisi
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Nama Divisi
                </th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm lg:text-base">
              <tr>
                <td className="border border-gray-300 px-4 py-2">John Doe</td>
                <td className="border border-gray-300 px-4 py-2">Divisi A</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Detail
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
                <td className="border border-gray-300 px-4 py-2">Divisi B</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Detail
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
