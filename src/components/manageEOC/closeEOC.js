import React from "react";
import ActivityCard from "../manageActivityEOC/activityActiveCard";
import { Box, Modal, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {setStatusInactive ,
  setDate,setActStatusInactive ,setActDate,setActName,setActDes,setRadioValue,setCheckBoxsValue} from "../../dataSlice";
export default function CloseEOC({ open, onClose }) {
  const activityStatus = useSelector((state) => state.data.activityStatus);
  const date = useSelector((state) => state.data.date);
  const radioValue = useSelector((state) => state.data.radioValue);
  const checkBoxs = useSelector((state) => state.data.checkBoxs);
  const dispatch = useDispatch();
  const mockData = {
    data1: "ปิด EOC ระดับอำเภอ",
    data2: "บางบัวทอง จังหวัดนนทบุรี",
    data3: "",
    data4: "",
    data5: "",
    data6: "",
    data7: "",
  };

  const handleCloseEOC = () => {
    dispatch(setStatusInactive());
    dispatch(setActStatusInactive());
    dispatch(setDate(""))
    dispatch(setActDate(""))
    dispatch(setActName(""))
    dispatch(setActDes(""))
    dispatch(setRadioValue(""))
    dispatch(setCheckBoxsValue([]))
  };
  const handleCancel = () => {
    onClose();
  };
  return (
    <Modal open={open} onClose={handleCancel} style={{ marginTop: "50px" ,display:"flex",overflowY:"scroll",marginBottom:"20px"}}>
      <Box
        style={{
          backgroundColor: "#fff",
          width: "40%",
          margin: "auto",
          padding: "20px 40px 80px 40px", 
        }}
      >
        <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{ height: "90%" }}>
          <div>
            <h1>{mockData.data1}</h1>
            <p style={{color:"red"}}><small>ท่านกำลังทำการปิด EOC</small></p>
            <hr></hr>
            <p><small>เขต/อำเภอ</small></p>
            <p><b>{mockData.data2}</b></p>
            <p><small>วันที่เปิด EOC</small></p>
            <p><b>{date}</b></p>
            <p><small>รายละเอียด</small></p>
            <p></p>
          </div>
          <div style={{marginLeft:"40px"}}>
          <div>
            <p><b>ผู้บัญชาการเหตุการณ์</b></p>
            <div>{radioValue}</div>
          </div>
          <div>
            <p><b>หน่วยงานที่มีส่วนร่วม</b></p>
            <div>
              <ul>
                {checkBoxs.map((checked) => (
                  <li key={checked}>{checked}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p>บันทึกกิจกรรม</p>
            {activityStatus === "active" && (
              <div>
                <ActivityCard />
              </div>
            )}
          </div>
        </div>
        </div>
        <div style={{height:"10%",display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"10px"}}>
          <Button onClick={handleCloseEOC} style={{marginBottom:"20px",marginTop:"auto",backgroundColor:"#4AA12C",color:"#fff",borderRadius:"10px"}}>ยกเลิก EOC</Button>
          <Button onClick={handleCancel} style={{marginBottom:"20px",marginTop:"auto",backgroundColor:"#2C3F64",color:"#fff",marginLeft:"1rem",borderRadius:"10px"}}>ยกเลิก</Button>
        </div>
        </div>
      </Box>
    </Modal>
  );
}
