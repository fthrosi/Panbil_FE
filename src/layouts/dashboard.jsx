import TopNavbar from "../component/navigasi/topNavbar";
import SideBar from "../component/navigasi/sideBar";
import { Outlet,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { logoutUser } from "../api/auth";
import ModalLogout from "../component/modal/ModalLogout";
export default function LayoutDashboard() {
  const [show, setShow] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const tutup = () => {
    setShow(!show);
  };
  const handleLogout = async () => {
    try {
      await logoutUser();
      // toast.success('Logout Berhasil');
      setTimeout(() => {
        logout();
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error('Logout Gagal');
    }
  };
  const [open,setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(!open)
  }
    return (
      <div className="min-h-screen">
        <TopNavbar handleOpen={handleOpen} tutup={tutup}/>
        <div className="pt-16 flex">
          <SideBar open={open} handleOpen={handleOpen} tutup={tutup}/>
          {show && <ModalLogout tutup={tutup} handleLogout={handleLogout} />}
          <div className="flex-1 overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  
