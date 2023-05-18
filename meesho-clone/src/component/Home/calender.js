import "./calender.css";
export const Calendar = () => {
  return (
    <>
      <div className="calender-container">
        <div className="calender-account">
          <h4 className="heading">My Calendar Account 1/6</h4>
          <button>
            <span className="calender-button-span">+</span> Add Calendar Account
          </button>
        </div>
        <hr></hr>
        <div className="calender-contain">
          <div className="calender-date">
            <div>
              <img
                className="calender-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7So9M0IeawKWRm9eM2ZmCKq-gUOggxY9PA&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <h4 className="heading">Google</h4>
              <p>rohit@samyotech.com</p>
            </div>
          </div>
          <div>
            <img
              className="calender-delete"
              src="https://img.icons8.com/?size=1x&id=14237&format=png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="calender-configrution">
        <div>
          <h4 className="heading1">Configuration</h4>
          <div>
            <hr></hr>
            <div className="calender-box">
              <div className="calender-conflicts">
                <div>
                  <img
                    className="calender-image"
                    src="https://cdn-icons-png.flaticon.com/128/1247/1247000.png"
                  />
                </div>
                <div>
                  <h4 className="heading2">Check for conflicts</h4>
                  <p>
                    Set the calender(s) to check for conflicts to prevent double
                    <br></br>bookings.
                  </p>
                </div>
              </div>
              <div>
                <div className="calender-edit">
                  <div className="calender-check">
                    <div>
                      <img
                        className="circle"
                        src="https://cdn-icons-png.flaticon.com/128/3515/3515278.png"
                      />
                    </div>
                    <div>
                      <h4 className="heading3">Check rohit@samyotech.com</h4>
                      <ul>
                        <li>rohit@samyotech.com</li>
                      </ul>
                    </div>
                  </div>
                  <button className="edit">Edit</button>
                </div>
              </div>
            </div>
            <div className="calender-box">
              <div className="calender-conflicts">
                <div>
                  <img
                    className="calender-image"
                    src="https://cdn-icons-png.flaticon.com/128/1247/1247000.png"
                  />
                </div>
                <div>
                  <h4 className="heading2">Check for conflicts</h4>
                  <p>
                    Set the calender(s) to check for conflicts to prevent double
                    <br></br>bookings.
                  </p>
                </div>
              </div>
              <div>
                <div className="calender-edit">
                  <div className="calender-check">
                    <div>
                      <img
                        className="circle"
                        src="https://cdn-icons-png.flaticon.com/128/3515/3515278.png"
                      />
                    </div>
                    <div>
                      <h4 className="heading3">Check rohit@samyotech.com</h4>
                      <ul>
                        <li>rohit@samyotech.com</li>
                      </ul>
                    </div>
                  </div>
                  <button className="edit">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
