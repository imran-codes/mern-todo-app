import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-backend-mern-imran-codes.herokuapp.com",
});

export default instance;
