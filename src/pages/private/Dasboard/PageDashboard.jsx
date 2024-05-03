import React, { useContext, useEffect } from "react";
import { ContextDatas } from "../../../services/Context";

function PageDashboard() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobileSide(!mobileSide);
    }
  }, []);

  return (
    <div>
      <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
        <div className="demo2 mb-25 t-thead-bg">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Dashboard
                  </h4>
                  <div className="breadcrumb-action justify-content-center flex-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">
                            <i className="uil uil-estate" />
                            Dashboard
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Demo 2
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-sm-6  col-ssm-12 mb-25">
                <div className="ap-po-details ap-po-details--luodcy  overview-card-shape radius-xl d-flex justify-content-between">
                  <div className=" ap-po-details-content d-flex flex-wrap justify-content-between w-100">
                    <div className="ap-po-details__titlebar">
                      <p>Total Products</p>
                      <h1>100+</h1>
                      <div className="ap-po-details-time">
                        <span className="color-success">
                          <i className="las la-arrow-up" />
                          <strong>25.36%</strong>
                        </span>
                        <small>Since last month</small>
                      </div>
                    </div>
                    <div className="ap-po-details__icon-area color-primary">
                      <i className="uil uil-arrow-growth" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-sm-6  col-ssm-12 mb-25">
                <div className="ap-po-details ap-po-details--luodcy  overview-card-shape radius-xl d-flex justify-content-between">
                  <div className=" ap-po-details-content d-flex flex-wrap justify-content-between w-100">
                    <div className="ap-po-details__titlebar">
                      <p>Total Orders</p>
                      <h1>30,825</h1>
                      <div className="ap-po-details-time">
                        <span className="color-success">
                          <i className="las la-arrow-up" />
                          <strong>25.36%</strong>
                        </span>
                        <small>Since last month</small>
                      </div>
                    </div>
                    <div className="ap-po-details__icon-area color-secondary">
                      <i className="uil uil-users-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-sm-6  col-ssm-12 mb-25">
                <div className="ap-po-details ap-po-details--luodcy  overview-card-shape radius-xl d-flex justify-content-between">
                  <div className=" ap-po-details-content d-flex flex-wrap justify-content-between w-100">
                    <div className="ap-po-details__titlebar">
                      <p>Total Sales</p>
                      <h1>$30,825</h1>
                      <div className="ap-po-details-time">
                        <span className="color-danger">
                          <i className="las la-arrow-down" />
                          <strong>25.36%</strong>
                        </span>
                        <small>Since last month</small>
                      </div>
                    </div>
                    <div className="ap-po-details__icon-area color-success">
                      <i className="uil uil-usd-circle" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-sm-6  col-ssm-12 mb-25">
                <div className="ap-po-details ap-po-details--luodcy  overview-card-shape radius-xl d-flex justify-content-between">
                  <div className=" ap-po-details-content d-flex flex-wrap justify-content-between w-100">
                    <div className="ap-po-details__titlebar">
                      <p>New Customers</p>
                      <h1>30,825</h1>
                      <div className="ap-po-details-time">
                        <span className="color-success">
                          <i className="las la-arrow-up" />
                          <strong>25.36%</strong>
                        </span>
                        <small>Since last month</small>
                      </div>
                    </div>
                    <div className="ap-po-details__icon-area color-info">
                      <i className="uil uil-tachometer-fast" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 mb-25">
                <div className="card revenueChartTwo border-0">
                  <div className="card-header border-0">
                    <h6>Sales Revenue</h6>
                    <div className="card-extra">
                      <ul
                        className="card-tab-links nav-tabs nav"
                        role="tablist"
                      >
                        <li>
                          <a
                            className="active"
                            href="#tl_revenue-today"
                            data-bs-toggle="tab"
                            id="tl_revenue-today-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tl_revenue-week"
                            data-bs-toggle="tab"
                            id="tl_revenue-week-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tl_revenue-month"
                            data-bs-toggle="tab"
                            id="tl_revenue-month-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Month
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-0 pb-40">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="tl_revenue-today"
                        role="tabpanel"
                        aria-labelledby="tl_revenue-today-tab"
                      >
                        <div className="cashflow-display cashflow-display2 d-flex"></div>
                        <div className="wp-chart">
                          <div className="parentContainer">
                            <div>
                              <canvas id="saleRevenueToday" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tl_revenue-week"
                        role="tabpanel"
                        aria-labelledby="tl_revenue-week-tab"
                      >
                        <div className="cashflow-display cashflow-display2 d-flex"></div>
                        <div className="wp-chart">
                          <div className="parentContainer">
                            <div>
                              <canvas id="saleRevenueWeek" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tl_revenue-month"
                        role="tabpanel"
                        aria-labelledby="tl_revenue-month-tab"
                      >
                        <div className="cashflow-display cashflow-display2 d-flex"></div>
                        <div className="wp-chart">
                          <div className="parentContainer">
                            <div>
                              <canvas id="saleRevenueMonth" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 mb-25">
                <div className="card border-0 px-25 h-100">
                  <div className="card-header px-0 border-0">
                    <h6>Source Of Revenue Generated</h6>
                    <div className="dropdown dropleft">
                      <a
                        href="#"
                        role="button"
                        id="todo12"
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
                      <div className="dropdown-menu" aria-labelledby="todo12">
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
                  <div className="p-0 card-body">
                    <div className="revenueSourceChart px-0">
                      <div className="parentContainer position-relative">
                        <div className="apexpie ms-md-n50">
                          <div className="apexPieToday" />
                        </div>
                      </div>
                      <div className="chart-content__details">
                        <div className="chart-content__single">
                          <span className="icon color-facebook">
                            <span className="uil uil-facebook-f" />
                          </span>
                          <span className="label">Facebook</span>
                          <span className="data">$4621</span>
                        </div>
                        <div className="chart-content__single">
                          <span className="icon color-twitter">
                            <span className="uil uil uil-twitter" />
                          </span>
                          <span className="label">twitter</span>
                          <span className="data">$3621</span>
                        </div>
                        <div className="chart-content__single">
                          <span className="icon color-secondary">
                            <span className="uil uil uil-google" />
                          </span>
                          <span className="label">google</span>
                          <span className="data">$8945</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 mb-25">
                <div className="card border-0 px-25">
                  <div className="card-header px-0 border-0">
                    <h6>New Product</h6>
                    <div className="card-extra">
                      <ul
                        className="card-tab-links nav-tabs nav"
                        role="tablist"
                      >
                        <li>
                          <a
                            className="active"
                            href="#t_selling-today"
                            data-bs-toggle="tab"
                            id="t_selling-today-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_selling-week"
                            data-bs-toggle="tab"
                            id="t_selling-week-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            href="#t_selling-month"
                            data-bs-toggle="tab"
                            id="t_selling-month-tab"
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
                        id="t_selling-today"
                        role="tabpanel"
                        aria-labelledby="t_selling-today-tab"
                      >
                        <div className="selling-table-wrap">
                          <div className="table-responsive">
                            <table className="table table--default table-borderless ">
                              <thead>
                                <tr>
                                  <th>PRDUCTS NAME</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="radius-xs img-fluid order-bg-opacity-primary"
                                        src="img/giorgio.png"
                                        alt="img"
                                      />
                                      <span>UV Protected Sunglass</span>
                                    </div>
                                  </td>
                                  <td>$38,536</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="radius-xs img-fluid order-bg-opacity-primary"
                                        src="img/headphone.png"
                                        alt="img"
                                      />
                                      <span>Black Headphone</span>
                                    </div>
                                  </td>
                                  <td>$20,573</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="radius-xs img-fluid order-bg-opacity-primary"
                                        src="img/shoes.png"
                                        alt="img"
                                      />
                                      <span>Nike Shoes</span>
                                    </div>
                                  </td>
                                  <td>$17,457</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="radius-xs img-fluid order-bg-opacity-primary"
                                        src="img/mac-pro.png"
                                        alt="img"
                                      />
                                      <span>15" Mackbook Pro</span>
                                    </div>
                                  </td>
                                  <td>$15,354</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="radius-xs img-fluid order-bg-opacity-primary"
                                        src="img/creativ-bag.png"
                                        alt="img"
                                      />
                                      <span>Women Bag</span>
                                    </div>
                                  </td>
                                  <td>$12,354</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t_selling-week"
                        role="tabpanel"
                        aria-labelledby="t_selling-week-tab"
                      >
                        <div className="selling-table-wrap">
                          <div className="table-responsive">
                            <table className="table table--default table-borderless">
                              <thead>
                                <tr>
                                  <th>PRDUCTS NAME</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/287.png"
                                        alt="img"
                                      />
                                      <span>Samsung Galaxy S8 256GB</span>
                                    </div>
                                  </td>
                                  <td>$60,258</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid"
                                        src="img/165.png"
                                        alt="img"
                                      />
                                      <span>Half Sleeve Shirt</span>
                                    </div>
                                  </td>
                                  <td>$2,483</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/166.png"
                                        alt="img"
                                      />
                                      <span>Marco Shoes</span>
                                    </div>
                                  </td>
                                  <td>$19,758</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/315.png"
                                        alt="img"
                                      />
                                      <span>15" Mackbook Pro</span>
                                    </div>
                                  </td>
                                  <td>$197,458</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/506.png"
                                        alt="img"
                                      />
                                      <span>Apple iPhone X</span>
                                    </div>
                                  </td>
                                  <td>115,254</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t_selling-month"
                        role="tabpanel"
                        aria-labelledby="t_selling-month-tab"
                      >
                        <div className="selling-table-wrap">
                          <div className="table-responsive">
                            <table className="table table--default table-borderless">
                              <thead>
                                <tr>
                                  <th>PRDUCTS NAME</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/287.png"
                                        alt="img"
                                      />
                                      <span>Samsung Galaxy S8 256GB</span>
                                    </div>
                                  </td>
                                  <td>$60,258</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid"
                                        src="img/165.png"
                                        alt="img"
                                      />
                                      <span>Half Sleeve Shirt</span>
                                    </div>
                                  </td>
                                  <td>$2,483</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/166.png"
                                        alt="img"
                                      />
                                      <span>Marco Shoes</span>
                                    </div>
                                  </td>
                                  <td>$19,758</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/315.png"
                                        alt="img"
                                      />
                                      <span>15" Mackbook Pro</span>
                                    </div>
                                  </td>
                                  <td>$197,458</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <img
                                        className="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                        src="img/506.png"
                                        alt="img"
                                      />
                                      <span>Apple iPhone X</span>
                                    </div>
                                  </td>
                                  <td>115,254</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 mb-25">
                <div className="card border-0 px-25">
                  <div className="card-header px-0 border-0">
                    <h6>Best Seller</h6>
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
                                  <th>Seller name</th>
                                  <th>Company</th>
                                  <th>Product</th>
                                  <th>Revenue</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-1.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Robert Clinton</span>
                                    </div>
                                  </td>
                                  <td>Samsung</td>
                                  <td>Smart Phone</td>
                                  <td>$38,536</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-2.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Michael Johnson </span>
                                    </div>
                                  </td>
                                  <td>Asus</td>
                                  <td>Laptop</td>
                                  <td>$20,573</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-3.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Daniel White</span>
                                    </div>
                                  </td>
                                  <td>Google</td>
                                  <td>Watch</td>
                                  <td>$17,457</td>
                                  <td>Pending</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-4.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Chris Barin </span>
                                    </div>
                                  </td>
                                  <td>Apple</td>
                                  <td>Computer</td>
                                  <td>$15,354</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-5.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Daniel Pink</span>
                                    </div>
                                  </td>
                                  <td>Panasonic</td>
                                  <td>Sunglass</td>
                                  <td>$12,354</td>
                                  <td>Done</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t_selling-week222"
                        role="tabpanel"
                        aria-labelledby="t_selling-week222-tab"
                      >
                        <div className="selling-table-wrap selling-table-wrap--source">
                          <div className="table-responsive">
                            <table className="table table--default table-borderless">
                              <thead>
                                <tr>
                                  <th>Seller name</th>
                                  <th>Company</th>
                                  <th>Product</th>
                                  <th>Revenue</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-1.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Robert Clinton</span>
                                    </div>
                                  </td>
                                  <td>Samsung</td>
                                  <td>Smart Phone</td>
                                  <td>$38,536</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-2.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Michael Johnson </span>
                                    </div>
                                  </td>
                                  <td>Asus</td>
                                  <td>Laptop</td>
                                  <td>$20,573</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-3.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Daniel White</span>
                                    </div>
                                  </td>
                                  <td>Google</td>
                                  <td>Watch</td>
                                  <td>$17,457</td>
                                  <td>Pending</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-4.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Chris Barin </span>
                                    </div>
                                  </td>
                                  <td>Apple</td>
                                  <td>Computer</td>
                                  <td>$15,354</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-5.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Daniel Pink</span>
                                    </div>
                                  </td>
                                  <td>Panasonic</td>
                                  <td>Sunglass</td>
                                  <td>$12,354</td>
                                  <td>Done</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t_selling-month333"
                        role="tabpanel"
                        aria-labelledby="t_selling-month333-tab"
                      >
                        <div className="selling-table-wrap selling-table-wrap--source">
                          <div className="table-responsive">
                            <table className="table table--default table-borderless">
                              <thead>
                                <tr>
                                  <th>Seller name</th>
                                  <th>Company</th>
                                  <th>Product</th>
                                  <th>Revenue</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-1.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Robert Clinton</span>
                                    </div>
                                  </td>
                                  <td>Samsung</td>
                                  <td>Smart Phone</td>
                                  <td>$38,536</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-2.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Michael Johnson </span>
                                    </div>
                                  </td>
                                  <td>Asus</td>
                                  <td>Laptop</td>
                                  <td>$20,573</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-3.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Daniel White</span>
                                    </div>
                                  </td>
                                  <td>Google</td>
                                  <td>Watch</td>
                                  <td>$17,457</td>
                                  <td>Pending</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-4.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Chris Barin </span>
                                    </div>
                                  </td>
                                  <td>Apple</td>
                                  <td>Computer</td>
                                  <td>$15,354</td>
                                  <td>Done</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="selling-product-img d-flex align-items-center">
                                      <div className="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                        <img
                                          className=" img-fluid"
                                          src="img/author/robert-5.png"
                                          alt="img"
                                        />
                                      </div>
                                      <span>Daniel Pink</span>
                                    </div>
                                  </td>
                                  <td>Panasonic</td>
                                  <td>Sunglass</td>
                                  <td>$12,354</td>
                                  <td>Done</td>
                                </tr>
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
        </div>
      </div>
    </div>
  );
}

export default PageDashboard;
