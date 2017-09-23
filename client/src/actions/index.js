import {API_BASE_URL} from '../config';



axios.get(API_BASE_URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });