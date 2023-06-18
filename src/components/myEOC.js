import { useSelector } from "react-redux";
import React from "react";
import CreateEOC from "./createEOC";
import AddEOC from "./cardEOC";

function MyEOC() {
//   const refresh = () => window.location.reload(true);
  const status = useSelector((state) => state.data.status);

  if (status === "active") {
    return (
        <div>
      {/* <div style={{display:"flex",gap:"20px"}}>
        <div style={{flex:"1",backgroundColor:"red"}}>
          <button onClick={refresh} style={{ color: "#000" }}>
            Refresh
          </button>          
          <button onClick={refresh} style={{ color: "#000" }}>
            Refresh
          </button>
        </div>
        <div style={{ flex:"1",backgroundColor:"yellow"}}>
          <button onClick={refresh} style={{ color: "#000" }}>
            Refresh
          </button>
        </div>
        
      </div> */}
      <AddEOC/>
      </div>
    );
  }
  return <CreateEOC />;
}
export default MyEOC;
