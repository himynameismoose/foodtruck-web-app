import axios from 'axios';

const FOODTRUCK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/foodtrucks';

class FoodTruckService {
    getAllFoodTrucks() {
        return axios.get(FOODTRUCK_BASE_REST_API_URL);
    }
}

export default new FoodTruckService();