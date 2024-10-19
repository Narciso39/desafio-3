import React from "react";
import InformationBar from "../../components/InformationBar/InformationBar";
import NotFoundComponent from "../../components/NotFound/NotFound";

const NotFound: React.FC = () => {
  return (
    <>
      <NotFoundComponent />
      <InformationBar />
    </>
  );
};

export default NotFound;
