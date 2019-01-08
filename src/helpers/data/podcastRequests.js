import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getPodcastRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/podcasts.json`)
    .then((res) => {
      const podcasts = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          podcasts.push(res.data[key]);
        });
      }
      resolve(podcasts);
    })
    .catch(err => reject(err));
});

const deletePodcasts = podcastId => axios.delete(`${firebaseUrl}/podcasts/${podcastId}.json`);

const postPodcastRequest = podcast => axios.post(`${firebaseUrl}/podcasts.json`, podcast);

export default {
  getPodcastRequest,
  deletePodcasts,
  postPodcastRequest,
};
