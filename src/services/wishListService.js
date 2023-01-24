import axios from "axios";

const headerConfig = {
    headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
}
//cart
export const addToWishList = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/wishlist/addbook/${id}`, id, headerConfig);
    return response;
}

export const getWishlist = () => {
    let response = axios.get(`http://localhost:3000/api/v1/wishlist/`, headerConfig);
    return response;
}
export const removeFromWishList = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/wishlist/removebook/${id}`, id, headerConfig);
    return response;
}
