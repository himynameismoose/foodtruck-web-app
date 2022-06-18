import React, {useState, useEffect} from 'react'
import FoodTruckService from '../services/FoodTruckService'

// Arrow function for the FoodTruck Component
const ListFoodTruckComponent =  () => {

    // State Hook
    // Declare a new state variable called foodtrucks
    const [foodtrucks, setFoodTrucks] = useState([]); // Array of food trucks

    // Effect Hook
    useEffect(() => {
        FoodTruckService.getAllFoodTrucks().then((response) => {
            setFoodTrucks(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        // Use .jsx code to design
        <div className="container">
            <h2 className="text-center"> List of Food Trucks </h2>

            <table className="table table-bordered table-striped">
                <thead>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Address </th>
                    <th> Food Type </th>
                </thead>

                <tbody>
                    {
                        foodtrucks.map(
                            foodtruck =>
                            <tr key={foodtruck.id}>
                                <td> {foodtruck.id} </td>
                                <td> {foodtruck.name} </td>
                                <td> {foodtruck.address} </td>
                                <td> {foodtruck.foodType} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}

export default ListFoodTruckComponent;