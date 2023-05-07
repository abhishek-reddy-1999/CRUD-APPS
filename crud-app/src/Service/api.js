import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';


export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}
export const getUsers = async (user) => {
    return await axios.get(`${usersUrl}/all`, user);
}
export const getUser= async (id) => {
    return await axios.get(`${usersUrl}/${id}`);

}
export const updateUser= async (user,id) => {
    return await axios.put(`${usersUrl}/${id}`,user);

}
export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);

}

