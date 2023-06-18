
import {
  Box,
  Modal,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import moment from "moment"
import {  useDispatch } from "react-redux";
import React, {  useState } from "react";
import "../../css/createEOC.css";
import { setStatusActive, setDate, setRadioValue ,setCheckBoxsValue} from "../../dataSlice";
export default function EditEOC({open,onClose}) {
  const handleCancel = () => {
    onClose();
  }
  const dispatch = useDispatch();
  const [checkAgency, setCheckAgency] = useState([]);
  
  console.log({ checkAgency });
  const mockData = {
    titileEOC: "เปิดEOCระดับอำเภอ",
    titleInfo: "ท่านกำลังเปิด EOC กรุณาป้อนข้อมูลดังนี้",
    titleArea: "เขต/อำเภอ",
    titleProvince: "บางกรวย จังหวัดนนทบุรี",
  };
  const handleSubmit = (event) => {
    console.log("Enter submit");
    dispatch(setStatusActive());
    dispatch(setCheckBoxsValue(checkAgency));
    event.preventDefault();
  };
  const handleRadBtn = (event) => {
    console.log("handle redio btn");
    dispatch(setRadioValue(event.target.value));
  };
  const handleCheckBoxChange = (event) => {
    const index = checkAgency.indexOf(event.target.value);
    if (index === -1) {
      setCheckAgency([...checkAgency, event.target.value]);

    } else {
      setCheckAgency(checkAgency.filter((check) => check !== event.target.value));

    }
  };
  const handleDate = (event) => {
    console.log("Handle date act");
    const selectedDate = new Date(event.target.value);
    const date = moment(selectedDate.toISOString()).format('DD MMM, YYYY');
    console.log(date);
    dispatch(setDate(date));
  };
  return (
<Modal open={open} onClose={handleCancel} style={{display:"flex",overflowY:"scroll",marginTop: "50px",marginBottom:"20px"}}>
      <Box className="BoxStyle">
      <div className="data">
          <p><b>แก้ไข EOC ระดับอำเภอ</b></p>
          <small>ท่านกำลังเปิด EOC กรุณาป้อนข้อมูลดังนี้</small>
          <small>เขต/อำเภอ"</small>
          <p>บางกรวย จังหวัดนนทบุรี</p>
        </div>
  
        <div
          className="datacontainer"
          style={{ height: "65%", marginTop: "25px" }}
        >
          <div className="dataleft">
            <div>
              <h4>วันที่เปิด EOC</h4>
            </div>
            <div>
              <input className="dateInput" type="date" onChange={handleDate} />
            </div>
            <div>
              <h4>ผู้บัญชาการเหตุการณ์</h4>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  onChange={handleRadBtn}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="นายอำเภอ"
                    control={<Radio />}
                    label="นายอำเภอ"
                  />
                  <FormControlLabel
                    value="สาธารณสุขอำเภอ"
                    control={<Radio />}
                    label="สาธารณสุขอำเภอ"
                  />
                  <FormControlLabel
                    value="ผู้อำนวยการโรงพยาบาลชุมชน"
                    control={<Radio />}
                    label="ผู้อำนวยการโรงพยาบาลชุมชน"
                  />
                  <FormControlLabel
                    value="อื่นๆ"
                    control={<Radio />}
                    label="อื่นๆ"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div className="dataright">
            <h4>หน่วยงานที่มีส่วนร่วม</h4>
            <FormGroup>
              {/* <FormControlLabel disabled={<Checkbox defaultChecked />} label="โรงพยาบาล" /> */}
              <FormControlLabel
                control={<Checkbox                 value="โรงพยาบาล"
                checked={checkAgency.includes("โรงพยาบาล")}
                onChange={handleCheckBoxChange}/>}
                label="โรงพยาบาล"

              />
              <FormControlLabel
                control={<Checkbox value="สสจ." checked={checkAgency.includes("สสจ.")}onChange={handleCheckBoxChange}/>}
                label="สสจ."
              />
              <FormControlLabel
                control={<Checkbox                 value="สสอ."
                checked={checkAgency.includes("สสอ.")}
                onChange={handleCheckBoxChange}/>}
                label="สสอ."

              />
              <FormControlLabel
                control={<Checkbox                 value="สคร."
                checked={checkAgency.includes("สคร.")}
                onChange={handleCheckBoxChange}/>}
                label="สคร."

              />
              <FormControlLabel
                control={<Checkbox                 value="รพ.สต."
                checked={checkAgency.includes("รพ.สต.")}
                onChange={handleCheckBoxChange}/>}
                label="รพ.สต."

              />
              <FormControlLabel
                control={<Checkbox                 value="อบต. /ทต. /ทน."
                checked={checkAgency.includes("อบต. /ทต. /ทน.")}
                onChange={handleCheckBoxChange}/>}
                label="อบต. /ทต. /ทน."

              />
              <FormControlLabel
                control={<Checkbox                 value="อบจ."
                checked={checkAgency.includes("อบจ.")}
                onChange={handleCheckBoxChange}/>}
                label="อบจ."

              />
              <FormControlLabel
                control={<Checkbox                 value="หน่วยงานราชการอื่น เช่น โรงเรียน ทหาร ตำรวจ เป็นต้น"
                checked={checkAgency.includes("หน่วยงานราชการอื่น เช่น โรงเรียน ทหาร ตำรวจ เป็นต้น")}
                onChange={handleCheckBoxChange}/>}
                label="หน่วยงานราชการอื่น เช่น โรงเรียน ทหาร ตำรวจ เป็นต้น"

              />
              <FormControlLabel
                control={<Checkbox                 value="ภาตประชาชน เช่น วัด"
                checked={checkAgency.includes("ภาตประชาชน เช่น วัด")}
                onChange={handleCheckBoxChange}/>}
                label="ภาตประชาชน เช่น วัด"

              />
              <FormControlLabel
                control={<Checkbox                 value="หน่วยงานเอกชน เช่น โรงแรม โรงงาน"
                checked={checkAgency.includes("หน่วยงานเอกชน เช่น โรงแรม โรงงาน")}
                onChange={handleCheckBoxChange}/>}
                label="หน่วยงานเอกชน เช่น โรงแรม โรงงาน"

              />
              <FormControlLabel
                control={<Checkbox                 value="อื่นๆ"
                checked={checkAgency.includes("อื่นๆ")}
                onChange={handleCheckBoxChange}/>}
                label="อื่นๆ"

              />
            </FormGroup>
          </div>
        </div>
        <div className="btncontainer" style={{ height: "20%" }}>
          <button className="btnopenEOC" onClick={handleSubmit}>
            เปิด EOC
          </button>
          <button className="btncancel" onClick={handleCancel}>
            ยกเลิก
          </button>
        </div>
      </Box>
    </Modal>

  )
}