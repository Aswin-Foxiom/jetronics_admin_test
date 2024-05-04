import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";

function ProductListing() {
  const [pageLoading, setpageLoading] = useState(true);
  const { mobileSide } = useContext(ContextDatas);

  useEffect(() => {
    const timer = setTimeout(() => {
      setpageLoading(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts or the dependency array changes
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
        {pageLoading ? (
          <Loader />
        ) : (
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
              <div className="col-xxl-12">
                <div className="card border-0 px-25">
                  <div className="card-header px-0">
                    <h6>Products</h6>
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
                  <div className="card-body p-0">
                    <div className="tab-content">
                      <div className="tab-pane fade active show">
                        <div className="selling-table-wrap selling-table-wrap--source">
                          <div className="table-responsive">
                            <table className="table table--default  mt-2">
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
                                  <th>Product</th>
                                  <th>Category</th>
                                  <th>Phone</th>

                                  {/* <th>Revenue</th> */}
                                  <th
                                    style={{
                                      textAlign: "right",
                                      paddingRight: "40px",
                                    }}>
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ paddingLeft: "15px" }}>
                                    <div class="checkbox-theme-default custom-checkbox ">
                                      <input
                                        class="checkbox"
                                        type="checkbox"
                                        name="check2"
                                        id="check-2"
                                      />
                                      <label for="check-2">
                                        <span class="checkbox-text"></span>
                                      </label>
                                    </div>
                                  </td>
                                  <td style={{ paddingLeft: "15px" }}>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="/img/author/robert-1.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Robert Clinton</span>
                                    </div>
                                  </td>
                                  <td>Samsung</td>

                                  <td>Smart Phone</td>
                                  <td>
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                      <li>
                                        <a href="#" class="view">
                                          <i class="uil uil-eye"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="edit">
                                          <i class="uil uil-edit"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="remove">
                                          <i class="uil uil-trash-alt"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
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
      </div>
    </>
  );
}

export default ProductListing;
