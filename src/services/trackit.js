import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function GetHabits() {
  const promise = axios.get(`${BASE_URL}/habits`);
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

export { GetHabits, GetToday, CreateHabit };
