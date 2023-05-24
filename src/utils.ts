import axios from 'axios';
import { Users } from './Types/userTypes';

const paginate = (data: Users[], userInput: number) => {
  let itemsPerPage = userInput;
  if (itemsPerPage > data.length - 1) {
    itemsPerPage = data.length - 1;
  }
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newUsers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newUsers;
};

export default paginate;

export const customFetch = axios.create({
  baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const fetchUsersFromLocalStorage = () => {
  const users = localStorage.getItem('Users');
  const result = users ? JSON.parse(users) : [];
  return result;
};

export const fetchSingleUserFromLocalStorage = () => {
  const user = localStorage.getItem('User');
  const result = user ? JSON.parse(user) : {};
  return result;
};