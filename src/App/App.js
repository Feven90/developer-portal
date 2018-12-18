import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../components/Profile/Profile';
import Form from '../components/Form/Form';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import tutorialRequests from '../helpers/data/tutorialRequests';

import Tutorials from '../components/Tutorials/Tutorials';

import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
    // eslint-disable-next-line no-undef
    state = {
      authed: false,
      github_username: '',
      tutorials: [],
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
    }

    componentWillUnmount() {
      this.removeListener();
    }

isAuthenticated = (username) => {
  this.setState({ authed: true, github_username: username });
}

deleteOne = (tutorialId) => {
  tutorialRequests.delteTutorial(tutorialId)
    .then(() => {
      tutorialRequests.getRequest()
        .then((tutorials) => {
          this.setState({ tutorials });
        });
    })
    .catch(err => console.error('error with delte single', err));
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
  console.log(this);
  return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <Profile />
        <Form />
        <Tutorials
          tutorials={this.state.tutorials}
          deleteSingleTutorial={this.deleteOne}
        />
      </div>
  );
}
}

export default App;
