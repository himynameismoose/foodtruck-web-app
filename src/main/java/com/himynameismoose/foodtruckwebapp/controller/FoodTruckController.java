package com.himynameismoose.foodtruckwebapp.controller;

import com.himynameismoose.foodtruckwebapp.model.FoodTruck;
import com.himynameismoose.foodtruckwebapp.repository.FoodTruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/foodtrucks")
public class FoodTruckController {

    @Autowired
    private FoodTruckRepository foodTruckRepository;

    @GetMapping
    public List<FoodTruck> getAllFoodTrucks() {
        return foodTruckRepository.findAll();
    }

    // Build Create Food Truck REST API
    @PostMapping
    public FoodTruck createFoodTruck(@RequestBody FoodTruck foodtruck) {
        return foodTruckRepository.save(foodtruck);
    }
}
