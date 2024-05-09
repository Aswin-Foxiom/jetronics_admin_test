import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";
import StatusPage from "./components/StatusPage";
import CityPage from "./components/CityPage";
function StatusHome() {
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
             
<StatusPage/>
          <CityPage/>    
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StatusHome;
