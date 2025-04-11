import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);