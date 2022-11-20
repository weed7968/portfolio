import React from "react";

const MainPage = () => {
  const stl = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return <div style={stl}>메인페이지</div>;
};

export default MainPage;
