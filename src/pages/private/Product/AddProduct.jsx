import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";

function AddProduct() {
  const [pageLoading, setpageLoading] = useState(true);
  const { mobileSide, setmobileSide, setdropdownItems } =
    useContext(ContextDatas);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobileSide(!mobileSide);
      setdropdownItems({
        products: false,
        websites: false,
        orders: false,
        contents: false,
      });
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
    <div>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
          <div className="container-fluid">
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Form Layouts
                  </h4>
                  <div className="breadcrumb-action justify-content-center flex-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">
                            <i className="uil uil-estate" />
                            Home
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          form layouts
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row mt-4">
              <div className="col-lg-8" >
                <div className="card card-Vertical card-default card-md mb-4">
                  <div className="card-header">
                    <h6>General Details</h6>
                  </div>
                  <div className="card-body pb-md-30">
                    <div className="Vertical-form">
                      <form action="#">
                        <div className="row">
                       
                              <div className="col-12">
                                <div className="form-group">
                                  <label
                                    htmlFor="name"
                                    className="color-dark fs-14 fw-500 align-center mb-10">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    id="name"
                                    placeholder="Product Name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                  <label
                                    htmlFor="sku"
                                    className="color-dark fs-14 fw-500 align-center mb-10">
                                    SKU
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    id="sku"
                                    placeholder="SKU"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                  <label
                                    htmlFor="category"
                                    className="color-dark fs-14 fw-500 align-center mb-10">
                                    Category
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    id="category"
                                    placeholder="Category"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                  <label
                                    htmlFor="brand"
                                    className="color-dark fs-14 fw-500 align-center mb-10">
                                    Brand
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    id="brand"
                                    placeholder="Brand"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                  <label
                                    htmlFor="color"
                                    className="color-dark fs-14 fw-500 align-center mb-10">
                                    Color
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    id="color"
                                    placeholder="Color"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-12 ">
                                <div className="form-group">
                                  <label
                                    htmlFor="description"
                                    className="color-dark fs-14 fw-500 align-center mb-10">
                                    Description
                                  </label>
                                  <textarea
                                  style={{height:'100px'}}
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    id="description"
                                    rows="3"
                                    placeholder="Description"></textarea>
                                </div>
                              </div>
                  
                    
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div className="card  card-default card-md mb-4" style={{height:'540px'}}>
                  <div className="card-header">
                    <h6>Product Image</h6>
                  </div>
                  <div className="card-body py-md-30">
                    <div className="dm-upload mb-25">
                      <div className="dm-upload-avatar media-import mb-25 dropzone-lg-s">
                        <p className="color-light mt-0 fs-15">
                          Drop files here to upload
                        </p>
                      </div>
                      <div className="avatar-up">
                        <input
                          type="file"
                          name="upload-avatar-input"
                          className="upload-avatar-input"
                        />
                      </div>
                    </div>
                    <div className="dm-upload">
                      <div className="dm-upload-avatar media-import dropzone-md-s">
                        <p className="color-light mt-0 fs-14">
                          Drop files here to upload
                        </p>
                      </div>
                      <div className="avatar-up">
                        <input
                          type="file"
                          name="upload-avatar-input"
                          className="upload-avatar-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8" >
                <div className="card card-Vertical card-default card-md mb-4">
                  <div className="card-header">
                    <h6>Price Details</h6>
                  </div>
                  <div className="card-body pb-md-30">
                    <div className="Vertical-form">
                      <form action="#">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="price"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Price
                              </label>
                              <input
                                type="number"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="price"
                                placeholder="Price"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="priceUnit"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Price Unit
                              </label>
                              <input
                                type="text"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="priceUnit"
                                placeholder="Price Unit"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="oldPrice"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Old Price
                              </label>
                              <input
                                type="number"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="oldPrice"
                                placeholder="Old Price"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="deliveryCharge"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Delivery Charge
                              </label>
                              <input
                                type="number"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="deliveryCharge"
                                placeholder="Delivery Charge"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="purchasePrice"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Purchase Price
                              </label>
                              <input
                                type="number"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="purchasePrice"
                                placeholder="Purchase Price"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="quantity"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Quantity
                              </label>
                              <input
                                type="number"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="quantity"
                                placeholder="Quantity"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="quantityText"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Quantity Text
                              </label>
                              <input
                                type="text"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="quantityText"
                                placeholder="Quantity Text"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label
                                htmlFor="rank"
                                className="color-dark fs-14 fw-500 align-center mb-10">
                                Rank
                              </label>
                              <input
                                type="number"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                id="rank"
                                placeholder="Rank"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>



 
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
