import axios from "axios";

const server = "http://localhost:5000";

const registerUser = async (param) => {
  const response = {};
  try {
    const res = await axios.post(`${server}/users/add`, param);
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

export const userService = {
  registerUser
}