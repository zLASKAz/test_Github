import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import "./dashboard.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function DashboardProvince() {
  const [item, setItem] = useState("");
  const mockData = {
    title: "สถิติ ระดับจังหวัด",
  };
  const datadata = [
    {
      Name: ["DataProvince", "Data2", "Data3"],
    },
  ];
  const handleClick = (event) => {
    alert("click! khaw gain EOC");
  };
  const handleChange = (event) => {
    setItem(event.target.value);
  };
  const data = [
    { name: "กระบี่", uv: 680, pv: 750, amt: 2400 },
    { name: "กาญจนบุรี", uv: 270, pv: 0, amt: 2400 },
    { name: "กาฬสินธู์", uv: 520, pv: 330, amt: 2400 },
    { name: "กำแพงเพชร", uv: 400, pv: 440, amt: 2400 },
    { name: "ขอนแก่น", uv: 400, pv: 222, amt: 2400 },
    { name: "จันทบุรี", uv: 333, pv: 1000, amt: 2400 },
    { name: "ฉะเชิงเทรา", uv: 400, pv: 444, amt: 2400 },
    { name: "ชลบุรี", uv: 888, pv: 555, amt: 2400 },
    { name: "ชัยนาท", uv: 400, pv: 777, amt: 2400 },
    { name: "ชัยภูมิ", uv: 680, pv: 750, amt: 0 },
    // { name: "สคร. 11", uv: 680, pv: 750, amt: 0 },
    // { name: "สคร. 12", uv: 270, pv: 0, amt: 2400 },
    // { name: "สคร. 13", uv: 520, pv: 330, amt: 2400 },
    // { name: "สคร. 14", uv: 400, pv: 440, amt: 2400 },
    // { name: "สคร. 15", uv: 400, pv: 222, amt: 2400 },
    // { name: "สคร. 16", uv: 333, pv: 1000, amt: 2400 },
    // { name: "สคร. 17", uv: 400, pv: 444, amt: 2400 },
    // { name: "สคร. 18", uv: 888, pv: 555, amt: 2400 },
    // { name: "สคร. 19", uv: 400, pv: 777, amt: 2400 },
  ];
  return (
    <div style={{}}>
      <div className="container-2-Dashboard">
        <div className="box box4">
          <div style={{ padding: "0 40px" }}>
            <h2>{mockData.title}</h2>
            <p style={{ color: "#1150A4" }}>
              | จำนวนจังหวัดที่เข้าเกณฑ์เปิด EOC{" "}
              <span style={{ color: "#CE6D4A" }}>
                | จำนวนจังหวัดที่เปิด EOC
              </span>
            </p>
            <br></br>
            <div style={{ marginLeft: "50px" }}>
              <ResponsiveContainer width="70%" height={1000}>
                <BarChart
                  width={300}
                  height={500}
                  data={data}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Bar dataKey="pv" fill="#1150A4" />
                  <Bar dataKey="uv" fill="#CE6D4A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="box box5">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <FormControl sx={{ m: 3, minWidth: 200 }} size="small">
                <InputLabel id="demo-simple-select-label">ทั้งหมด</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item}
                  label="allItem"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>กระบี่</MenuItem>
                  <MenuItem value={20}>กาญจนบุรี</MenuItem>
                  <MenuItem value={30}>กาฬสินธู์</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ display: "flex", padding: "20px" }}>
              <div
                style={{
                  border: "1px solid #1150A4",
                  width: "150px",
                  height: "100px",
                  marginRight: "20px",
                }}
                className="ColorDashboardEOC-1"
              >
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0",
                        justifyContent: "flex-end",
                        display: "flex",
                      }}
                    >
                      {" "}
                      เข้าเกณฑ์เปิด EOC{" "}
                    </p>
                  </div>
                  <h1
                    style={{
                      marginTop: "0",
                      justifyContent: "flex-end",
                      display: "flex",
                    }}
                  >
                    2
                  </h1>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #CE6D4A",
                  width: "150px",
                  height: "100px",
                }}
                className="ColorDashboardEOC-2"
              >
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0",
                        justifyContent: "flex-end",
                        display: "flex",
                      }}
                    >
                      {" "}
                      เปิด EOC{" "}
                    </p>
                  </div>
                  <h1
                    style={{
                      marginTop: "0",
                      justifyContent: "flex-end",
                      display: "flex",
                    }}
                  >
                    2
                  </h1>
                </div>
              </div>
            </div>
            </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <TableContainer
                    component={Paper}
                    sx={{ width: "95%", margin: "20px auto" }}
                  >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <b>เขต</b>
                          </TableCell>
                          <TableCell align="center">
                            <b>เข้าเกณฑ์เปิด EOC</b>
                          </TableCell>
                          <TableCell align="center">
                            <b>เปิด EOC</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {datadata.map((row) => (
                          <TableRow
                            key={row.Name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Name[0]}
                            </TableCell>
                            <TableCell align="center">
                              <CheckCircleIcon
                                fontSize="small"
                                sx={{ color: "#1150A4" }}
                                onClick={handleClick}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <CheckCircleIcon
                                fontSize="small"
                                sx={{ color: "#B4B4B4" }}
                                onClick={handleClick}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                        {datadata.map((row) => (
                          <TableRow
                            key={row.Name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Name[1]}
                            </TableCell>
                            <TableCell align="center">
                              <CheckCircleIcon
                                fontSize="small"
                                sx={{ color: "#B4B4B4" }}
                                onClick={handleClick}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <CheckCircleIcon
                                fontSize="small"
                                sx={{ color: "#1150A4" }}
                                onClick={handleClick}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
    

        </div>
      </div>
    </div>
  );
}

export default DashboardProvince;
