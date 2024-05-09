import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../services/Context";

import {
  basePath,
  brandPath,
  categoryPath,
  ordersPath,
  AddWebsitePath,
  WebsiteListPath,
  AdminListPath,
  HeaderContentPath,
  FooterContentPath,
  MissingOrderPath,
  ContactUsPath,
  AddProductPath,
  ProductListPath,
  LanguageCountryPath,
  StatusCityPath
 
} from "../services/UrlPaths";
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
console.log(urlPath,"urlpath")
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

            <li   className={urlPath.includes("language-and-country") ? "active" : ""}>
              <Link onClick={() => setUrlPath(basePath+LanguageCountryPath)} to="/language-and-country">
                <span className="nav-icon fas fa-flag"></span>
                <span className="menu-text">Language & Country</span>
              </Link>
            </li>
            <li className={urlPath.includes("status-and-city") ? "active" : ""}>
              <Link  onClick={() => setUrlPath(basePath+StatusCityPath)} to="/status-and-city">
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
                <li className={urlPath.includes("add-product") ? "active" : ""}>
                  <Link   onClick={() => setUrlPath(basePath+AddProductPath)}  to="/add-product">Add Product</Link>
                </li>
                <li className={urlPath.includes("products") ? "active" : ""}>
                  <Link  onClick={() => setUrlPath(basePath+ProductListPath)} to="/products">Products List</Link>
                </li>
                <li className={urlPath.includes("category") ? "active" : ""}>
                  <Link  onClick={() => setUrlPath(basePath+ categoryPath)} to={basePath + categoryPath}>Category</Link>
                </li>
                <li className={urlPath.includes("brand") ? "active" : ""}>
                  <Link  onClick={() => setUrlPath(basePath+ brandPath)} to={basePath + brandPath}>Brands</Link>
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
                <li className={urlPath.includes("add-website") ? "active" : ""}>
                  <Link  onClick={() => setUrlPath(basePath+  AddWebsitePath)} to={basePath + AddWebsitePath}>Add Website</Link>
                  {/* <a href="/">Add Website</a> */}
                </li>
                <li  className={urlPath.includes("website-list") ? "active" : ""}>
                  <Link  onClick={() => setUrlPath(basePath+  WebsiteListPath)}  to={basePath + WebsiteListPath}>Website List</Link>
                  {/* <a href="/">Website List</a> */}
                </li>
                <li className={urlPath.includes("admin-list") ? "active" : ""}>
                  <Link onClick={() => setUrlPath(basePath+  AdminListPath)} to={basePath + AdminListPath}>Admin List</Link>
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
                <li  className={urlPath==="/missing-order" ? "active" : ""}>
             
                  <Link  onClick={() => setUrlPath(basePath+  MissingOrderPath)} to={basePath + MissingOrderPath}>Missing Order</Link>
                </li>
                <li  className={urlPath==="/order" ? "active" : ""}>
                <Link onClick={() => setUrlPath(basePath+  ordersPath)} to={basePath + ordersPath}>Order List</Link>
                 
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
                <li  className={urlPath.includes("header-content") ? "active" : ""}>
                  <Link onClick={() => setUrlPath(basePath+ HeaderContentPath)} to={basePath + HeaderContentPath}>Header Contents</Link>
                  {/* <a href="/">Header Contents</a> */}
                </li>
                <li className={urlPath.includes("footer-content") ? "active" : ""}>
                  <Link onClick={() => setUrlPath(basePath+ FooterContentPath)} to={basePath + FooterContentPath}>Footer Contents</Link>
                </li>
                <li className={urlPath.includes("contact-us") ? "active" : ""}>
              
                  <Link  onClick={() => setUrlPath(basePath+ ContactUsPath)} to={basePath + ContactUsPath}>Contact Us</Link>
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
