import fs from 'fs'
import { readUsers } from './users.js'


const path = './filesSystem/users.json'

export const updateCredit = (id, credit) => {
  try {
    const users = readUsers();
    const userIndex = users.findIndex((user) => user.passportID === id);
    if (userIndex !== -1) {
      const user = users[userIndex]
      user.credit = (+user.credit +  +credit);
      fs.writeFileSync(path, JSON.stringify(users), 'utf-8');
      return 'OK';
    } else {
      return ({msg: 'No user with that specific id'});
    }


  } catch (error) {
    console.error(error)
  }
}