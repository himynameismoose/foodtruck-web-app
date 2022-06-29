import React, { useEffect, useState } from 'react';
import FoodTruckService from '../services/FoodTruckService';
import { Link } from 'react-router-dom';

const ListFoodTruckComponent = () => {

    // Use State hook
    const [foodtrucks, setFoodTrucks] = useState([]);

    // Use Effect hook
    useEffect(() => {
      
        FoodTruckService.getAllFoodTrucks().then((response) => {
            setFoodTrucks(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }, [])
    
  return (
    // use jsx code
    <div className="container">
        <br/>
        <h2 className="text-center"> Food Trucks </h2>
        <Link to="/add-foodtruck" className="btn btn-primary mb-2"> Add Food Truck </Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th> Food Truck ID </th>
                <th> Food Truck Name </th>
                <th> Food Truck Address </th>
                <th> Food Truck Food Type </th>
                <th> Actions </th>
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
                            {/* Action Buttons */}
                            <td>
                                <Link className="btn btn-info" to={`/edit-foodtruck/${foodtruck.id}`}> Update </Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListFoodTruckComponent