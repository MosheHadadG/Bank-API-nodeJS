import express from 'express';
import { depositCash } from '../utils/deposit.js';
import { readUsers } from '../utils/users.js'

const depositRouter = express.Router();


// Deposit Cash
// id && cash
depositRouter.put('/', (req, res) => {
  try{
    const { id, cash} = req.body;
    if(!id || !cash) {
      return res.json({msg: 'Cannot Deposit Cash With this Data!!'});
    }
    const result = depositCash(id, cash)
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

export default depositRouter;