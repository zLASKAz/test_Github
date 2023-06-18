import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import ActivityContent from "./activityContent";
import {useState} from 'react';

function ActivityCard() {
    const [modalOpen, setModalOpen] = useState(false);
    const activityName = useSelector((state) => state.data.activityName);
    const activityDate = useSelector((state) => state.data.activityDate);
    const activityDes = useSelector((state) => state.data.activityDes);
    const handleOpenModal = () => {
      console.log("Open Activity Content Screen")
      setModalOpen(true);
    };
    const handleCloseModal= () => {
      console.log("Close Activity Content Screen")
      setModalOpen(false);
    };
    const date = useSelector((state) => state.data.date)
    return(
        <div style={{border:"1px solid #000",padding:"20px",backgroundColor:"#F1F1F1",borderRadius:"10px",marginBottom:"20px"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div>{activityDate}</div>
                <div>{activityName}</div>
                <div>
                    <Button onClick={handleOpenModal} variant="outlined" style={{borderRadius:"10px"}}>รายละเอียด</Button></div>
                    {modalOpen && (
        <ActivityContent open={modalOpen} onClose={handleCloseModal} />
      )}
            </div>
        </div>
    );
}
export default ActivityCard;