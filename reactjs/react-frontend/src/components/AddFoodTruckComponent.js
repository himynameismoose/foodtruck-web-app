import React, { useState } from 'react'

const AddFoodTruckComponent = () => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [foodType, setFoodType] = useState('')

  // save food truck info
  const saveFoodTruck = (e) => {
    e.preventDefault();

    const foodtruck = {name, address, foodType}

    console.log(foodtruck);
  }

  return (
    <div>
      <br/><br/>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <br/>
            <h2 className="text-center"> Add Food Truck </h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Name: </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Address: </label>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Food Items: </label>
                  <textarea
                    rows={3}
                    cols={67}
                    placeholder="Food Items"
                    name="foodType"
                    className="form-control"
                    value={foodType}
                    onChange={(e) => setFoodType(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={(e) => saveFoodTruck(e)}> Submit </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFoodTruckComponent