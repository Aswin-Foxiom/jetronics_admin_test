import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";

function OrderDetailsPage() {
  const [pageLoading, setpageLoading] = useState(true);

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
    <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
      <div className="container-fluid">
        <div className="card mt-4">
          <div className="card-body">
            <div className="row mt-4">
              <div className="col-lg-7 col-xxl-9 col-12">
                <div className="card">
                  <div
                    className="card-header "
                    style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="mb-1">Order Summary </h4>
                        <div className="d-flex align-items-center">
                          <small>Order Date: October 03,2023 at 6:31 pm</small>{" "}
                          {/* <span className="badge badge-success-soft ms-2">
                            Paid
                          </span> */}
                          <span class="mx-2 order-bg-opacity-warning  text-warning rounded-pill active">Awaiting Shipment</span>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>

                  <div className="card-body">
                    {/* <div className="d-flex align-items-center ">
                      <div className="ms-4">
                        <h5 className="mb-0">
                          {" "}
                          <a href="#!" className="text-inherit">
                            Women Shoes
                          </a>
                        </h5>
                        <small>SKU: 1</small>

                        <div class="col-md-12 mb-3 mb-md-0">
                          <div>
                            <div className="fs-6 text-body">
                              <span>Gender : </span>
                              <span className="fw-bold">Women</span>
                            </div>
                            <div className="fs-6 text-body">
                              <span>Color : </span>
                              <span className="fw-bold">Green</span>
                            </div>
                            <div className="fs-6 text-body">
                              <span>Size : </span>
                              <span className="fw-bold">UK 7</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div>
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex justify-content-between mb-2">
                          <span>quantity </span>{" "}
                          <span className="text-dark">Ajsal</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>price</span>{" "}
                          <span className="text-dark">
                            1234 Elm Street Springfield, USA
                          </span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Delivery Charges</span>{" "}
                          <span className="text-dark">AS-16677</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Phone</span>{" "}
                          <span className="text-dark">9872983738</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>City </span>
                          <span className="text-dark ">Ernakulam</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xxl-3 col-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <h4 className="mb-0">Customer Details</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex justify-content-between mb-2">
                          <span>Client :</span>{" "}
                          <span className="text-dark">Ajsal</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Address:</span>{" "}
                          <span className="text-dark">
                            1234 Elm Street Springfield, USA
                          </span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Client ID:</span>{" "}
                          <span className="text-dark">AS-16677</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Phone:</span>{" "}
                          <span className="text-dark">9872983738</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>City: </span>
                          <span className="text-dark ">Ernakulam</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4 className="mb-0">Product Details</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex justify-content-between mb-2">
                          <span>Product ID:</span>{" "}
                          <span className="text-dark">#DU444TO10000</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Size:</span>{" "}
                          <span className="text-dark">Credit Card</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Qty:</span>{" "}
                          <span className="text-dark">Harold Gonzalez</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                          <span>Color:</span>{" "}
                          <span className="text-dark">xxxx xxxx xxxx 6779</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Category: </span>
                          <span className="text-dark ">$368.00</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Brand : </span>
                          <span className="text-dark ">$368.00</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Title : </span>
                          <span className="text-dark ">$368.00</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Description : </span>
                          <span className="text-dark ">$368.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
