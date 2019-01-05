import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../components/Profile/Profile';
import Form from '../components/Form/Form';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Example from '../components/PortalNavbar/PortalNavbar';
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
      github_username: '',
      tutorials: [],
      blogs: [],
      radioButton: '',
      // blog_tab: true,
    };

    componentDidMount() {
      connection();
      tutorialRequests.getRequest()
        .then((tutorials) => {
          this.setState({ tutorials });
        })
        .catch(err => console.error('error with tutorias GET', err));
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            authed: true,
          });
        } else {
          this.setState({
            authed: false,
          });
        }
      });
      blogRequests.getBlogRequest()
        .then((blogs) => {
          this.setState({ blogs });
        })
        .catch(err => console.error('error with tutorias GET', err));
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            authed: true,
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
  this.setState({ authed: true, github_username: username });
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
  }

  if (radioButton === 'radio_blogs') {
    blogRequests.postRequest(newMaterial)
      .then(() => {
        blogRequests.getRequest()
          .then((blogs) => {
            this.setState({ blogs }); // after we submit the form lisings will be updatede
          });
      })
      .catch(err => console.error('error with listing post', err));
  }
}

render() {
  const logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false });
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
        <Form radioButton={this.props}
        onSubmit={this.formSubmitEvent}
        handleChange={this.handleChange} />
        <Example
          tutorials={this.state.tutorials}
          deleteSingleTutorial={this.deleteOne}
          clickEvent={this.clickEvent}
          blogs={this.state.blogs}
          deleteSingleBlog={this.deleteOneBlog}
        />
        <div className="row">
        <Profile />
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
  );
}
}

export default App;
