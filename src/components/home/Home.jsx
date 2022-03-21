import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePictureURL: "%PUBLIC_URL%/assets/images/profile_picture.png",
      contactEmail: "chankyo@stanford.edu",
      contactGitHub: "github.com/kimchankyo",
      githubURL: "https://github.com/kimchankyo",
      mailToLink: "mailto:chankyo@stanford.edu"
    };
  }

  render() {
    return (
      <div className="home-page">
        <div className="home-photo-contact">
          <div className="home-photo-container">
            <img className="home-photo" src={this.state.profilePictureURL} alt="profile_picture.png"/>
          </div>
          <div className="home-contact-container">
            <div className="home-contact-title">
              &gt; Contact Information
            </div>
            <div className="home-contact">
              <div className="home-contact-entry">
                Email: <a className="home-contact-link" href={this.state.mailToLink}>{this.state.contactEmail}</a>
              </div>
              <div className="home-contact-entry">
                GitHub: <a className="home-contact-link" href={this.state.githubURL}>{this.state.contactGitHub}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;