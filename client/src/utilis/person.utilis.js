import axios from "axios";

const server = "http://localhost:5000";

export const getPersonList = (person_level) => {
  axios.get(`${server}/record/`)
    .then((response) => {
      return response.data;
    }).catch (function(error) {
      console.log(error.message);
    });
}