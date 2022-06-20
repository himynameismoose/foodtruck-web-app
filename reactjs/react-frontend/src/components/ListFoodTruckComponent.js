import React, { useState } from 'react'

const ListFoodTruckComponent = () => {

    // Use State hook
    const [foodtrucks, setFoodTrucks] = useState([])

  return (
    // use jsx code
    <div className="container">
        <h2 className="text-center"> List Food Trucks </h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th> Food Truck ID </th>
                <th> Food Truck Name </th>
                <th> Food Truck Address </th>
                <th> Food Truck Food Type </th>
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
  )
}

export default ListFoodTruckComponent