import axios from 'axios';

const API_URL = 'http://localhost:8080';

class ItemService {

    getItems() {
        return axios.get(`${API_URL}/items`);
    }

    addItem(item: { id: any; title: string; description: string; }) {
        return axios.post(`${API_URL}/items`, item);
    }
}

export default new ItemService();