import axios from "axios";

const headerConfig = {
    headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
}
//customer
export const addCustomer = (obj) => {
    let response = axios.post('http://localhost:3000/api/v1/customerdetails', obj, headerConfig);
    return response;
}