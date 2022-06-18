import fs from 'fs'
import { readUsers } from './users.js'

const path = './filesSystem/users.json'

export const transferCash = (idSend, idGet, cash) => {
  try {
    const users = readUsers();
    const userSendIndex = users.findIndex((user) => user.passportID === idSend);
    const userGetIndex = users.findIndex((user) => user.passportID === idGet);
    if (userSendIndex !== -1 && userGetIndex !== -1) {
      const userSend = users[userSendIndex];
      const userGet = users[userGetIndex];
      if (+userSend.cash > +cash) {
        userSend.cash = (+userSend.cash - +cash);
        userGet.cash = (+userGet.cash + +cash);
        fs.writeFileSync(path, JSON.stringify(users), 'utf-8');
        return 'OK';
      }
      else {
        return ({msg: 'Not enough money sending! the transfer has been canceled'});
      }

    } else {
      return ({msg: 'No user with that specific id'});
    }

  } catch (error) {
    console.error(error)
  }
}