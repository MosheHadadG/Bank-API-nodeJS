import React, { useContext, useState } from 'react'
import { contextApp } from '../../context/contextApp';
import { createUser, getUsers } from '../../ServerAPI/admin'


function CreateUserForm() {
  const [form, setForm] = useState({ cash: '', credit: '' })
  const {setUsers} = useContext(contextApp);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const updateUsers = async () => {
    await createUser(form);
    const updatedUsers = await getUsers();
    setUsers(updatedUsers)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    updateUsers();
  }

  return (
    <form className='formWithdrawDeposit' onSubmit={handleSubmit}>
      <input onChange={handleChange} name='cash' type="text" placeholder='cash..(0 by deafult)' />
      <input onChange={handleChange} name='credit' type="text" placeholder='credit..(0 by deafult)' />
      <button>{`Click to create user`}</button>
    </form>
  )
}

export default CreateUserForm;