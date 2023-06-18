import { useSelector, useDispatch } from "react-redux";
import { Box, Modal, Button } from "@mui/material";
import { setActStatusInactive ,setActDate,setActDes,setActName} from "../../dataSlice";
import EditActivity from "./editActivity";
import { useState } from "react";
import images from "../../assets/images/img1.png"
function ActivityCard({ open, onClose }) {
  const activityName = useSelector((state) => state.data.activityName);
  const activityDate = useSelector((state) => state.data.activityDate);
  const activityDes = useSelector((state) => state.data.activityDes);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleEditActivity = () => {
    console.log("Enter Edit Activity");
    setModalOpen(true);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Enter Cancel");
    onClose();
  };
  const handleCloseModal = () => {
    console.log("Close Activity Card");
    onClose();
  };
  const handleDelActivity = (event) => {
    event.preventDefault();
    console.log("Cancel Activity");
    dispatch(setActStatusInactive());
    dispatch(setActDate(""));
    dispatch(setActDes(""));
    dispatch(setActName(""));
  };
  return (
    <Modal open={open} onClose={handleCancel} style={{backgroundColor:"#fff",display:"flex",overflowY:"scroll",margin:"40px 0"}}>

      <Box className="BoxStyle">
        <div style={{displaly:"flex",flexDirection:"row",padding:"20px 40px"}}>
          <div>
            <b>activity name :{activityName}</b><br></br>
            <small>กิจกรรมระหว่างเปิด EOC ระดับอำเภอ บางกรวย จังหวัดนนทบุรี</small>
            <hr></hr>
            <p>activity date :{activityDate}</p>
          </div>
          <div style={{width:"100%",margin:"20px 40px"}}>
          <div>
            <b>รายละเอียด</b>
            <div style={{width:"80%"}}>
              <textarea style={{width:"100%",height:"90%"}} disabled value={activityDes}></textarea>
            </div>
          </div>
          <div style={{margin:"20px 0"}}>
            <b>ภาพกิจกรรม</b>
            <div style={{width:"80%",display:"flex",flexWrap:"wrap"}}>
              <img src={images} alt="IMG" style={{width:"200px",height:"150px"}}/>
            </div>
          </div>
          </div>

          <div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}>
        <Button
          style={{
            marginRight: "20px",
            marginTop: "auto",
            borderRadius: "5px",
            backgroundColor: "#BF9F33",
            color: "#fff",
          }}
          onClick={handleEditActivity}
        >
          แก้ไขกิจกรรม
        </Button>
        {modalOpen && (
          <EditActivity open={modalOpen} onClose={handleCloseModal} />
        )}
        <Button
          style={{
            marginTop: "auto",
            borderRadius: "5px",
            backgroundColor: "#BF3333",
            color: "#fff",
          }}
          onClick={handleDelActivity}
        >
          ลบกิจกรรม
        </Button>
        </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ActivityCard;
