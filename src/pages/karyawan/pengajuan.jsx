import { Link } from "react-router-dom";

export default function Pengajuan() {
  const head = [
    {
      name: "No",
    },
    {
      name: "Tanggal Pengajuan",
    },
    {
      name: "Tujuan Cuti",
    },
    {
      name: "Tanggal Mulai Cuti",
    },
    {
      name: "Tanggal Selesai Cuti",
    },
    {
      name: "Jumlah Cuti",
    },
    {
      name: "Status",
    },
    {
      name: "Action",
    },
  ];
  const data = [
    {
      no: "1",
      tglP: "10-12-2024",
      tujuan: "Healing bos",
      tglM: "20-12-2024",
      tglS: "03-01-2025",
      jml: "5",
      status: "Pending",
    },
    {
      no: "2",
      tglP: "05-11-2024",
      tujuan: "nikahan",
      tglM: "06-11-2024",
      tglS: "07-11-2024",
      jml: "1,5",
      status: "Accept",
    },
    {
      no: "3",
      tglP: "10-10-2024",
      tujuan: "malas",
      tglM: "11-10-2024",
      tglS: "15-10-2024",
      jml: "5",
      status: "Denied",
    },
  ];
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="text-3xl font-bold">Pengajuan</h1>
        <div className="flex gap-x-4 gap-y-4 mt-10">
          <Link
            className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2 "
            to={"/pengajuancuti"}
          >
            Cuti
          </Link>
          <Link
            to={"/pengajuanizin"}
            className="font-semibold w-1/2 flex justify-center items-center bg-white h-20 border border-gray-300 rounded-lg shadow-md text-xs sm:text-base md:text-lg p-2"
          >
            Izin
          </Link>
        </div>
        <div className="overflow-x-auto mt-9 w-full">
          <table className="table-auto min-w-[550px] w-full border-collapse border border-gray-300">
            <thead>
              <tr className="text-xs md:text-sm lg:text-base">
                {head.map((item, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm lg:text-base">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{item.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.tglP}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.tujuan}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.tglM}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.tglS}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.jml} Hari</td>
                  <td className="border border-gray-300 px-4 py-2">{item.status}</td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Detail
                    </button>
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
