import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";
import ModalForm from "./components/ModalForm";

function FooterContent() {
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [pageLoading, setPageLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editIndices, setEditIndices] = useState([]);
  const [footerValues, setFooterValues] = useState([
    {
      label: {
        English: "Contact Us",
        Arabic: "اتصل بنا",
        Hindi: "हमसे संपर्क करें",
      },
      value: {
        English: "Website owned by Jetronics LLC, Shams Free Zone, Sharjah Media City, Sharjah, UAE",
        Arabic: "الموقع الإلكتروني مملوك لشركة جترونيكس ذ م م، منطقة شمس الحرة، مدينة الشارقة الإعلامية، الشارقة، الإمارات العربية المتحدة",
        Hindi: "वेबसाइट जेट्रोनिक्स एलएलसी, शम्स फ्री जोन, शारजाह मीडिया सिटी, शारजाह, यूएई द्वारा स्वामित्विक",
      },
    },
    {
      label: {
        English: "Email",
        Arabic: "البريد الإلكتروني",
        Hindi: "ईमेल",
      },
      value: {
        English: "Nayeem@jetronics.ae",
        Arabic: "Nayeem@jetronics.ae",
        Hindi: "Nayeem@jetronics.ae",
      },
    },
    {
      label: {
        English: "Website",
        Arabic: "موقع الكتروني",
        Hindi: "वेबसाइट",
      },
      value: {
        English: "Jetronics.ae",
        Arabic: "Jetronics.ae",
        Hindi: "Jetronics.ae",
      },
    },
    {
      label: {
        English: "Phone Number",
        Arabic: "رقم الهاتف",
        Hindi: "फ़ोन नंबर",
      },
      value: {
        English: "+971 589989090",
        Arabic: "+971 589989090",
        Hindi: "+971 589989090",
      },
    },
    {
      label: {
        English: "Information",
        Arabic: "معلومات",
        Hindi: "जानकारी",
      },
      value: {
        English: "About us, Un-Claimable Products, Why Us?, Newsletter, Follow us on social media",
        Arabic: "معلومات عنا، المنتجات غير القابلة للمطالبة، لماذا نحن؟، النشرة الإخبارية، تابعنا على وسائل التواصل الاجتماعي",
        Hindi: "हमारे बारे में, अदावत उत्पाद, हमारे बारे में क्यों?, समाचार पत्रिका, हमें सोशल मीडिया पर फ़ॉलो करें",
      },
    },
    // Add more footer content as needed
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

  const handleEditClick = (cardIndex) => {
    setEditIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      // Toggle editing mode for the entire card
      newIndices[cardIndex] = !newIndices[cardIndex];
      // Reset editing mode for all other cards
      for (let i = 0; i < newIndices.length; i++) {
        if (i !== cardIndex) {
          newIndices[i] = false;
        }
      }
      return newIndices;
    });
  };

  const handleCloseEdit = (index) => {
    setEditIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = false; // Reset editing mode for this card
      return newIndices;
    });
  };
  
  const handleTitleChange = (index, lang, event) => {
    const { value } = event.target;
    const updatedFooterValues = [...footerValues];
    updatedFooterValues[index].label[lang] = value;
    setFooterValues(updatedFooterValues);
  };

  const handleValueChange = (index, lang, event) => {
    const { value } = event.target;
    const updatedFooterValues = [...footerValues];
    updatedFooterValues[index].value[lang] = value;
    setFooterValues(updatedFooterValues);
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
              {Object.keys(footerValues[0]?.label).map((lang, index) => (
  <div key={index} className="col-xxl-3">
    <div className="card border-0 px-25 mb-4">
      <div className="card-header px-0">
        <h6>{lang}</h6>
        <div className="card-extra">
          <ul className="orderDatatable_actions mb-0">
            <li className= "d-flex justify-content-between" style={{marginLeft:"50px"}}>
              <a
                href="#"
                className={`edit ${editIndices[index] ? "save" : ""}`}
                onClick={() => handleEditClick(index)}
              >
                <i className={`uil ${editIndices[index] ? "uil-save" : "uil-edit"}`}></i>
              </a>
              {editIndices[index] && ( // Display the "close" icon only when editing
                <a
                  href="#"
                  onClick={() => handleCloseEdit(index)}
                  className="remove"
                >
                  <i className="uil uil-times"></i>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table table--default mt-2">
          <tbody>
            {footerValues.map((footer, i) => (
              <tr key={i}>
                <td style={{ paddingLeft: "10px", width: "50%" }}>
                  {editIndices[index] ? (
                    <input
                      type="text"
                      className="form-control "
                      value={footer.label[lang]}
                      onChange={(event) => handleTitleChange(i, lang, event)}
                    />
                  ) : (
                    footer.label[lang]
                  )}
                </td>
                <td style={{ paddingLeft: "10px", width: "50%" }}>
                  {editIndices[index] ? (
                    <input
                      type="text"
                      className="form-control"
                      value={footer.value[lang]}
                      onChange={(event) => handleValueChange(i, lang, event)}
                    />
                  ) : (
                    footer.value[lang]
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ModalForm
        show={showModal}
        onHide={handleCloseModal}
        headingValues={footerValues}
        editIndices={editIndices}
        handleTitleChange={handleTitleChange}
        handleEditClick={handleEditClick}
        buttonLoading={false}
      />
    </>
  );
}

export default FooterContent;
