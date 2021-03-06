package com.himynameismoose.foodtruckwebapp.controller;

import com.himynameismoose.foodtruckwebapp.exception.ResourceNotFoundException;
import com.himynameismoose.foodtruckwebapp.model.FoodTruck;
import com.himynameismoose.foodtruckwebapp.repository.FoodTruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    // Build Get Food Truck REST API
    @GetMapping("{id}")
    public ResponseEntity<FoodTruck> getFoodTruckById(@PathVariable int id) {
        FoodTruck foodtruck = foodTruckRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food Truck not found with ID: " + id));

        return ResponseEntity.ok(foodtruck);
    }

    // Build Update Food Truck REST API
    @PutMapping("{id}")
    public ResponseEntity<FoodTruck> updateFoodTruck(@PathVariable int id, @RequestBody FoodTruck foodtruckDetails) {
        // Find the food truck by id
        FoodTruck updateFoodTruck = foodTruckRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food Truck not found with ID: " + id));

        // update the foodtruck by setting details
        updateFoodTruck.setName(foodtruckDetails.getName());
        updateFoodTruck.setAddress(foodtruckDetails.getAddress());
        updateFoodTruck.setFoodType(foodtruckDetails.getFoodType());

        // save the updated truck
        foodTruckRepository.save(updateFoodTruck);

        return ResponseEntity.ok(updateFoodTruck);
    }

    // Build Detele Food Truck REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteFoodTruck(@PathVariable int id) {
        FoodTruck foodtruck = foodTruckRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food Truck not found with ID: " + id));

        foodTruckRepository.delete(foodtruck);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
