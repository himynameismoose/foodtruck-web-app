import axios from 'axios'

// URL from Spring Boot application
const FOODTRUCK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/foodtrucks';

class FoodTruckService {
    // Method to get all food trucks
    getAllFoodTrucks() {
        return axios.get(FOODTRUCK_BASE_REST_API_URL)
    }
}

export default new FoodTruckService();