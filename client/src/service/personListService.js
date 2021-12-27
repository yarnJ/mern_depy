import axios from 'axios';

const server = "http://localhost:5000";

const createPersonList = async (params) => {
  const response = {}
  try {
    const res = await axios.post(`${server}/record/add`, params);
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

const editPersonList = async (params) => {
  const response = {}
  try {
    const res = await axios.post(`${server}/update/` + params.level_id, params.editPerson);
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
};

const getPersonListById = async (params) => {
  const response = {};
  try {
    const res = await axios.get(`${server}/record/` + params);
    response.data = res.data;
    response.status = res.status;
  } catch(err) {
    response.err = {
      errorMessage: err.response?.data,
      status: err.response?.status
    }
  }
  return response;
};

export const PersonListService = {
  getPersonListAll,
  getPersonListById,
  createPersonList,
  editPersonList
}