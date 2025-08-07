import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 col-md-2 p-0">
          {/* Sidebar ซ้าย */}
          <Sidebar userName="natpakan" type="student" />
        </div>
        <div className="col-10 col-md-10 p-0">
          {/* Header ด้านบน */}
          <Header />

          {/* เนื้อหาหลัก */}
          <main className="flex-grow-1 p-4 min-vh-100">
            <Outlet /> {/* ตรงนี้จะแสดงเนื้อหาของ route's children */}
          </main>

          {/* Footer ด้านล่าง */}
          <Footer year="2025" fullName="natpakan" studentId="670610689" />
        </div>
      </div>
    </div>
  );
}
