import React, { useContext,useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Pastikan menggunakan hook useAuth

const ProtectedRoute = ({ children, allowedRoles = [], allowedDivisi = [] }) => {
    const { isLoggedIn } = useAuth(); // Ambil status login dari context
    const [loading, setLoading] = useState(true); // State untuk loading
    const userRole = localStorage.getItem('userRole')?.toLowerCase(); // Ambil role dari localStorage
    const userDivisi = localStorage.getItem('userDivisi')?.toLowerCase(); // Ambil divisi dari localStorage

    // Set loading menjadi false setelah data siap
    useEffect(() => {
        if (userRole && userDivisi) {
            setLoading(false);
        }
    }, [userRole, userDivisi]);

    // Jika loading, tampilkan loading spinner atau sesuatu yang sesuai
    if (loading) {
        return <div>Loading...</div>;
    }

    // Jika pengguna belum login, arahkan ke halaman login
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    // Jika role atau divisi tidak sesuai
    if (
        (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) ||
        (allowedDivisi.length > 0 && !allowedDivisi.includes(userDivisi))
    ) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children; // Render children jika pengecekan lolos
};



export default ProtectedRoute;
