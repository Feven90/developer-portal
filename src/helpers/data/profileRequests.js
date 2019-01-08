import axios from 'axios';
import apiKeys from '../apiKeys';

const clientId = apiKeys.githubApi.client_id;
const clientSecret = apiKeys.githubApi.client_secret;

const getProfileRequest = githubUsername => new Promise((resolve, reject) => {
  axios
    .get(`https://api.github.com/users/${githubUsername}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(err => reject(err));
});

const getUserCommit = githubUsername => new Promise((resolve, reject) => {
  axios
    .get(`https://api.github.com/users/${githubUsername}/events/public`)
    .then((result) => {
      let totalCommits = 0;
      const pushEvents = result.data.filter(event => event.type === 'PushEvent');
      // pushEvents = pushEvents.slice(0, 5);
      // console.log(pushEvents);
      pushEvents.forEach((pushEvent) => {
        totalCommits += pushEvent.payload.commits.length;
      });
      console.log(totalCommits);

      resolve(totalCommits);
    })
    .catch(err => reject(err));
});

export default {
  getProfileRequest,
  getUserCommit,
};
