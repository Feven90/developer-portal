import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/tutorials.json`)
    .then((res) => {
      const tutorials = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          tutorials.push(res.data[key]);
        });
      }
      console.log(tutorials);
      resolve(tutorials);
    })
    .catch(err => reject(err));
});

const delteTutorials = tutorialId => axios.delete(`${firebaseUrl}/tutorials/${tutorialId}.json`);

const postRequest = tutorial => axios.post(`${firebaseUrl}/tutorials.json`, tutorial);

export default {
  getRequest,
  delteTutorials,
  postRequest,
};
