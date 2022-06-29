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

    // get food truck by id
    getFoodTruckById(foodtruckID) {
        return axios.get(FOODTRUCK_BASE_REST_API_URL + '/' + foodtruckID);
    }

    // update food truck
    updateFoodTruck(foodtruckID, foodtruck) {
        return axios.put(FOODTRUCK_BASE_REST_API_URL + '/' + foodtruckID, foodtruck);
    }
}

export default new FoodTruckService();