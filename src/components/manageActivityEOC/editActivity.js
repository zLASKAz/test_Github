import { Box, Modal ,Button} from "@mui/material";
import "../../css/createEOC.css"
import moment from "moment";
import { useSelector ,useDispatch} from "react-redux";
import {useState , useEffect} from "react";
import {setActStatusActive, setActStatusInactive,setActDate,setActName,setActDes} from "../../dataSlice";
function EditActivity({ open, onClose }) {
  const dispatch = useDispatch();
  const activityStatus = useSelector((state) => state.data.activityStatus);
  const [image,setImage] = useState();

  const handleImgae = (e) =>  {
    console.log(e.target.files);
    console.log("handle image")
    setImage(URL.createObjectURL(e.target.files[0]));
}
  useEffect(() => {
    console.log('Status:', activityStatus);
  }, [activityStatus]);

  const actNameHandle = (event) => {
    console.log("Handle name act")
    dispatch(setActName(event.target.value));
  }
  const actDateHandle = (event) => {
    console.log("Handle date act")
    const selectedDate = new Date(event.target.value);
    const date = moment(selectedDate.toISOString()).format('DD MMM, YYYY');
    console.log(date);
    dispatch(setActDate(date));
  }

  const actDesHandle = (event) => {
    console.log("Handle des act")
    dispatch(setActDes(event.target.value));
  }
  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Enter Cancel Add Activity");
    onClose();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enter Submit Activity")
    dispatch(setActStatusActive());
    onClose();
  }

  return (
    <Modal open={open} onClose={handleCancel} style={{display:"flex",overflowY:"scroll",marginTop:"20px",marginBottom:"20px"}}>
      <Box className="BoxStyle">
        <div>
          <div style={{padding:"20px",width:"90%",margin:"auto",display:"flex",flexDirection:"column"}}>
          {/* <div style={{padding:"20px",width:"100%",height:"100%",backgroundColor:"blue"}}> */}
            <b>เพิ่มกิจกรรม</b>
            <small>กิจกรรมระหว่างเปิด EOC {activityStatus}</small>
            <hr></hr>
            <div className="activityContentContainer">
              <div className="activityTitle">
                <p>ชื่อกิจกรรม</p>
              </div>
              <div className="activityInput">
                <input style={{width:"100%",height:"90%"}} onChange={actNameHandle}></input>
              </div>
      
            
              <div className="activityTitle">
                <p>วันที่</p>
              </div>
              <div className="activityInput">
                <input type="date" style={{width:"30%",height:"90%"}} onChange={actDateHandle} ></input>
              </div>
          
            
              <div className="activityTitle">
                <p>รายละเอียด</p>
              </div>
              <div className="activityInput" style={{height:"150px"}}>
                <input style={{width:"100%",height:"90%"}} onChange={actDesHandle}></input>
              </div>
         
            
              <div className="activityTitle">
                <p style={{marginTop:"30px"}}>
                  ภาพกิจกรรม</p>
              </div>
              <div className="activityInput" style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"150px",textAlign:"center"}}>
                <label style={{padding:"5px",backgroundColor:"#fff",color:"#000",borderRadius:"10px",border:"1px solid #000"}}><input type="file" onChange={handleImgae} />
                เพิ่มภาพกิจกรรม
                </label>
              </div>
              </div>
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
              <div style={{display:"flex",gap:"30px"}}>
                <div style={{display:"flex",width:"10%"}}></div>
              <img src={image} alt="" style={{width:"15%",height:"85%"}} />
            </div>
            <div style={{justifyContent:"flex-end" ,display:"flex"}}>
                <Button style={{backgroundColor:"#4AA12C",color:"#fff"  ,marginTop:"auto",padding:"10px",marginRight:"2rem"}} onClick={handleSubmit}>บันทึกกิจกรรม</Button>
                <Button style={{backgroundColor:"#2C3F64",color:"#fff" ,padding:"10px"}} onClick={handleCancel}>ยกเลิก</Button>
            </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
export default EditActivity;
