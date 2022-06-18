import fs from 'fs'
import uniqid from 'uniqid';



const path = './filesSystem/users.json'

const CheckFilesExist = () => {
  if (!fs.existsSync('./filesSystem')) {
    fs.mkdirSync('./filesSystem');
  }
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '[]', 'utf-8');
  }
}

export const readUsers = () => {
  CheckFilesExist();
  try {
    const users = JSON.parse(fs.readFileSync(path, 'utf-8'))
    return users;
  } catch (error) {
    console.error(error)
  }
}

export const addUser = ({cash, credit}) => {
  try {
    const users = readUsers();
    const newUser = {
      passportID: uniqid.process(),
      cash: cash ? cash : 0,
      credit: credit ? credit : 0,
    }
    users.push(newUser);
    fs.writeFileSync(path, JSON.stringify(users), 'utf-8');
    return 'OK';
  } catch (error) {
    console.error(error);
  }
}

export const deleteUser = (id) => {
  try {
    const users = readUsers();
    const filteredUsers = users.filter((user) => user.passportID !== id);
    if (users.length !== filteredUsers.length) {
      fs.writeFileSync(path, JSON.stringify(filteredUsers), 'utf-8');
      return 'OK';
    } else {
      return ({msg: 'No user with that specific id'});
    }
  } catch (error) {
    console.error(error);
  }
}