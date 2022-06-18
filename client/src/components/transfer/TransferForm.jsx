import React, { useContext, useState } from 'react'
import { contextApp } from '../../context/contextApp';
import { transfer, getUsers } from '../../ServerAPI/admin'


function WithdrawDepositForm() {
  const [form, setForm] = useState({ idGet: '', idSend: '', cash: '' })
  const {setUsers, setMsg} = useContext(contextApp);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const updateUsers = async () => {
    const resultTransfer = await transfer(form);
    if (resultTransfer.msg) {
      setMsg(resultTransfer.msg);
      return;
    }
    const updatedUsers = await getUsers();
    setUsers(updatedUsers)
    setForm({ idGet: '', idSend: '', cash: '' })
    setMsg(null);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    updateUsers();
  }
 
  const { idGet, idSend, cash} = form;
  return (
    <form className='formWithdrawDeposit' onSubmit={handleSubmit}>
      <input onChange={handleChange} name='idSend' type="text" value={idSend} placeholder='Passport ID Send' />
      <input onChange={handleChange} name='idGet' type="text" value={idGet} placeholder='Passport ID Get' />
      <input onChange={handleChange} name='cash' type="text" value={cash} placeholder={`cash...`} />
      <button>{`Click to Transfer`}</button>
    </form>
  )
}

export default WithdrawDepositForm