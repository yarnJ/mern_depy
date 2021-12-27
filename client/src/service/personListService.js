import axios from 'axios';

const server = "http://localhost:5000";

const getPersonListAll = async () => {
  const response = {};
  try {
    const res = await axios.get(`${server}/record/`);
    response.data = res.data;
    response.status = res.status;
  } catch(err) {
    response.err = {
      errorMessage: err.response?.data,
      status: err.response?.status
    }
  }
  return response;
}

export const PersonListService = {
  getPersonListAll
}