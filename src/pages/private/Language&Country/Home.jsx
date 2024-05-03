import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";

function Home() {
  const [pageLoading, setpageLoading] = useState(true);
  const { mobileSide, setmobileSide } = useContext(ContextDatas);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobileSide(!mobileSide);
    }
  }, []);

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
            <div className="row">
              <div className="col-12 col-md-6 mt-30">
                <div className="card border-0">
                  <div className="card-header">
                    <h6>Language</h6>
                    <div className="card-extra">
                      {/* <ul
                        className="card-tab-links nav-tabs nav"
                        role="tablist"
                      >
                        <li>
                          <a
                            className="active"
                            href="#t_landing-today"
                            data-bs-toggle="tab"
                            id="t_landing-today-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-week"
                            data-bs-toggle="tab"
                            id="t_landing-week-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-month"
                            data-bs-toggle="tab"
                            id="t_landing-month-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Month
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-year"
                            data-bs-toggle="tab"
                            id="t_landing-year-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Year
                          </a>
                        </li>
                      </ul> */}
                      <i
                        className="uil uil-plus"
                        style={{ fontSize: "25px" }}
                      />
                      {/* <div className="dropdown dropleft">
                        <a
                          href="#"
                          role="button"
                          id="topPage"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src="img/svg/more-horizontal.svg"
                            alt="more-horizontal"
                            className="svg"
                          />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="topPage"
                        >
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
                      </div> */}
                    </div>
                  </div>
                  <div className="card-body p-0 0">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="t_landing-today"
                        role="tabpanel"
                        aria-labelledby="t_landing-today-tab"
                      >
                        <div className="userDatatable  mt-1 p-2 table-responsive">
                          <table className="table table--default body-px-25">
                            <thead>
                              <tr class="userDatatable-header">
                                {/* <th style={{ width: "10px" }}>
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
                                </th> */}
                                <th>
                                  <span class="userDatatable-title">No.</span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">Name</span>
                                </th>

                                <th
                                  style={{
                                    textAlign: "right",
                                    paddingRight: "40px",
                                  }}
                                >
                                  <span className="userDatatable-title">
                                    Action
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {/* <td>
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
                                </td> */}

                                <td>1</td>

                                <td> NEW </td>

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
                              {/* <tr>
                          <td colSpan={7}>
                            <div class="dm-empty text-center">
                              <div class="dm-empty__image">
                                <img src="/img/svg/1.png" alt="Admin Empty" />
                              </div>
                              <div class="dm-empty__text">
                                <p class>No Data Available</p>
                              </div>
                            </div>
                          </td>
                        </tr> */}
                            </tbody>
                          </table>
                        </div>

                        <Pagination />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-30">
                <div className="card border-0">
                  <div className="card-header">
                    <h6>Country</h6>
                    <div className="card-extra">
                      <ul
                        className="card-tab-links nav-tabs nav"
                        role="tablist"
                      >
                        <li>
                          <a
                            className="active"
                            href="#t_landing-today"
                            data-bs-toggle="tab"
                            id="t_landing-today-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-week"
                            data-bs-toggle="tab"
                            id="t_landing-week-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-month"
                            data-bs-toggle="tab"
                            id="t_landing-month-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Month
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_landing-year"
                            data-bs-toggle="tab"
                            id="t_landing-year-tab"
                            role="tab"
                            aria-selected="false"
                          >
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
                          aria-expanded="false"
                        >
                          <img
                            src="img/svg/more-horizontal.svg"
                            alt="more-horizontal"
                            className="svg"
                          />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="topPage"
                        >
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
                        aria-labelledby="t_landing-today-tab"
                      >
                        <div className="userDatatable  mt-1 p-2 table-responsive">
                          <table className="table table--default body-px-25">
                            <thead>
                              <tr class="userDatatable-header">
                                {/* <th style={{ width: "10px" }}>
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
                                </th> */}
                                <th>
                                  <span class="userDatatable-title">No.</span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">Name</span>
                                </th>
                                <th>
                                  <span class="userDatatable-title">Flag</span>
                                </th>
                                <th
                                  style={{
                                    textAlign: "right",
                                    paddingRight: "40px",
                                  }}
                                >
                                  <span className="userDatatable-title">
                                    Action
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {/* <td>
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
                                </td> */}

                                <td>1</td>

                                <td> NEW </td>

                                <td>
                                  <img
                                    src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png"
                                    style={{ height: "20px" }}
                                  />
                                </td>

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
                              {/* <tr>
                          <td colSpan={7}>
                            <div class="dm-empty text-center">
                              <div class="dm-empty__image">
                                <img src="/img/svg/1.png" alt="Admin Empty" />
                              </div>
                              <div class="dm-empty__text">
                                <p class>No Data Available</p>
                              </div>
                            </div>
                          </td>
                        </tr> */}
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

export default Home;
