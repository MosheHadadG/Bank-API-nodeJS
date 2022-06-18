import fs from 'fs'
import { readUsers } from './users.js'

const path = './filesSystem/users.json'

export const depositCash = (id, cash) => {
  try {
    const users = readUsers();
    const userIndex = users.findIndex((user) => user.passportID === id);
    if (userIndex !== -1) {
      users[userIndex].cash = (+users[userIndex].cash +  +cash);
      fs.writeFileSync(path, JSON.stringify(users), 'utf-8');
      return 'OK';
    } else {
      return ({msg: 'No user with that specific id'});
    }


  } catch (error) {
    console.error(error)
  }
}