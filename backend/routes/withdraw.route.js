import express from 'express';
import { withdrawMoney } from '../utils/withdraw.js';
import { readUsers } from '../utils/users.js';

const withdrawRouter = express.Router();

// withdraw money
// id && cash

withdrawRouter.put('/', (req, res) => {
  try{
    const { id, cash} = req.body;
    console.log(req.body)
    if(!id || !cash) {
      return res.json({msg: 'Cannot withdraw money With this Data!!'});
    }
    const result = withdrawMoney(id, cash)
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


export default withdrawRouter;