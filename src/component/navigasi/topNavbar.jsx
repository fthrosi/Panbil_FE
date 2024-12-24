import { FaBars } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
export default function TopNavbar({ handleOpen }) {
  return (
    <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div class="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div onClick={handleOpen} class="lg:hidden flex-shrink-0">
          <FaBars />
        </div>
        <div class="flex-shrink-0">
          <img src="logo.png" alt="Panbil Logo" class="w-10 h-auto" />
        </div>
        <div class="lg:flex space-x-4 hidden">
          <button class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <IoIosLogOut />
          </button>
        </div>
      </div>
    </nav>
  );
}
