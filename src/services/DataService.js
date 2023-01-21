import axios from "axios";

const headerConfig = {
    headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
}
export const getAllBooks = () => {
    let response = axios.get('http://localhost:3000/api/v1/books/get', headerConfig);
    return response;
}