import axios from "axios";

const API = "http://localhost:3000/tasks"; // Usando json-server

export const getTasks = () => axios.get(API);
export const getTask = (id) => axios.get(`${API}/${id}`);
export const createTask = (task) => axios.post(API, task);
export const updateTask = (id, task) => axios.put(`${API}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
