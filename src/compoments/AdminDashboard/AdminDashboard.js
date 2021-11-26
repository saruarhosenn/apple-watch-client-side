import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AddAProduct from "../AddAProduct/AddAProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import './AdminDashboard.css'

import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Myorder from "../Myorder/Myorder";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";


const AdminDashboard = () => {
  const [control, setControl] = useState("pay");
  const { logOut, user, admin } = useAuth();

  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">

                <h6 className="dashboard">Dashboard</h6>
                <div className="dashboardprofile">
                  <img src={user?.photoURL} alt="" />
                  <p>{user.displayName}</p>
                </div>
                <div className="all-menu mt-5">
                  {admin && <li
                    onClick={() => setControl("manageorders")}
                    className="admin-menu p-2"
                  >
                    <button>Manage Order</button>
                  </li>}

                  {user?.email && !admin && <li
                    onClick={() => setControl("myorder")}
                    className="admin-menu p-2"
                  >
                    <button> My Order</button>
                  </li>}
                  {user?.email && !admin && <li
                    onClick={() => setControl("review")}
                    className="admin-menu p-2"
                  >
                    <button>  Review</button>
                  </li>}
                  {user?.email && !admin && <li
                    onClick={() => setControl("pay")}
                    className="admin-menu p-2"
                  >
                    <button>  Pay</button>
                  </li>}

                  {admin && <li
                    onClick={() => setControl("AddAProduct")}
                    className="admin-menu p-2"
                  >
                    <button> Add A Product</button>
                  </li>}
                  {admin && <li
                    onClick={() => setControl("MakeAdmin")}
                    className="admin-menu p-2"
                  >
                    <button> Make Admin</button>
                  </li>}
                  {admin && <li
                    onClick={() => setControl("ManageProducts")}
                    className="admin-menu p-2"
                  >
                    <button>Manage Products</button>
                  </li>}
                  <button onClick={logOut}>Logout</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "manageorders" && <ManageOrders></ManageOrders>}
              {control === "myorder" && <Myorder></Myorder>}
              {control === "review" && <Review></Review>}
              {control === "pay" && <Pay></Pay>}

              {control === "AddAProduct" && <AddAProduct></AddAProduct>}
              {control === "MakeAdmin" && <MakeAdmin></MakeAdmin>}
              {control === "ManageProducts" && <ManageProducts></ManageProducts>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;