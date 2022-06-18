import axios from 'axios';

const baseURL = 'https://bank-api-back.herokuapp.com/admin';

export const getUsers = async () => {
  const response = await axios.get(`${baseURL}/users`);
  const users = response.data;
  return users;
}

export const deleteUser = async (id) => {
  await axios.delete(`${baseURL}/users/${id}`)
}

export const createUser = async (newUser) => {
  await axios.post(`${baseURL}/users`, newUser);
}

export const withdraw = async (withdrawDetail) => {
  const response = await axios.put(`${baseURL}/withdraw`, withdrawDetail);
  const resultWithdraw = response.data;
  return resultWithdraw;
}

export const deposit = async (depositDetail) => {
  const response = await axios.put(`${baseURL}/deposit`, depositDetail);
  const resultDeposit = response.data;
  return resultDeposit;
}

export const transfer = async (transferDetail) => {
  const response = await axios.put(`${baseURL}/transfer`, transferDetail);
  const resultTransfer = response.data;
  return resultTransfer;
}

export const updateCredit = async (creditDetail) => {
  const response = await axios.put(`${baseURL}/credit`, creditDetail)
  const resultCredit = response.data;
  return resultCredit;
}
