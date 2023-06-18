import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../css/createEOC.css"
import DataEOC from "./formEOC";

function CreateEOC() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    console.log("Open Input Screen")
    setModalOpen(true);
  };
  const handleCloseModal= () => {
    console.log("Close Input Screen")
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="buttonlayout">

        <Button className="buttonAddEOC" onClick={handleOpenModal}>+ เปิด EOC</Button>
        {modalOpen && (
        <DataEOC open={modalOpen} onClose={handleCloseModal} />
      )}
      </div>
    </div>
  );
}
export default CreateEOC;
