import React, { useState } from "react";
import Pagination from "../../../../components/Pagination";
import ModalForm from "./ModalForm";

function StatusPage() {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Status Name");

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = (editedDetail) => {
    setLanguageName(editedDetail);
    setShowModal(false);
  };
  return <>
     <div className="col-12 col-md-6 mt-30">
                <div className="card border-0">
                <div className="card-header">
                    <h6>Status</h6>
     
                    <div className="card-extra">
                    <div className="project-search order-search  global-shadow "  style={{marginRight:"10px"}}>
                    <input
                          type="text"
                          className="form-control input-search ip-light radius-xs b-light px-15 mt-2 mb-2"
                          id="search"
                          placeholder="Search by Name, email..."
                          // value={pages?.query}
                          // onChange={(e) => {
                          //   const newValue = e.target.value;
                          //   if (
                          //     newValue === "" ||
                          //     newValue.trim().length !== 0
                          //   ) {
                          //     setpages({ ...pages, query: newValue });
                          //   }
                          // }}
                        />
                        
</div>
                    <i
                        className="uil uil-plus"
                        style={{ fontSize: "25px" }}
                        onClick={handleEdit}
                      />

                     
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

                                <td> {status} </td>

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
              <ModalForm
        show={showModal}
        onHide={handleCloseModal}
        onSubmit={handleSave}
        selectedPage="Status"
        detail={status}
      />
  </>;
}

export default StatusPage;
