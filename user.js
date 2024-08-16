const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const routes = express.Router();

routes.post("/get-all-users", createUser);
routes.get("/get-all-users", getUsers);
routes.put("/get-all-user", updateUser);
routes.delete("/get-all-user", deleteUser);

module.exports = routes;
