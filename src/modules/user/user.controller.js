import { ObjectId } from "mongodb";
import * as userService from "./user.service.js";

export const listUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const user = await userService.getUser(query);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const userDetails = req.body;
    const user = await userService.addUser(userDetails);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
