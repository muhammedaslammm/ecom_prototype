import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import AdminSectionTitle from "./components/AdminSectionTitle";
import "./style.css";
import useRoute from "./hooks/useRoute";
import AdminBreadCrumbs from "./components/AdminBreadCrumbs";

const AdminApp = () => {
  const { page_title, icon_class, breadcrumbs, routes_length } = useRoute();
  return (
    <>
      <Toaster
        position="top-center"
        richColors
        expand={true}
        duration={5000}
        toastOptions={{
          style: {
            animationDuration: "800ms",
          },
        }}
      />
      <div
        className="relative flex min-h-screen bg-[#f2f2f2]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Sidebar /> {/* fixed width*/}
        <div className="ml-[28rem] mt-8 flex-1 mr-10 a-section--container">
          <AdminSectionTitle title={page_title} icon={icon_class} />
          <AdminBreadCrumbs data={breadcrumbs} length={routes_length} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminApp;
