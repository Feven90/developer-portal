import React from 'react';
// import './profile.scss';

class Profile extends React.Component {
  render() {
    const {
      profile,
      commitCount,
      isAuthed,
    } = this.props;

    if (isAuthed) {
      return (
      <div className="profile col">
        <div className="profileWrap">
        <h2>Profile</h2>
        <div className="card">
          <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img>
          <p className="card-text">{profile.bio}</p>
          <h2 className="card-title">{profile.login}</h2>
          <a href={profile.html_url} className="_blank">https://github.com/{profile.login}</a>
          <br/>
          <br/>
          <h6>COMMITS</h6>
          <p>in the last 5 days</p>
           <h4>{commitCount}</h4>
        </div>
        </div>
      </div>
      );
    }
  }
}

export default Profile;

// class hello extends React.Component {
//   render() {
//     const { profile, commits } = this.props;
//     // console.log(profile);
//     return (
//       <div className="profile col">
//         <div className="card">
//           <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img> */}
//          <h2 className="card-title">{profile.login}</h2>
//           <p className="card-text">{profile.bio}</p>
//           <a href={profile.html_url} className="_blank">{profile.html_url}</a>
//           <br/>
//           <br/>
//           <h2>{commits}</h2>
//           <h6>commits</h6>
//           <p>in the last 5 days</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default hello;
