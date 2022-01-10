import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function SignUp(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
  return promise;
}
function Login(formData) {
  const promise = axios.post(`${BASE_URL}/auth/login`, formData);
  return promise;
}

function GetHabits(auth) {
  const promise = axios.get(`${BASE_URL}/habits`, auth);
  return promise;
}

function GetToday(auth) {
  const promise = axios.get(`${BASE_URL}/habits/today`, auth);
  return promise;
}

function CreateHabit(data, auth) {
  const promise = axios.post(`${BASE_URL}/habits`, data, auth);
  return promise;
}
function DeletedHabit(id, auth) {
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, auth);
  return promise;
}

function MarkHabit(id, done, auth) {
  console.log(id, done, auth);
  if (done === false) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, done, auth);
    return promise;
  } else {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, done, auth);
    return promise;
  }
}

export {
  SignUp,
  Login,
  GetHabits,
  GetToday,
  CreateHabit,
  DeletedHabit,
  MarkHabit,
};
