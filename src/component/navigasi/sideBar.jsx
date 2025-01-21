import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { RiDashboard2Fill } from "react-icons/ri";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { SiPrivatedivision } from "react-icons/si";
import { RiListRadio } from "react-icons/ri";
import { FaPrint } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../../api/profile/api";
import { getPhoto } from "../../api";

export default function SideBar({ open, handleOpen,tutup }) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const id = localStorage.getItem("id");
  const userRole = localStorage.getItem("userRole").toLocaleLowerCase();
  const userDivisi = localStorage.getItem("userDivisi").toLocaleLowerCase();
  const fetchData = async (e) => {
    try {
      const datas = await getProfile(id);
      setData(datas.data);
    } catch (error) {
      // toast.error('Login Gagal');
      console.log("gagal",error);
    }
  };

  useEffect(() => {
    fetchData();
    // Pastikan data yang dibutuhkan ada
    if (userRole && userDivisi) {
      setUser({ role: userRole, divisi: userDivisi });
    }
  }, []);

  if (!user) return null; // Jika user tidak ada, tidak perlu menampilkan sidebar

  // Menu berdasarkan role dan divisi
  const menus = {
    kepaladivisi: {
      default: [
        { name: "Dashboard", path: "/kddashboard",icon: RiDashboard2Fill },
        { name: "Daftar Pengajuan", path: "/daftarpengajuan",icon: RiListRadio },
      ],
      HR: [
        { name: "Dashboard", path: "/kddashboard",icon: RiDashboard2Fill },
        { name: "Daftar Pengajuan", path: "/daftarpengajuan",icon: RiListRadio },
      ],
    },
    karyawan: {
      default: [
        { name: "Dashboard", path: "/karyawandashboard",icon: RiDashboard2Fill },
        { name: "Pengajuan", path: "/pengajuan",icon: VscGitPullRequestGoToChanges },
      ],
      HR: [
        { name: "Dashboard", path: "/hrdashboard",icon: RiDashboard2Fill },
        { name: "Karyawan", path: "/karyawan",icon: GrUserWorker },
        { name: "Divisi", path: "/divisi",icon: SiPrivatedivision },
        { name: "Cetak Pengajuan", path: "/cetakpengajuan",icon: FaPrint },
        { name: "Pengajuan", path: "/pengajuan",icon: VscGitPullRequestGoToChanges },
      ],
    },
  };

  // Menentukan menu yang sesuai dengan role dan divisi pengguna
  const roleMenus = menus[user.role.replace(/\s+/g, "")];
  const divisiMenus =
    user.divisi.toLowerCase() === "hr" ? roleMenus.HR : roleMenus.default;
  // Menentukan apakah menu tersebut aktif
  const location = useLocation();
  const isActive = (path) => location.pathname === path;;
  return (
    <aside
      className={`${
        open ? "w-full md:w-1/3" : "w-0"
      } transition-all duration-300 ease-in-out fixed top-0 left-0 h-full lg:w-64 bg-white text-black shadow-md z-40`}
    >
      <ul className={`${open ? "block" : "hidden"} lg:block mt-16`}>
        <li>
          <Link
            to={"/profile"}
            onClick={handleOpen}
            className={`px-4 py-2 hover:bg-red-600 hover:text-white flex items-center gap-4`}
          >
            <div className="size-10 bg-blue-400 rounded-full">
              <img
                className="w-full h-full rounded-full "
                src={
                  data.Foto ? getPhoto(data.Foto) : "/assets/images/5856.jpg"
                }
                alt=""
              />
            </div>
            Profile
          </Link>
        </li>

        {/* Rendering Menu Berdasarkan Role dan Divisi */}
        {divisiMenus.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              onClick={handleOpen}
              className={`px-4 py-2 hover:bg-red-600 hover:text-white flex items-center gap-4 ${
                isActive(item.path) ? "text-white bg-red-600" : ""
              }`}
            >
              <item.icon
                className={`${open ? "block" : "hidden"} lg:block size-6`}
              />
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            onClick={tutup}
            className={`px-4 py-2 hover:bg-red-600 hover:text-white flex items-center gap-4 lg:hidden`}
          >
            <IoIosLogOut
              className={`${open ? "block" : "hidden"} lg:block size-6`}
            />
            Log Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}
