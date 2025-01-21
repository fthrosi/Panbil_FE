import { useState } from "react";
import { Link } from "react-router-dom";

export default function Unautorizhed() {
  return (
    <div className="lg:pl-64 px-2 md:px-4 ">
      <div className="pt-6 pl-6 pr-2">
        <div className="bg-white rounded-sm shadow-md p-2 z-10">
            Anda tidak diizinkan mengakses Halaman ini
        </div>
      </div>
    </div>
  );
}
