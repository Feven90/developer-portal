import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { profile, commits } = this.props;
    // console.log(profile);
    return (
      <div className="profile col">
        <div className="card">
          <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img>
         <h2 className="card-title">{profile.login}</h2>
          <p className="card-text">{profile.bio}</p>
          <a href={profile.html_url} className="_blank">{profile.html_url}</a>
          <br/>
          <br/>
          <h2>{commits}</h2>
          <h6>commits</h6>
          <p>in the last 5 days</p>
        </div>
      </div>
    );
  }
}

export default Profile;
