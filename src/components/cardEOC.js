import { useSelector} from "react-redux";
import {useState} from 'react';
import Activity from "./manageActivityEOC/addActivity";
import Card from '@mui/material/Card';
import ActivityCard from "./manageActivityEOC/activityActiveCard";
import Button from '@mui/material/Button';
import "../css/dataAddEOC.css";
import CloseEOC from "./manageEOC/closeEOC";
import CancelEOC from "./manageEOC/cancelEOC"
import EditEOC from "./manageEOC/editEOC"
function DataAdd() {
  const activityStatus = useSelector((state) => state.data.activityStatus);
  const date = useSelector((state) => state.data.date)
  const status = useSelector((state) => state.data.status)
  const checkBoxs = useSelector((state) => state.data.checkBoxs)
  const staff = useSelector((state) => state.data.staff)
  const radioValue = useSelector((state) => state.data.radioValue)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenCloseEOC, setmodalOpenCloseEOC] = useState(false);
  const [modalOpenEditEOC, setmodalOpenEditEOC] = useState(false);
  const [modalOpenCancelEOC, setmodalOpenCancelEOC] = useState(false);

  const handleOpenModal = () => {
    console.log("Open Input Activity Screen")
    setModalOpen(true);
  };
  const handleCloseModal= () => {
    console.log("Close Input Activity Screen")
    setModalOpen(false);
  };
  const handleOpenModal1 = () => {
    console.log("Open Input Activity Screen")
    setmodalOpenCloseEOC(true);
  };
  const handleCloseModal1 = () => {
    console.log("Close Input Activity Screen")
    setmodalOpenCloseEOC(false);
  };

  const handleOpenModal2 = () => {
    console.log("Open Input Activity Screen")
    setmodalOpenEditEOC(true);
  };
  const handleCloseModal2 = () => {
    console.log("Close Input Activity Screen")
    setmodalOpenEditEOC(false);
  };

  const handleOpenModal3 = () => {
    console.log("Open Input Activity Screen")
    setmodalOpenCancelEOC(true);
  };
  const handleCloseModal3 = () => {
    console.log("Close Input Activity Screen")
    setmodalOpenCancelEOC(false);
  };

  return (

    <div className="container">
      <Card sx={{ minWidth: 275}}>

          <div className="cardcontent">
            <div className="navbar">
              <div className="status">{status} : อยู่ระหว่างเปิด EOC</div>
              <div>
              <Button  onClick={handleOpenModal1}style={{backgroundColor:"#4AA12C",color:"#fff",borderRadius:"10px"}}>ปิด EOC</Button>
              {modalOpenCloseEOC && (
      <CloseEOC open={modalOpenCloseEOC} onClose={handleCloseModal1} />
    )}
              <Button  onClick={handleOpenModal2}style={{backgroundColor:"#BF9F33",color:"#fff",marginLeft:"1rem",borderRadius:"10px"}}className="btnEditEOC">แก้ไข</Button>
              {modalOpenEditEOC && (
      <EditEOC open={modalOpenEditEOC} onClose={handleCloseModal2} />
    )}
              <Button  onClick={handleOpenModal3}style={{backgroundColor:"#2C3F64",color:"#fff",marginLeft:"1rem",borderRadius:"10px"}}className="btnCancel">ยกเลิก</Button>
              {modalOpenCancelEOC && (
      <CancelEOC open={modalOpenCancelEOC} onClose={handleCloseModal3} />
    )}
              </div>
            </div>
            <div className="content-header">
              <p>EOC ระดับอำเภอ บางกรวย จังหวัดนนทบุรี</p>
              <p>วันที่เปิด EOC</p>
              <p>{date}</p>
              <div className="content-layout">
                <div className="leader-agency">
                  <div>
                    <h3>ผู้บังคับบัญชาเหตุการณ์</h3>
                    <div style={{padding:"0px 0px 0px 25px"}}>{radioValue}</div>
                    <h3>หน่วยงานที่มีส่วนร่วม</h3>
                    <div>
                      <ul>
                        {checkBoxs.map(checked => (
                          <li key={checked}>
                            {checked}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="staff-info">
                  <h3>เจ้าหน้าที่เปิด EOC</h3>
                  <div>
                    <ul>
                      <li>ชื่อ : {staff[0]}</li>
                      <li>ตำแหน่ง : {staff[1]}</li>
                      <li>โทรศัพท์ : {staff[2]}</li>
                      <li>อีเมล : {staff[3]}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <p>บันทึกกิจกรรม</p>
                <Button style={{display:"flex",
    flexDirection: "row",
    border: "1px solid #000",
    borderRadius: "10px",
    color: "#000",
    marginBottom: "20px",}}
                onClick={handleOpenModal}>เพิ่มกิจกรรม</Button>
                {modalOpen && (
      <Activity open={modalOpen} onClose={handleCloseModal} />
    )}
              </div>
              {activityStatus === "active" && (
        <div>
          <ActivityCard/>
        </div>
      )}
            </div>
          </div>

      </Card>
    </div>
  );
}

export default DataAdd;
