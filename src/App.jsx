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

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lupapassword" element={<LupaPassword />} />
          <Route element={<LayoutDashboard/>}>
            <Route path="/hrdashboard" element={<DashboardHr />} />
            <Route path="/kddashboard" element={<DashboardKd />} />
            <Route path="/karyawandashboard" element={<DashboardKaryawan />} />
            <Route path="/karyawan" element={<Karyawan />} />
            <Route path="/addkaryawan" element={<AddKaryawan />} />
            <Route path="/divisi" element={<Divisi />} />
            <Route path="/adddivisi" element={<AddDivisi />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
