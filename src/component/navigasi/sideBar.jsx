import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useLocation } from "react-router-dom";
export default function SideBar({ open, handleOpen }) {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const route = [
    {
      name: "Dashboard",
      to: "/hrdashboard",
    },
    {
      name: "Karyawan",
      to: "/karyawan",
    },
    {
      name: "Divisi",
      to: "/divisi",
    },
    {
      name: "Jabatan",
      to: "/divisi",
    },
    {
      name: "Unit Usaha",
      to: "/divisi",
    },
    {
      name: "Cetak Pengajuan",
      to: "/divisi",
    },
    {
      name: "Pengaturan",
      to: "/divisi",
    },
  ];
  return (
    <aside
      className={`${
        open ? "w-full md:w-1/3" : "w-0"
      } transition-all duration-300 ease-in-out fixed top-0 left-0 h-full lg:w-64 bg-white text-black shadow-md z-40`}
    >
      <ul className={`${open ? "block" : "hidden"} lg:block mt-16 space-y-2`}>
        {route.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              onClick={handleOpen}
              className={`px-4 py-2 hover:bg-red-600 hover:text-white flex items-center gap-4 ${
                isActive(item.to) ? "text-white bg-red-600" : ""
              }`}
            >
              <IoIosLogOut
                className={`${open ? "block" : "hidden"} lg:block size-6`}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
