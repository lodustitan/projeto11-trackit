import axios from "axios";

const  instance = axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'
});

export default instance;