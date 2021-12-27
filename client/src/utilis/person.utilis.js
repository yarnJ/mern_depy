import axios from "axios";

const server = "http://localhost:5000";

export const getPersonList = async ({person_level}) => {
  const response = {};
  try{
    const res = await axios.get(`${server}/record/`)
    console.log(res.data, "dfsadfs")
    response.data = res.data;
    response.status = res.status;
  } catch (err) {
    response.error = {
      errorMessage : err.response.data,
      status: err.response.status
    }
  }
  console.log("dfsadfs")
  return response;
}