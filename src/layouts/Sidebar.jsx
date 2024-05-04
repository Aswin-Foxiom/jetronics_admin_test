import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../services/Context";
import { basePath, brandPath, categoryPath, ordersPath } from "../services/UrlPaths";
import { Link, useNavigate } from "react-router-dom/dist";

function Sidebar() {
  const {
    mobileSide,
    setmobileSide,
    dropdownItems,
    setdropdownItems,
    urlPath,
    setUrlPath,
  } = useContext(ContextDatas);

  // const [dropdownItems, setdropdownItems] = useState({
  //   products: false,
  //   websites: false,
  //   orders: false,
  //   contents: false,
  // });

  let navigate = useNavigate();

  return (
    <div className="sidebar-wrapper">
      <div
        className={`sidebar sidebar-collapse ${mobileSide ? "collapsed" : ""}`}
        id="sidebar"
      >
        <div className="sidebar__menu-group">
          <ul className="sidebar_nav">
            <li className={urlPath === basePath ? "active" : ""}>
              <Link to={basePath} onClick={() => setUrlPath(basePath)}>
                <span className="nav-icon uil uil-create-dashboard" />
                <span className="menu-text">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/language-and-country">
                <span className="nav-icon fas fa-flag"></span>
                <span className="menu-text">Language & Country</span>
              </Link>
            </li>
            <li>
              <Link to="/status-and-city">
                <span className="nav-icon uil uil-lightbulb-alt" />
                <span className="menu-text">Status & Cities</span>
              </Link>
            </li>

            <li
              className={`has-child ${dropdownItems?.products ? "open" : ""}`}
            >
              <a
                href="#"
                className={urlPath.includes("manager") ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setdropdownItems({ products: !dropdownItems.products });
                }}
              >
                <span className="nav-icon uil uil-bag" />
                <span className="menu-text">Products</span>
                <span className="toggle-icon" />
              </a>
              <ul
                style={{ display: dropdownItems?.products ? "block" : "none" }}
              >
                <li className="">
                  <Link to="/add-product">Add Product</Link>
                </li>
                <li className="">
                  <Link to="/products">Products List</Link>
                </li>
                <li className="">
                  <Link to={basePath+categoryPath}>Category</Link>
                </li>
                <li className="">
                  <Link to={basePath+brandPath}>Brands</Link>
                </li>
              </ul>
            </li>

            <li
              className={`has-child ${dropdownItems?.websites ? "open" : ""}`}
            >
              <a
                href="#"
                className={urlPath.includes("manager") ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setdropdownItems({ websites: !dropdownItems.websites });
                }}
              >
                <span className="nav-icon uil uil-globe" />
                <span className="menu-text">Websites</span>
                <span className="toggle-icon" />
              </a>
              <ul
                style={{ display: dropdownItems?.websites ? "block" : "none" }}
              >
                <li className="">
                  <a href="/">Add Website</a>
                </li>
                <li className="">
                  <a href="/">Website List</a>
                </li>
                <li className="">
                  <a href="/">Admin List</a>
                </li>
              </ul>
            </li>

            <li className={`has-child ${dropdownItems?.orders ? "open" : ""}`}>
              <a
                href="#"
                className={urlPath.includes("manager") ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setdropdownItems({ orders: !dropdownItems.orders });
                }}
              >
                <span className="nav-icon uil uil-bag" />
                <span className="menu-text">Orders</span>
                <span className="toggle-icon" />
              </a>
              <ul style={{ display: dropdownItems?.orders ? "block" : "none" }}>
                <li className="">
                  <a href="/">Missing Order</a>
                </li>
                <li className="">
                  <a href={basePath+ordersPath}>Order List</a>
                </li>
              </ul>
            </li>

            <li
              className={`has-child ${dropdownItems?.contents ? "open" : ""}`}
            >
              <a
                href="#"
                className={urlPath.includes("manager") ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setdropdownItems({ contents: !dropdownItems.contents });
                }}
              >
                <span className="nav-icon uil uil-edit-alt" />
                <span className="menu-text">Content Management</span>
                <span className="toggle-icon" />
              </a>
              <ul
                style={{ display: dropdownItems?.contents ? "block" : "none" }}
              >
                <li className="">
                  <a href="/">Header Contents</a>
                </li>
                <li className="">
                  <a href="/">Footer Contents</a>
                </li>
                <li className="">
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </li>

            {/* <li className="menu-title mt-30">
          <span>Applications</span>
        </li> */}

            {/* <li className>
          <a href="sign-up.html">
            <span className="nav-icon uil uil-sign-out-alt" />
            <span className="menu-text">Sign Up</span>
          </a>
        </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
