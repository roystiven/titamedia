import axios from 'axios';

export default axios.create({
  baseURL: `https://dummyapi.io/data/v1/`,
  headers: {'app-id':`631259726b6c46ae5701499d`}

});