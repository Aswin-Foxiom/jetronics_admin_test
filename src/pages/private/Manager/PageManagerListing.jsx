import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";

function PageManagerListing() {
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
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
          <div className="demo2 mb-25 t-thead-bg">
            <div className="container-fluid">
              <div className="row mt-50">
                <div className="col-xxl-8 mb-25">
                  <div className="card border-0 px-25">
                    <div className="card-header px-0 border-0">
                      <h6>Managers</h6>
                      <div className="card-extra">
                        <ul
                          className="card-tab-links nav-tabs nav"
                          role="tablist"
                        >
                          <li>
                            <a
                              className="active"
                              href="#t_selling-today222"
                              data-bs-toggle="tab"
                              id="t_selling-today222-tab"
                              role="tab"
                              aria-selected="true"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              href="#t_selling-week222"
                              data-bs-toggle="tab"
                              id="t_selling-week222-tab"
                              role="tab"
                              aria-selected="true"
                            >
                              Week
                            </a>
                          </li>
                          <li>
                            <a
                              href="#t_selling-month333"
                              data-bs-toggle="tab"
                              id="t_selling-month333-tab"
                              role="tab"
                              aria-selected="true"
                            >
                              Month
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="t_selling-today222"
                          role="tabpanel"
                          aria-labelledby="t_selling-today222-tab"
                        >
                          <div className="selling-table-wrap selling-table-wrap--source">
                            <div className="table-responsive">
                              <table className="table table--default table-borderless">
                                <thead>
                                  <tr>
                                    <th>name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    {/* <th>Revenue</th> */}
                                    <th
                                      style={{
                                        textAlign: "right",
                                        paddingRight: "40px",
                                      }}
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
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
          </div>
        </div>
      )}
    </>
  );
}

export default PageManagerListing;
