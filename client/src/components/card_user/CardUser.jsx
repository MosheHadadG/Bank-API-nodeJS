import React, { useContext } from 'react'
import { contextApp } from '../../context/contextApp';
import { deleteUser, getUsers } from '../../ServerAPI/admin'


function CardUser({ user }) {
  const { setUsers } = useContext(contextApp);

  const handleRemoveUser = async (event, id) => {
    await deleteUser(id);
    const updatedUsers = await getUsers();
    setUsers(updatedUsers)
  }

  const { passportID, cash, credit } = user;
  return (
    <div key={passportID} className='user'>
      <h5>cash: {cash}₪</h5>
      <h5>credit: {credit}₪</h5>
      <h5>passport id: {passportID}</h5>
      <div className='delete-button'>
      <button onClick={(event) => handleRemoveUser(event, passportID)}>Delete User</button>
      </div>
    </div>
  )
}

export default CardUser