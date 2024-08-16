const userModel = require("../models/user");

const createUser = async function (req, res) {
  const body = req.body;
  console.log(body);
  try {
    const newUser = new userModel(body);
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.json(savedUser);
  } catch (error) {
    console.log(error);
    res.json({ message: "user already exist" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find().sort({ username: -1 });
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateUser = async function (req, res) {
  const { id, username } = req.body;
  console.log(id);
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { username },
      { new: true }
    );
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    console.log(deletedUser);
    res.json(deletedUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
