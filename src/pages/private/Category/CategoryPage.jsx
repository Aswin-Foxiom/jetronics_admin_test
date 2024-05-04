import React, { useContext, useEffect, useState } from 'react'
import { ContextDatas } from '../../../services/Context';

function CategoryPage() {
    const [pageLoading, setpageLoading] = useState(true);
    const [brandList, setbrandList] = useState([
      // { id: 1, name: "Brand 1" },
      // { id: 2, name: "Brand 2" },
    ]);
    const { mobileSide, setmobileSide, setdropdownItems } =
      useContext(ContextDatas);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setpageLoading(false);
      }, 3000); // 5000 milliseconds = 5 seconds
  
      // Cleanup function to clear the timer if the component unmounts or the dependency array changes
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className={`contents ${mobileSide ? "expanded" : ""}`}>
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-4 order-xl-2">
          <div className="card card-Vertical card-default card-md mb-4">
            <div className="card-header">
              <h6>Add New</h6>
            </div>
            <div className="card-body pb-md-25">
              <div className="Vertical-form">
                <form>
                  <div className="form-group">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="color-dark fs-14 fw-500 align-center mb-10">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control ih-medium ip-gray radius-xs b-light px-15"
                      id="formGroupExampleInput"
                      name="name"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="layout-button justify-content-end mt-3">
                    <button
                      type="button"
                      className="btn btn-default btn-squared btn-light px-20">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-default btn-squared px-30">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 order-xl-1">
          <div className="card border-0 custom-margin">
            <div className="card-header">
              <h6>Brand</h6>
              <div
                className="layout-button mt-0 justify-content-end p-0"
                style={{ margin: "0 -7px" }}>
                <input
                  type="text"
                  className="form-control ih-medium ip-light radius-xs b-light px-15 mt-2"
                  id="searchName"
                  placeholder="Search by Name"
                  style={{
                    margin: "7px",
                    height: "44px",
                    width: "180px",
                  }}
                />
              </div>
            </div>
            <div className="card-body p-0">
              <div className="tab-content">
                <div className="tab-pane fade active show">
                  <div className="userDatatable mt-1 px-4 py-2 table-responsive">
                    <table className="table table--default body-px-25" style={{minHeight:'200px'}}>
                      <thead>
                        <tr className="userDatatable-header">
                          <th style={{ width: "10px" }}>
                            <span className="userDatatable-title">#</span>
                          </th>
                          <th>
                            <span className="userDatatable-title">
                              Name
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
                        {pageLoading ? (
                          <tr>
                            <td colSpan={3}>
                              <div className="text-center">
                                <Loader />{" "}
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <>
                            {brandList.length > 0 ? (
                              brandList.map((brand, index) => (
                                <tr key={index}>
                                  <td>{brand.id}</td>
                                  <td>{brand.name}</td>
                                  <td>
                                    <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
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
                              ))
                            ) : (
                              <tr>
                                <td colSpan={3}>
                                  <div className="dm-empty text-center">
                                    <div className="dm-empty__image">
                                      <img
                                        src="/img/svg/1.png"
                                        alt="Admin Empty"
                                      />
                                    </div>
                                    <div className="dm-empty__text">
                                      <p className="text-muted">
                                        No Data Available
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CategoryPage