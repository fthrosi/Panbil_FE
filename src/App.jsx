import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./utils/AuthContext";
import Login from "./pages/auth/login";
import LupaPassword from "./pages/auth/lupaPassword";
import LayoutDashboard from "./layouts/dashboard";
import DashboardHr from "./pages/HR/dashboard";
import DashboardKd from "./pages/kepaladivisi/dashboard";
import DashboardKaryawan from "./pages/karyawan/dashboard";
import Karyawan from "./pages/HR/karyawan";
import AddKaryawan from "./pages/HR/addKaaryawan";
import Divisi from "./pages/HR/divisi";
import AddDivisi from "./pages/HR/addDivisi";
import UnitUsaha from "./pages/HR/unitusaha";
import AddUnitUsaha from "./pages/HR/addUnitUsaha";
import CetakPengajuan from "./pages/HR/cetakPengajuan";
import Profile from "./pages/profile";
import Password from "./pages/auth/password";
import UbahPassword from "./pages/auth/ubahPassword";
import PengajuanCuti from "./pages/karyawan/pengajuanCuti";
import PengajuanIzin from "./pages/karyawan/pengajuanIzin";
import Pengajuan from "./pages/karyawan/pengajuan";
import DaftarPengajuan from "./pages/kepaladivisi/daftarPengajuan";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Toaster } from "sonner";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Toaster richColors position="top-center" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lupapassword" element={<LupaPassword />} />
          <Route path="/password/reset-password" element={<Password />} />
          <Route path="/ubahpassword" element={<UbahPassword />} />
          <Route element={<LayoutDashboard />}>
            {/* Kepala Divisi */}
            <Route
              path="/kddashboard"
              element={
                <ProtectedRoute allowedRoles={["kepala divisi"]}>
                  <DashboardKd />
                </ProtectedRoute>
              }
            />
            <Route
              path="/daftarpengajuan"
              element={
                <ProtectedRoute allowedRoles={["kepala divisi"]}>
                  <DaftarPengajuan />
                </ProtectedRoute>
              }
            />

            {/* Karyawan */}
            <Route
              path="/karyawandashboard"
              element={
                <ProtectedRoute allowedRoles={["karyawan"]}>
                  <DashboardKaryawan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pengajuan"
              element={
                <ProtectedRoute allowedRoles={["karyawan"]}>
                  <Pengajuan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pengajuancuti"
              element={
                <ProtectedRoute allowedRoles={["karyawan"]}>
                  <PengajuanCuti />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pengajuanizin"
              element={
                <ProtectedRoute allowedRoles={["karyawan"]}>
                  <PengajuanIzin />
                </ProtectedRoute>
              }
            />

            {/* Karyawan HR */}
            <Route
              path="/hrdashboard"
              element={
                <ProtectedRoute
                  allowedRoles={["karyawan"]}
                  allowedDivisi={["hr"]}
                >
                  <DashboardHr />
                </ProtectedRoute>
              }
            />
            <Route
              path="/karyawan"
              element={
                <ProtectedRoute
                  allowedRoles={["karyawan"]}
                  allowedDivisi={["hr"]}
                >
                  <Karyawan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addkaryawan"
              element={
                <ProtectedRoute
                  allowedRoles={["karyawan"]}
                  allowedDivisi={["hr"]}
                >
                  <AddKaryawan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/divisi"
              element={
                <ProtectedRoute
                  allowedRoles={["karyawan"]}
                  allowedDivisi={["hr"]}
                >
                  <Divisi />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adddivisi"
              element={
                <ProtectedRoute
                  allowedRoles={["karyawan"]}
                  allowedDivisi={["hr"]}
                >
                  <AddDivisi />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cetakpengajuan"
              element={
                <ProtectedRoute
                  allowedRoles={["karyawan"]}
                  allowedDivisi={["hr"]}
                >
                  <CetakPengajuan />
                </ProtectedRoute>
              }
            />
            <Route path="/unitusaha" element={<UnitUsaha />} />
            <Route path="/addunitusaha" element={<AddUnitUsaha />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
