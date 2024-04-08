// src/httpService.js
import axios from 'axios';

const baseUrl = 'https://reqres.in/api';

// Function to perform user authentication
export const authenticateUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

// Function to retrieve user data
export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
    return response.data.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
