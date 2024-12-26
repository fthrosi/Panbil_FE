import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './pages/auth/login';
import LupaPassword from './pages/auth/lupaPassword';
import LayoutDashboard from './layouts/dashboard';
import DashboardHr from './pages/HR/dashboard';
import DashboardKd from './pages/kepaladivisi/dashboard';
import DashboardKaryawan from './pages/karyawan/dashboard';
import Karyawan from './pages/HR/karyawan';
import AddKaryawan from './pages/HR/addKaaryawan';
import Divisi from './pages/HR/divisi';
import AddDivisi from './pages/HR/addDivisi';
import UnitUsaha from './pages/HR/unitusaha';
import AddUnitUsaha from './pages/HR/addUnitUsaha';
import CetakPengajuan from './pages/HR/cetakPengajuan';
import Profile from './pages/profile';
import Password from './pages/auth/password';
import UbahPassword from './pages/auth/ubahPassword';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lupapassword" element={<LupaPassword />} />
          <Route path="/ubahpassword" element={<UbahPassword />} />
          <Route path="/password" element={<Password />} />
          <Route element={<LayoutDashboard/>}>
            <Route path="/hrdashboard" element={<DashboardHr />} />
            <Route path="/kddashboard" element={<DashboardKd />} />
            <Route path="/karyawandashboard" element={<DashboardKaryawan />} />
            <Route path="/karyawan" element={<Karyawan />} />
            <Route path="/addkaryawan" element={<AddKaryawan />} />
            <Route path="/divisi" element={<Divisi />} />
            <Route path="/adddivisi" element={<AddDivisi />} />
            <Route path="/unitusaha" element={<UnitUsaha />} />
            <Route path="/addunitusaha" element={<AddUnitUsaha />} />
            <Route path="/cetakpengajuan" element={<CetakPengajuan />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
