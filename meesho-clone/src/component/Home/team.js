import "./team.css";
export const Team = () => {
  return (
    <>
      <div>
        <div className="team-nav">
          <div className="integration">
            <img
              className="image-arrrow-plus"
              src="https://cdn.iconscout.com/icon/free/png-256/free-left-arrow-1438247-1216208.png?f=avif&w=128"
            />
            <h4>Integrations</h4>
          </div>
          <div className="microsoft">
            <img
              className="image-micro-calendly"
              src="https://t3.ftcdn.net/jpg/04/30/53/32/240_F_430533288_nzO2RrGtS4AXOY4LOJpcLs1P8gK3Flmt.jpg"
            />
            <h2>
              Microsoft Teams <br></br>
              <span>Conferencing</span>
            </h2>
          </div>
          <div>
            <img
              className="image-arrrow-plus"
              src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
            />
          </div>
          <div>
            <img
              className="image-micro-calendly"
              src="https://assets.calendly.com/assets/authentication/media/logo-f885ef95906ef15bb6fb.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};
