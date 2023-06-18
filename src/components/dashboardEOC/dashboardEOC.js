import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./dashboard.css";
import DashboardZone from "./dashboardZone";
import DashboardProvince from "./dashboardProvince";
import { useState } from "react";
import DashboardDistrict from "./dashboardDistrict";
function Dashboard() {
  const data = [
    {
      name: "1",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 680,
      จำนวนจังหวัดที่เปิดEOC: 750,
      amt: 0,
    },
    {
      name: "2",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 270,
      จำนวนจังหวัดที่เปิดEOC: 0,
      amt: 2400,
    },
    {
      name: "3",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 520,
      จำนวนจังหวัดที่เปิดEOC: 330,
      amt: 2400,
    },
    {
      name: "4",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
      จำนวนจังหวัดที่เปิดEOC: 440,
      amt: 2400,
    },
    {
      name: "5",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
      จำนวนจังหวัดที่เปิดEOC: 222,
      amt: 2400,
    },
    {
      name: "6",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 333,
      จำนวนจังหวัดที่เปิดEOC: 1000,
      amt: 2400,
    },
    {
      name: "7",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
      จำนวนจังหวัดที่เปิดEOC: 444,
      amt: 2400,
    },
    {
      name: "8",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 888,
      จำนวนจังหวัดที่เปิดEOC: 555,
      amt: 2400,
    },
    {
      name: "9",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
      จำนวนจังหวัดที่เปิดEOC: 777,
      amt: 2400,
    },
    {
      name: "10",
      จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 680,
      จำนวนจังหวัดที่เปิดEOC: 750,
      amt: 0,
    },
    // {
    //   name: "11",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 680,
    //   จำนวนจังหวัดที่เปิดEOC: 750,
    //   amt: 0,
    // },
    // {
    //   name: "12",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 270,
    //   จำนวนจังหวัดที่เปิดEOC: 0,
    //   amt: 2400,
    // },
    // {
    //   name: "13",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 520,
    //   จำนวนจังหวัดที่เปิดEOC: 330,
    //   amt: 2400,
    // },
    // {
    //   name: "14",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
    //   จำนวนจังหวัดที่เปิดEOC: 440,
    //   amt: 2400,
    // },
    // {
    //   name: "15",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
    //   จำนวนจังหวัดที่เปิดEOC: 222,
    //   amt: 2400,
    // },
    // {
    //   name: "16",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 333,
    //   จำนวนจังหวัดที่เปิดEOC: 1000,
    //   amt: 2400,
    // },
    // {
    //   name: "17",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
    //   จำนวนจังหวัดที่เปิดEOC: 444,
    //   amt: 2400,
    // },
    // {
    //   name: "18",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 888,
    //   จำนวนจังหวัดที่เปิดEOC: 555,
    //   amt: 2400,
    // },
    // {
    //   name: "19",
    //   จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC: 400,
    //   จำนวนจังหวัดที่เปิดEOC: 777,
    //   amt: 2400,
    // },
  ];
  
  const [activeZone,setActiveZone] = useState("active");
  const [activeProvince,setActiveProvince] = useState("inactive");
  const [activeDistrict,setActiveDistrict] = useState("inactive");
  console.log("Zone: " + activeZone)
  console.log("Province: " + activeProvince)
  console.log("District: " + activeDistrict)
  console.log("---------------")
  const onclickZone = () => {
    console.log("Click! Zone")
    setActiveZone("active");
    setActiveProvince("inactive");
    setActiveDistrict("inactive");

  }
  const onclickProvince = () => {
    console.log("Click! Province")
    setActiveZone("inactive");
    setActiveProvince("active");
    setActiveDistrict("inactive");

  }
  const onclickDistrict = () => {
    console.log("Click! District")
    setActiveZone("inactive");
    setActiveProvince("inactive");
    setActiveDistrict("active");

  }
  
  return (
    <div style={{width: "95%", margin: "auto" ,backgroundColor:"#F9F9F9"}}>
      <div id="content-container-1">
        {/* //------------------------------------------box 1------------------------------------------// */}
        <div className="box1" onClick={onclickZone}>
          <h2 style={{ margin: "20px 0 0 0" }}>เขต</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px",
            }}
          >
            <div>
              <p style={{ margin: "0"}} className="ColorDashboardEOC-1"> เข้าเกณฑ์ที่เปิด EOC </p>
              <h1
                style={{
                  marginTop: "0",
                  justifyContent: "flex-end",
                  display: "flex",
                
                }}
                className="ColorDashboardEOC-1"
              >
                2
              </h1>
            </div>
            <div>
              <p style={{ margin: "0"}} className="ColorDashboardEOC-2"> เปิด EOC </p>
              <h1
                style={{
                  marginTop: "0",
                  justifyContent: "flex-end",
                  display: "flex",

                }}
                className="ColorDashboardEOC-2"
              >
                2
              </h1>
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "black",
              justifyContent: "center",
              display: "flex",
              margin: "0",
            }}
          >
            <ResponsiveContainer width="95%" height={100}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC" fill="#1150A4" />
                <Bar dataKey="จำนวนจังหวัดที่เปิดEOC" fill="#CE6D4A" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h3 style={{ textAlign: "center", margin: "0px" }}>สัปดาห์</h3>
        </div>

        {/* //------------------------------------------box 2------------------------------------------// */}
        <div className="box2" onClick={onclickProvince}>
          <h2 style={{ margin: "20px 0 0 0" }} >จังหวัด</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px",
            }}
            className="ColorDashboardEOC-1"
          >
            <div>
              <p style={{ margin: "0" ,color:"#1150A4"}}> เข้าเกณฑ์ที่เปิด EOC </p>
              <h1
                style={{
                  marginTop: "0",
                  justifyContent: "flex-end",
                  display: "flex",
                  color: "#1150A4",
                }}
              >
                2
              </h1>
            </div>
            <div>
              <p style={{ margin: "0" }} className="ColorDashboardEOC-2"> เปิด EOC </p>
              <h1
                style={{
                  marginTop: "0",
                  justifyContent: "flex-end",
                  display: "flex",
           
                }}
                className="ColorDashboardEOC-2"
              >
                2
              </h1>
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "black",
              justifyContent: "center",
              display: "flex",
              margin: "0",
            }}
          >
            <ResponsiveContainer width="95%" height={100}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC" fill="#1150A4" />
                <Bar dataKey="จำนวนจังหวัดที่เปิดEOC" fill="#CE6D4A" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h3 style={{ textAlign: "center", margin: "0px" }}>สัปดาห์</h3>
        </div>

        {/* //------------------------------------------box 3------------------------------------------// */}
        <div className="box3" onClick={onclickDistrict}>
          <h2 style={{ margin: "20px 0 0 0" }}>อำเภอ</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px",
              
            }}
            className="ColorDashboardEOC-2"
          >
            <div>
              <p style={{ margin: "0"}}                 className="ColorDashboardEOC-1"> เข้าเกณฑ์ที่เปิด EOC </p>
              <h1
                style={{
                  marginTop: "0",
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              className="ColorDashboardEOC-1"
              >
                2
              </h1>
            </div>
            <div>
              <p style={{ margin: "0" }} className="ColorDashboardEOC-2"> เปิด EOC </p>
              <h1
                style={{
                  marginTop: "0",
                  justifyContent: "flex-end",
                  display: "flex",
                }}
                className="ColorDashboardEOC-2"
              >
                2
              </h1>
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "black",
              justifyContent: "center",
              display: "flex",
              margin: "0",
            }}
          >
            <ResponsiveContainer width="95%" height={100}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="จำนวนจังหวัดที่เข้าเกณฑ์เปิดEOC" fill="#1150A4" />
                <Bar dataKey="จำนวนจังหวัดที่เปิดEOC" fill="#CE6D4A" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h3 style={{ textAlign: "center", margin: "0px" }}>สัปดาห์</h3>
        </div>
      </div>

      {/* //------------------------------------------box 4-5------------------------------------------// */}
      <div>
        
        
        {activeZone === "active" && (
        <DashboardZone />
      )}
        {activeProvince === "active" && (
        <DashboardProvince />
      )}
        {activeDistrict === "active" && (
        <DashboardDistrict />
      )}
      </div>
    </div>
  );
}
export default Dashboard;
