import { FaBars } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
export default function TopNavbar({ handleOpen,tutup }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div onClick={handleOpen} className="lg:hidden flex-shrink-0">
          <FaBars />
        </div>
        <div className="flex-shrink-0">
          <img src="/assets/icons/Logo-Panbil-Corporate.png" alt="Panbil Logo" className="w-20 lg:w-32 h-auto" />
        </div>
        <div className="lg:flex space-x-4 hidden">
          <button className="p-2 bg-red-600 rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center" onClick={tutup}>
            <IoIosLogOut className="text-white size-5"/>
          </button>
        </div>
      </div>
    </nav>
  );
}
