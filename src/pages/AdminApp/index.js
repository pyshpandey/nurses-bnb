import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../../components/common/Loading";
import AdminLayout from "../../layouts/AdminLayout";
import routes from "../../routes/AdminRoute";

const AdminApp = () => {
  return (
    <>
      <AdminLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route, rk) => {
              return <Route key={rk} {...route} />;
            })}
          </Routes>
        </Suspense>
      </AdminLayout>
    </>
  );
};

export default AdminApp;
