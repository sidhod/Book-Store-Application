import axios from "axios";
export const loginApi = (loginObj) => {
    let response = axios.post("http://localhost:3000/api/v1/users/login", loginObj)
    return response;
}