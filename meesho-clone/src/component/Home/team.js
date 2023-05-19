import "./team.css";
export const Team = () => {
  return (
    <>
      <div className="team-container">
        <div className="team-nav">
          <div className="integration">
            <div className="image-div-integration">
              <img
                className="image-arrrow"
                src="https://cdn.iconscout.com/icon/free/png-256/free-left-arrow-1438247-1216208.png?f=avif&w=128"
              />
            </div>
            <h4 className="h4-tag">Integrations</h4>
          </div>
          <div className="microsoft">
            <div className="microsoft-image-div">
              <img
                className="image-microsoft"
                src="https://t3.ftcdn.net/jpg/04/30/53/32/240_F_430533288_nzO2RrGtS4AXOY4LOJpcLs1P8gK3Flmt.jpg"
              />
            </div>
            <h2 className="h2-tag">
              Microsoft Teams <br></br>
              <p className="span-tag">Conferencing</p>
            </h2>
          </div>
          <div className="plus-tag-calendly">
            <img
              className="image-arrrow-plus"
              src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
            />
          </div>
          <div className="calendly-image-div">
            <img
              className="image-micro-calendly"
              src="https://assets.calendly.com/assets/authentication/media/logo-f885ef95906ef15bb6fb.png"
            />
          </div>
        </div>
        <hr className="hr-tag"></hr>
        <div className="team-point-subcription">
          <div className="team-para">
            <p className="team-para-1">
              Use Calendly’s Microsoft Teams Conferencing integration to
              automatically create Teams video conferencing meetings and insert
              the meeting details into your calendar when an invitee books a
              Calendly event.
            </p>
            <p className="team-para-2">
              Integrate Microsoft Teams with Calendly to add Teams video
              conferencing as a location option for events you schedule with
              Calendly. This way, you don’t have to edit your calendar app’s
              invitations to add the Teams conferencing information (which is a
              lot of manual work and confuses invitees).
            </p>
            <div className="team-microsoft-set-location">
              <div>
                <div className="location-team">Location</div>
                <img className="image-media"src="	https://assets.calendly.com/assets/frontend/media/setup-illustration-7274b422ed6de2743afe.svg" />
              </div>
              <p className="ptag-event">
                Set Microsoft Teams Conferencing as the Location for an Event
                Type to add conferencing information to the calendar invitations
              </p>
            </div>
          </div>
          <div className="team-subscription">
            <div className="div-subscription-team">
              Your current subscription is Teams
            </div>

            <div className="h4-tag-team-need">
              For this integration, you'll also need:
            </div>
            <p className="para-microsoft-365">
              <span className="span-microsoft-365">-</span>A Microsoft 365
              Business account or an Office 365 Education account.
            </p>
            <button className="btn-microteam">Integrate Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
