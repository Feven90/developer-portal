import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../components/Profile/Profile';
import profileRequest from '../helpers/data/profileRequests';
import podcastRequests from '../helpers/data/podcastRequests';
import Form from '../components/Form/Form';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import TabsComponent from '../components/PortalNavbar/PortalNavbar';
import tutorialRequests from '../helpers/data/tutorialRequests';
import blogRequests from '../helpers/data/blogRequest';

// import Buttons from '../components/Buttons/Buttons';
// import Tutorials from '../components/Tutorials/Tutorials';
// import TutorialButton from '../components/Buttons/TutorialButton';
// import Blogs from '../components/Blogs/Blogs';

import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
    state = {
      authed: false,
      // github_username: '',
      tutorials: [],
      blogs: [],
      podcasts: [],
      radioButton: '',
      githubUsername: '',
      commits: '',
      // blog_tab: true,
    };

    componentDidMount() {
      connection();
      if (this.state.githubUsername && this.state.profile.length === 0) {
        profileRequest.getProfileRequest(this.state.githubUsername)
          .then((profile) => {
            this.setState({ profile });
          })
          .catch(err => console.error(err));
      }
      if (this.state.githubUsername && this.state.profile.length === 0) {
        profileRequest.getUserCommit(this.state.githubUsername)
          .then((commits) => {
            this.setState({ commits });
          })
          .catch(err => console.error(err));
      }

      tutorialRequests.getRequest()
        .then((tutorials) => {
          this.setState({ tutorials });
        })
        .catch(err => console.error('error with tutorias GET', err));
      podcastRequests.getPodcastRequest()
        .then((podcasts) => {
          this.setState({ podcasts });
        })
        .catch(err => console.error('error with tutorias GET', err));
      // this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     this.setState({
      //       authed: true,
      //     });
      //   } else {
      //     this.setState({
      //       authed: false,
      //     });
      //   }
      // });
      blogRequests.getBlogRequest()
        .then((blogs) => {
          this.setState({ blogs });
        })
        .catch(err => console.error('error with tutorias GET', err));
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const users = sessionStorage.getItem('githubUsername');
          this.setState({
            authed: true,
            githubUsername: users,
          });
        } else {
          this.setState({
            authed: false,
          });
        }
      });
    }

    componentWillUnmount() {
      this.removeListener();
    }


isAuthenticated = (username) => {
  this.setState({ authed: true, githubUsername: username });
  sessionStorage.setItem('githubUsername', username);
}

deleteOne = (tutorialId) => {
  tutorialRequests.delteTutorials(tutorialId)
    .then(() => {
      tutorialRequests.getRequest()
        .then((tutorials) => {
          this.setState({ tutorials });
        });
    })
    .catch(err => console.error('error with delte single', err));
}

deleteOneBlog = (blogId) => {
  blogRequests.deleteBlogs(blogId)
    .then(() => {
      blogRequests.getBlogRequest()
        .then((blogs) => {
          this.setState({ blogs });
        });
    })
    .catch(err => console.error('error with delte single', err));
}

deleteOnepodcast = (podcastId) => {
  podcastRequests.deletePodcasts(podcastId)
    .then(() => {
      podcastRequests.getPodcastRequest()
        .then((podcasts) => {
          this.setState({ podcasts });
        });
    })
    .catch(err => console.error('error with delte single', err));
}

// clickEvent = () => {
//   this.setState({
//     button: !this.state.button,
//   });
// };

// clickBlog = () => {
//   this.setState({
//     blog_tab: !this.state.button,
//   });
// };
handleChange = (event) => {
  this.setState({
    radioButton: event.target.value,
  });
}

formSubmitEvent = (newMaterial) => {
  const { radioButton } = this.state;
  if (radioButton === 'radio_tutorials') {
    tutorialRequests.postRequest(newMaterial)
      .then(() => {
        tutorialRequests.getRequest()
          .then((tutorials) => {
            this.setState({ tutorials }); // after we submit the form lisings will be updatede
          });
      })
      .catch(err => console.error('error with listing post', err));
  } else if (radioButton === 'radio_blogs') {
    blogRequests.postRequest(newMaterial)
      .then(() => {
        blogRequests.getRequest()
          .then((blogs) => {
            this.setState({ blogs }); // after we submit the form lisings will be updatede
          });
      })
      .catch(err => console.error('error with listing post', err));
  } else if (radioButton === 'radio_podcasts') {
    podcastRequests.postPodcastRequest(newMaterial)
      .then(() => {
        podcastRequests.getPodcastRequest()
          .then((podcasts) => {
            this.setState({ podcasts }); // after we submit the form lisings will be updatede
          });
      })
      .catch(err => console.error('error with listing post', err));
  }
}

render() {
  const logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false, githubUsername: '' });
  };
  if (!this.state.authed) {
    return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
    );
  }

  // //passing reference not calling it
  return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        {/* <Form onSubmit={this.formSubmitEvent} */}
          {/* // onClick={this.radioButton} */}
        {/* /> */}
        <div className="all">
        <div className="col-3 profile">
          <Profile
          profile={this.state.profile}
          commits={this.state.commits}
          />
        </div>
        <div className="wrap">
        <Form radioButton={this.state.radioButton}
        onSubmit={this.formSubmitEvent}
        handleChange={this.handleChange} />
        <TabsComponent
          tutorials={this.state.tutorials}
          deleteSingleTutorial={this.deleteOne}
          // clickEvent={this.clickEvent}
          blogs={this.state.blogs}
          deleteSingleBlog={this.deleteOneBlog}
          podcasts={this.state.podcasts}
          deleteSinglePodcast={this.deleteOnepodcast}
        />
        <div className="row">
        </div>
        <div>
          {/* <button onClick={this.clickEvent}>Tutorial</button>
        {!this.state.button && <Tutorials
          tutorials={this.state.tutorials}
          deleteSingleTutorial={this.deleteOne}
        />} */}
        {/* <Buttons /> */}
        {/* <Tutorials
          tutorials={this.state.tutorials}
          deleteSingleTutorial={this.deleteOne}
        /> */}
        {/* <TutorialButton clickTutorial={this.clickEvent}/> */}
        {/* <button onClick={this.clickBlog}>Blogs</button> */}
        {/* {!this.state.blog_tab && <Blogs
          blogs={this.state.blogs}
          deleteSingleBlog={this.deleteOneBlog}
        />} */}
      </div>
      </div>
      </div>
      </div>
  );
}
}

export default App;
