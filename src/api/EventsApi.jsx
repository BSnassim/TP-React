import axios from "axios";

const API_URL = "http://localhost:3001/events";

const getEvents = async (id) => {
  try {
    const response = await axios.get(API_URL + (id ? `/${id}` : ""));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createEvent = async (event) => {
  try {
    const response = await axios.post(API_URL, event);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const editEvent = async (id, event) => {
  return await axios.put(`${API_URL}/${id}`, event);
};

const deleteEvent = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export default { getEvents, createEvent, editEvent, deleteEvent };
