import RoomIcon from "@mui/icons-material/Room";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PublicIcon from "@mui/icons-material/Public";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
export const Design = () => {
  return (
    <>
      <div
        style={{
          // border: "1px solid red",
          margin: "auto",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: 800,
          height: 400,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div>
          <RoomIcon
            sx={{
              marginLeft: "80px",
              fontSize: "40px",
              color: "#CC4541",
            }}
          />
          <h4
            style={{
              marginTop: "45px",
              fontWeight: "bold",
              fontSize: "15px",
              marginLeft: "70px",
            }}
          >
            Confirmed
          </h4>
          <p style={{ fontSize: "12px" }}>
            You are scheduled with Rohit Kumar Mishra.
          </p>
        </div>
        <hr style={{ width: "40%" }}></hr>
        <div
          style={{
            marginBottom: "70px",
            height: "100px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              fontSize: "10px",
              marginRight: "40px",
              marginTop: "0%",
              marginBottom: "75px",
              height: "100%",
              width: "90%",
            }}
          >
            <li style={{ fontWeight: "bold", fontSize: "15px" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#8247F6",
                  marginRight: "7px",
                }}
              ></span>
              demo
            </li>
            <li>
              <span>
                <CalendarTodayOutlinedIcon
                  sx={{ fontSize: "15px", marginRight: "7px" }}
                />
              </span>
              12:00am -12:30am ,Thursday,May 18 2023
            </li>
            <li>
              <span>
                <PublicIcon sx={{ fontSize: "15px", marginRight: "7px" }} />
              </span>
              India Standard Time
            </li>
            <li>
              <span>
                <VideocamOutlinedIcon
                  sx={{ fontSize: "15px", marginRight: "7px" }}
                />
              </span>
              Web conferencing details to follow
            </li>
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "10px",
                lineHeight: "30px",
                marginLeft: "5px",
              }}
            >
              A calender invitation has been sent to your email address
            </h6>
          </ul>
        </div>
      </div>
    </>
  );
};
