import React, { useContext, useState } from 'react'
import { contextApp } from '../../context/contextApp';
import { withdraw, deposit, getUsers, updateCredit } from '../../ServerAPI/admin'
import './GeneralForm.css'

function WithdrawDepositForm({ type, action }) {
  const [form, setForm] = useState({ id: '', [type]: '' })
  const {setUsers, setMsg} = useContext(contextApp);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  
  }

  const updateUsers = async () => {
    switch (action) {
      case 'Deposit':
        const resultDeposit = await deposit(form);
        if (resultDeposit.msg) {
          setMsg(resultDeposit.msg);
          return;
        }
        let updatedUsersDeposit = await getUsers();
        setUsers(updatedUsersDeposit)
        setForm({ id: '', [type]: '' })
        break;

      case 'Withdraw':
        const resultWithdraw = await withdraw(form);
        if (resultWithdraw.msg) {
          setMsg(resultWithdraw.msg);
          return;
        }
        let updatedUsersWithdraw = await getUsers();
        setUsers(updatedUsersWithdraw)
        setForm({ id: '', [type]: '' })
        break;

        case 'Update Credit':
          const resultUpdateCredit = await updateCredit(form);
          if (resultUpdateCredit.msg) {
            setMsg(resultUpdateCredit.msg);
            return;
          }
          let updatedCredit = await getUsers();
          setUsers(updatedCredit)
          setForm({ id: '', [type]: '' })
          break;
        
        default: return;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    updateUsers();
  }
  return (
    <form className='formWithdrawDeposit' onSubmit={handleSubmit}>
      <input onChange={handleChange} name='id' type="text" value={form.id} placeholder='Passport ID...' />
      <input onChange={handleChange} name={type} type="text" value={form[type]} placeholder={`${type}...`} />
      <button>{`Click to ${action}`}</button>
    </form>
  )
}

export default WithdrawDepositForm