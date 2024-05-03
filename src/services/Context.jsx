import { createContext, useEffect, useState } from "react";

export const ContextDatas = createContext();

const Context = ({ children }) => {
  const [urlPath, setUrlPath] = useState(window.location.pathname ?? "/");
  const [mobileSide, setmobileSide] = useState(false);
  const [dropdownItems, setdropdownItems] = useState({
    products: false,
    websites: false,
    orders: false,
    contents: false,
  });

  return (
    <ContextDatas.Provider
      value={{
        mobileSide,
        setmobileSide,
        dropdownItems,
        setdropdownItems,
        urlPath,
        setUrlPath,
      }}
    >
      {children}
    </ContextDatas.Provider>
  );
};

export default Context;
