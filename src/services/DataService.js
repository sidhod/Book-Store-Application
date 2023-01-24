import axios from "axios";

const headerConfig = {
    headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
}
export const getAllBooks = () => {
    let response = axios.get('http://localhost:3000/api/v1/books/get', headerConfig);
    return response;
}

//cart
export const addToBag = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/cart/addTocart/${id}`, id, headerConfig);
    return response;
}
//
export const getBookInCart = (id) => {
    let response = axios.get(`http://localhost:3000/api/v1/cart/${id}`, headerConfig, id);
    return response;
}
//increase quantity
export const increaseQuantity = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/cart/increaseQ/${id}`, id, headerConfig);
    return response;
}
//decrease quantity
export const decreaseQuantity = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/cart/decreaseQ/${id}`, id, headerConfig);
    return response;
}
//get allbooks from cart
export const getAllBooksCart = () => {
    let response = axios.get('http://localhost:3000/api/v1/cart/', headerConfig);
    return response;
}

//remove book from cart
export const removeFromBagDirectly = (id) => {
    let response = axios.post(`http://localhost:3000/api/v1/cart/removebook/${id}`, id, headerConfig);
    return response;
}