import express from 'express';
import { updateCredit } from '../utils/credit.js';
import { readUsers } from '../utils/users.js';

const creditRouter = express.Router();

// Update credit
// id && credit
creditRouter.put('/', (req, res) => {
  try{
    const { id, credit} = req.body;
    if(!id || +credit < 0 ) {
      return res.json({msg: 'Cannot Update credit With this Data!!'});
    }
    const result = updateCredit(id, credit)
    if(result === 'OK') {
      const users = readUsers();
      res.json(users);
    }
    else {
      res.json(result)
    }
  } catch (error) {
    console.error(error);
  }
})


export default creditRouter;