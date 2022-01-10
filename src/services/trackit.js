import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
  return promise;
}
function login(formData) {
  const promise = axios.post(`${BASE_URL}/auth/login`, formData);
  return promise;
}

function getHabits(auth) {
  const promise = axios.get(`${BASE_URL}/habits`, auth);
  return promise;
}

function getToday(auth) {
  const promise = axios.get(`${BASE_URL}/habits/today`, auth);
  return promise;
}

function createHabit(data, auth) {
  const promise = axios.post(`${BASE_URL}/habits`, data, auth);
  return promise;
}
function deletedHabit(id, auth) {
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, auth);
  return promise;
}

function markHabit(id, done, auth) {
  if (done === false) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, done, auth);
    return promise;
  } else {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, done, auth);
    return promise;
  }
}

export {
  signUp,
  login,
  getHabits,
  getToday,
  createHabit,
  deletedHabit,
  markHabit,
};
