import { useState } from "react";
import { Link } from "react-router-dom";
import UbahPassword from "./auth/ubahPassword";

export default function Profile() {
  const [pass, setPass] = useState(false);
  const handlePass = () => {
    setPass(!pass);
  };
  return (
    <div className="lg:pl-64 px-2 md:px-4 ">
      {pass && <UbahPassword handlePass={handlePass} />}
      <div className="pt-6 pl-6 pr-2">
        <div className="bg-white rounded-sm shadow-md p-2 z-10">
          <div className="flex">
            <div className="flex justify-start items-center lg:gap-10 gap-5">
              <div className="lg:size-40 size-20 bg-blue-500 rounded-full"></div>
              <div>
                <h1 className="text-base md:text-xl lg:text-2xl font-semibold">
                  John F Kenedy
                </h1>
                <h1 className="text-sm md:text-lg lg:text-xl">
                  Email@gmail.com
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 mt-8 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            Divisi IT
          </div>
          <div className="w-full bg-gray-100 mt-2 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            Divisi IT
          </div>
          <div className="w-full bg-gray-100 mt-2 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            Divisi IT
          </div>
          <div className="w-full bg-gray-100 mt-2 p-1 md:p-2 lg:p-3 rounded-md shadow-lg md:text-lg lg:text-xl">
            Divisi IT
          </div>
          <div className="w-full flex justify-end gap-3">
            <button
              className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              onClick={handlePass}
            >
              Edit Profile
            </button>
            <button
              className="bg-[rgb(16,185,129)] lg:py-1 lg:px-4 py-1 px-2 rounded-md lg:rounded-lg mt-5 nunito text-white text-xs md:text-sm lg:text-base"
              onClick={handlePass}
            >
              Ubah Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
