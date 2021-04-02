import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e6114-default-rtdb.firebaseio.com/'
});

export default instance;