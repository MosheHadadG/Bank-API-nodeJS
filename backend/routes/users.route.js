import express from 'express';
import { deleteUser, addUser, readUsers } from '../utils/users.js';

const usersRouter = express.Router();


// Get All Users
usersRouter.get('/', (req, res) => {
  try {
    const users = readUsers();
    res.json(users)
  } catch (error) {
    console.error(error);
  }
})

// Delete Spefic User
usersRouter.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    if(!id) {
      return res.json({msg: 'need to send ID'});
    }
    deleteUser(id);
    const users = readUsers();
    res.json(users)
  } catch (error) {
    console.error(error);
  }
})

// Create New User
// cash & credit (by deafult 0);
usersRouter.post('/', (req, res) => {
  try {
    addUser(req.body);
    const users = readUsers();
    res.json(users)
  } catch (error) {
    console.error(error);
  }
})


export default usersRouter;