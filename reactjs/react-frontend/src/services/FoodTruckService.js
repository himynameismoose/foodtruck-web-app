import axios from 'axios';

const FOODTRUCK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/foodtrucks';

class FoodTruckService {
    // get all food trucks 
    getAllFoodTrucks() {
        return axios.get(FOODTRUCK_BASE_REST_API_URL);
    }

    // create food truck
    createFoodTruck(foodtruck) {
        return axios.post(FOODTRUCK_BASE_REST_API_URL, foodtruck);
    }
}

export default new FoodTruckService();