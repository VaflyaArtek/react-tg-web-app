import axios from 'axios';

export const fetchCoins = async () => {
    try {
        const response = await axios.get('http://localhost:3001/users/544362566/coins');
        return response.data.coins;
    } catch (error) {
        console.error('Error fetching coins:', error);
        throw error;
    }
};