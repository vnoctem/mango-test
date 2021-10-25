import axios from 'axios';

const API_URL = 'http://localhost:8080';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class LoginService {

    login(user: { id: any; username: string; password: string; }) {
        return axios.post(`${API_URL}/user/login`, user);
    }
}

export default new LoginService();