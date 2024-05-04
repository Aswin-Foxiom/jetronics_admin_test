import React, { useContext, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Pagination from "../../../components/Pagination";
import { useEffect } from "react";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { basePath, ordersPath } from "../../../services/UrlPaths";

function PageOrderListing() {
  const { mobileSide } = useContext(ContextDatas);
  const [pageLoading, setpageLoading] = useState(true);
  const [orders, setorders] = useState([
    {
      _id: "60d5ecb2f3f3c7b8a8b8b8b8",
      orderId: 1,
      customerName: "John Doe",
      productName: "Laptop",
      quantity: 2,
      totalPrice: 1200.0,
      status: "Delivered",
    },
    {
      _id: "60d5ecb2f3f3c7b8a8b8b8b9",
      orderId: 2,
      customerName: "Jane Smith",
      productName: "Smartphone",
      quantity: 1,
      totalPrice: 800.0,
      status: "Pending",
    },
    {
      _id: "60d5ecb2f3f3c7b8a8b8b8ba",
      orderId: 3,
      customerName: "Michael Brown",
      productName: "Headphones",
      quantity: 3,
      totalPrice: 300.0,
      status: "Shipped",
    },
    {
      _id: "60d5ecb2f3f3c7b8a8b8b8bb",
      orderId: 4,
      customerName: "Emily Davis",
      productName: "Tablet",
      quantity: 1,
      totalPrice: 600.0,
      status: "Delivered",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setpageLoading(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts or the dependency array changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-lg-12">
                <div className="card card-default card-md mb-4">
                  <div className="card-header">
                    <h6>Filter</h6>
                  </div>
                  <div className="card-body py-md-25">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label
                              htmlFor="a4"
                              className="il-gray fs-14 fw-500 align-center mb-10">
                              One of Four Columns
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light px-15"
                              id="a4"
                              placeholder="One of Four Columns"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label
                              htmlFor="a5"
                              className="il-gray fs-14 fw-500 align-center mb-10">
                              One of Four Columns
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light px-15"
                              id="a5"
                              placeholder="One of Four Columns"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label
                              htmlFor="a6"
                              className="il-gray fs-14 fw-500 align-center mb-10">
                              One of Four Columns
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light px-15"
                              id="a6"
                              placeholder="One of Four Columns"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label
                              htmlFor="a7"
                              className="il-gray fs-14 fw-500 align-center mb-10">
                              One of Four Columns
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light px-15"
                              id="a7"
                              placeholder="One of Four Columns"
                            />
                          </div>
                        </div>
                        <div class="layout-button mt-0  justify-content-end">
                          <button
                            type="button"
                            class="btn btn-default btn-squared btn-light px-20 ">
                            cancel
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary btn-default btn-squared px-30">
                            save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-30">
                <div className="card border-0">
                  <div className="card-header">
                    <h6>Table</h6>
                    <div className="card-extra">
                      <ul
                        className="card-tab-links nav-tabs nav"
                        role="tablist">
                        <li>
                          <a
                            className="active"
                            href="#t_landing-today"
                            data-bs-toggle="tab"
                            id="t_landing-today-tab"
                            role="tab"
                            aria-selected="true">
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-week"
                            data-bs-toggle="tab"
                            id="t_landing-week-tab"
                            role="tab"
                            aria-selected="false">
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-month"
                            data-bs-toggle="tab"
                            id="t_landing-month-tab"
                            role="tab"
                            aria-selected="false">
                            Month
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-year"
                            data-bs-toggle="tab"
                            id="t_landing-year-tab"
                            role="tab"
                            aria-selected="false">
                            Year
                          </a>
                        </li>
                      </ul>
                      <div className="dropdown dropleft">
                        <a
                          href="#"
                          role="button"
                          id="topPage"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <img
                            src="img/svg/more-horizontal.svg"
                            alt="more-horizontal"
                            className="svg"
                          />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="topPage">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 0">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="t_landing-today"
                        role="tabpanel"
                        aria-labelledby="t_landing-today-tab">
                        <div className="userDatatable  mt-1 p-2 table-responsive">
                          <table className="table table--default body-px-25">
                            <thead>
                              <tr class="userDatatable-header">
                                <th style={{ width: "10px" }}>
                                  <span class="userDatatable-title">
                                    <div class="checkbox-theme-default custom-checkbox ">
                                      <input
                                        class="checkbox"
                                        type="checkbox"
                                        id="check-1"
                                        name="check1"
                                      />
                                      <label for="check-1">
                                        <span class="checkbox-text"></span>
                                      </label>
                                    </div>
                                  </span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">
                                    Order ID
                                  </span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">
                                    {" "}
                                    Customer Name
                                  </span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">
                                    Product Name
                                  </span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">
                                    Quantity
                                  </span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">
                                    Total Price
                                  </span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">
                                    Status
                                  </span>
                                </th>
                                <th
                                  style={{
                                    textAlign: "right",
                                    paddingRight: "40px",
                                  }}>
                                  <span className="userDatatable-title">
                                    Action
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders?.length > 0 ? (
                                <>
                                  {orders.map((order) => (
                                    <tr>
                                      <td>
                                        <div className="checkbox-theme-default custom-checkbox">
                                          <input
                                            className="checkbox"
                                            type="checkbox"
                                            name="check2"
                                            id={`check-${order.orderId}`} // Assuming each order has a unique ID
                                          />
                                          <label
                                            htmlFor={`check-${order.orderId}`}>
                                            <span className="checkbox-text"></span>
                                          </label>
                                        </div>
                                      </td>
                                      <Link to={`${basePath}${ordersPath}/${order?._id}`}>
                                        <td>{order.orderId}</td>{" "}
                                      </Link>
                                      <td>{order.customerName}</td>{" "}
                                      <td>{order.productName}</td>{" "}
                                      <td>{order.quantity}</td>{" "}
                                      <td>{order.totalPrice}</td>{" "}
                                      <td>
                                        <div className="userDatatable-content d-inline-block mt-2">
                                          <span className="bg-opacity-success color-success status_pills userDatatable-content-status active">
                                            active
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                                          <li>
                                            <a href="#" className="view">
                                              <i className="uil uil-eye"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" className="edit">
                                              <i className="uil uil-edit"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" className="remove">
                                              <i className="uil uil-trash-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                  ))}
                                </>
                              ) : (
                                <tr>
                                  <td colSpan={7}>
                                    <div className="dm-empty text-center">
                                      <div className="dm-empty__image">
                                        <img
                                          src="/img/svg/1.png"
                                          alt="Admin Empty"
                                        />
                                      </div>
                                      <div className="dm-empty__text">
                                        <p>No Data Available</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>

                        <Pagination />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PageOrderListing;
