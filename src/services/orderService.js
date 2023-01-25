import axios from "axios";

const headerConfig = {
    headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
}

export const getOrderList = () => {
    let response = axios.get(`http://localhost:3000/api/v1/order/`, headerConfig);
    return response;
}
//cart
export const addToOrder = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/order/${id}`, id, headerConfig);
    return response;
}