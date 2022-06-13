package com.himynameismoose.foodtruckwebapp.repository;

import com.himynameismoose.foodtruckwebapp.model.FoodTruck;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodTruckRepository extends JpaRepository<FoodTruck, Integer> {
    // All CRUD Database Methods
}
