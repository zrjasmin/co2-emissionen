import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
};
export default ScrollTop;
