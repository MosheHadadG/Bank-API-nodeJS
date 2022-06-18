import express from 'express';
import { transferCash } from '../utils/transfer.js';
import { readUsers } from '../utils/users.js'

const transferRouter = express.Router();


// Transfer Cash
// idSend && idGet && cash
transferRouter.put('/', (req, res) => {
  try{
    const { idSend, idGet, cash} = req.body;
    if(!idSend || !idGet || !cash && +cash <= 0) {
      return res.json({msg: 'Cannot Transfer Cash With this Data!!'});
    }
    const result = transferCash(idSend, idGet, cash)
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

export default transferRouter;