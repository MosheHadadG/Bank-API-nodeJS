import fs from 'fs'
import { readUsers } from './users.js'


const path = './filesSystem/users.json'
export const withdrawMoney = (id, cash) => {
  try {
    const users = readUsers();
    const userIndex = users.findIndex((user) => user.passportID === id);
    if (userIndex !== -1) {
      const user = users[userIndex]
      if(+user.cash < +cash) {
        return ({msg: `Not enough money! Can't withdraw money from user ${id}`});
      }
      else{
        user.cash = (+user.cash -  +cash);
        fs.writeFileSync(path, JSON.stringify(users), 'utf-8');
        return 'OK';
      }
    } else {
      return ({msg: 'No user with that specific id'});
    }


  } catch (error) {
    console.error(error)
  }
}