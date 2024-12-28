import TopNavbar from "../component/navigasi/topNavbar";
import SideBar from "../component/navigasi/sideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function LayoutDashboard() {
  const [open,setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(!open)
  }
    return (
      <div className="min-h-screen">
        <TopNavbar handleOpen={handleOpen}/>
        <div className="pt-16 flex">
          <SideBar open={open} handleOpen={handleOpen}/>
          <div className="flex-1 overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  
