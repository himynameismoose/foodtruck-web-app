package com.himynameismoose.foodtruckwebapp;

import com.himynameismoose.foodtruckwebapp.model.FoodTruck;
import com.himynameismoose.foodtruckwebapp.repository.FoodTruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodtruckWebAppApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FoodtruckWebAppApplication.class, args);
	}

	@Autowired
	private FoodTruckRepository foodTruckRepository;

	@Override
	public void run(String... args) throws Exception {
//		FoodTruck foodtruck = new FoodTruck();
//		foodtruck.setName("El Maestro del Taco");
//		foodtruck.setAddress("1836 156th Ave NE, Bellevue, WA 98007");
//		foodtruck.setFoodType("Mexican");
//		foodTruckRepository.save(foodtruck);
//
//		FoodTruck foodtruck1 = new FoodTruck();
//		foodtruck1.setName("Taqueria La Estrella");
//		foodtruck1.setAddress("20435 84th Ave S, Kent, WA 98032");
//		foodtruck1.setFoodType("Mexican");
//		foodTruckRepository.save(foodtruck1);
	}
}
