import Sidebar from "../containers/Admin/Sidebar";
const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="main-wrapper">
        <div className="left-sidebar dashboard">
          <Sidebar /> 
        </div>
        <div className="right-sidebar dashboard">
          <div className="dashboard-page">
            {children}
            <div className="dash-footer">
              <p> © 2021-2022 Nursesbnb Inc. All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
