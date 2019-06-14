import axios from "axios";

export default {
  // Gets all cars
  getCars: function () {
    return axios.get("/api/Cars");
  },
  // Gets the car with the given id
  getCar: function (id) {
    return axios.get("/api/Cars/" + id);
  },
  // Deletes the cars with the given id
  deleteCars: function (id) {
    return axios.delete("/api/Cars/" + id);
  },
  // Saves a cars to the database
  saveCars: function (CarsData) {
    return axios.post("/api/Cars", CarsData);
  }
};
