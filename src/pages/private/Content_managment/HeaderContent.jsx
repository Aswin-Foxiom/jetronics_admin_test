import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";
import ModalForm from "./components/ModalForm";

function HeaderContent() {
  const handleShowModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [pageLoading, setPageLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editIndices, setEditIndices] = useState([]);
  const [headingValues, setHeadingValues] = useState([
    {
      title: { English: "About", Arabic: "حول", Hindi: "के बारे में" },
      languages: ["English", "Arabic", "Hindi"],
    },
    {
      title: { English: "Home", Arabic: "الصفحة الرئيسية", Hindi: "होम" },
      languages: ["English", "Arabic", "Hindi"],
    },
    {
      title: { English: "Tech", Arabic: "تقنية", Hindi: "टेक्नोलॉजी" },
      languages: ["English", "Arabic", "Hindi"],
    },
    {
      title: { English: "Business", Arabic: "عمل", Hindi: "व्यापार" },
      languages: ["English", "Arabic", "Hindi"],
    },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const { mobileSide, setmobileSide, setdropdownItems } = useContext(ContextDatas);

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
      setPageLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEditClick = (index) => {
    setEditIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = !newIndices[index];
      return newIndices;
    });
  };

  const handleTitleChange = (index, lang, event) => {
    const { value } = event.target;
    const updatedHeadingValues = [...headingValues];
    updatedHeadingValues[index].title[lang] = value;
    setHeadingValues(updatedHeadingValues);
  };

  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents ${mobileSide ? "expanded" : ""}`}>
          <div className="demo2 mb-0 t-thead-bg">
            <div className="container-fluid">
              <div className="row  mt-3">
                <div className="col-xxl-12">
                  <div className="card border-0 px-25">
                    <div className="card-header px-0">
                      <h6>Headers</h6>
                      <div className="card-extra">
                        {/* <button
                          className="btn btn-primary btn-default btn-squared px-30"
                          style={{ marginLeft: "10px" }}
                          onClick={handleShowModal}
                        >
                          Add
                        </button> */}
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="tab-content">
                        <div className="tab-pane fade active show">
                          <div className="selling-table-wrap selling-table-wrap--source">
                            <div className="table-responsive">
                              <table className="table table--default mt-2">
                                <thead>
                                  <tr className="userDatatable-header">
                                    {headingValues[0]?.languages?.map((lang, index) => (
                                      <th key={index}>{lang}</th>
                                    ))}
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {headingValues?.map((heading, index) => (
                                    <tr key={index}>
                                      {heading?.languages?.map((lang) => (
                                        <td key={lang} style={{paddingLeft:"10px",width:"30%"}}>
                                          {editIndices[index] ? (
                                            <input
                                              type="text"
                                              className="form-control"
                                              value={heading.title[lang]}
                                              onChange={(event) => handleTitleChange(index, lang, event)}
                                            />
                                          ) : (
                                            heading?.title[lang]
                                          )}
                                        </td>
                                      ))}
                                      <td style={{ width: "100px" }}> 
                                        <ul className="orderDatatable_actions mb-0">
                                          <li>
                                            <a
                                              href="#"
                                              className={`edit ${editIndices[index] ? "save" : ""}`}
                                              onClick={() => handleEditClick(index)}
                                            >
                                              <i className={`uil ${editIndices[index] ? "uil-save" : "uil-edit"}`}></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                  ))}
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
      <ModalForm
        show={showModal}
        onHide={handleCloseModal}
        headingValues={headingValues}
        editIndices={editIndices}
        handleTitleChange={handleTitleChange}
        handleEditClick={handleEditClick}
        buttonLoading={false}
      />
    </>
  );
}

export default HeaderContent;
