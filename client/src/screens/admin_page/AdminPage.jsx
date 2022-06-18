import React, { useContext, useEffect, useState } from 'react'
import CardUser from '../../components/card_user/CardUser';
import { getUsers} from '../../ServerAPI/admin'
import GeneralForm from '../../components/general_form/GeneralForm'
import TransferForm from '../../components/transfer/TransferForm'
import './AdminPage.css'
import { contextApp } from '../../context/contextApp';
import CreateUserForm from '../../components/create_user/CreateUserForm';

function AdminPage() {
  // Global State
  const { users, setUsers, msg, setMsg } = useContext(contextApp);

  const [transferActive, setTransferActive] = useState(true);
  const [depositActive, setDepositActive] = useState(false);
  const [withdrawActive, setWithdrawActive] = useState(false);
  const [createUserActive, setCreateUserActive] = useState(false);
  const [updateCreditActive, setUpdateCreditActive] = useState(false);

  useEffect(() => {
    const usersFromServer = async () => {
      const allUsers = await getUsers();
      setUsers(allUsers)
    }
    usersFromServer();
    // eslint-disable-next-line
  }, []);

  const renderdUsers = () => {
    const renderUser = users.map((user) => {
      return <CardUser key={user.passportID} user={user} />
    })
    return renderUser
  }

  const handleNavBar = ({target: {innerText}}) => {
    switch (innerText) {
      case 'Transfer':
        setTransferActive(!transferActive);
        setDepositActive(false);
        setWithdrawActive(false);
        setCreateUserActive(false);
        setUpdateCreditActive(false);
        setMsg(null);
        break;
      
      case 'Withdraw':
        setWithdrawActive(!withdrawActive);
        setDepositActive(false);
        setTransferActive(false);
        setCreateUserActive(false);
        setUpdateCreditActive(false);
        setMsg(null);
        break;
      
      case 'Deposit':
        setDepositActive(!depositActive);
        setWithdrawActive(false);
        setTransferActive(false);
        setCreateUserActive(false);
        setUpdateCreditActive(false);
        setMsg(null);
        break;

      case 'Update Credit':
        setUpdateCreditActive(!updateCreditActive);
        setWithdrawActive(false);
        setDepositActive(false);
        setTransferActive(false);
        setCreateUserActive(false);
        setMsg(null);
        break;
      
      case 'Create New User':
        setCreateUserActive(!createUserActive);
        setTransferActive(false);
        setDepositActive(false);
        setWithdrawActive(false);
        setUpdateCreditActive(false);
        setMsg(null);
        break;
      
      default: return;
    }
  }

  return (
    <>
      <header>
        <h1>Admin Page</h1>
      </header>
      <div className='container-admin-page'>
        <ul className='navBar'>
          <li onClick={handleNavBar}>Transfer</li>
          <li onClick={handleNavBar}>Withdraw</li>
          <li onClick={handleNavBar}>Deposit</li>
          <li onClick={handleNavBar}>Update Credit</li>
          <li onClick={handleNavBar}>Create New User</li>
        </ul>
        <div className='form-container'>

          {depositActive && <GeneralForm type='cash' action='Deposit' />}
          {withdrawActive && <GeneralForm type='cash' action='Withdraw' />}
          {updateCreditActive && <GeneralForm type='credit' action='Update Credit' />}
          {transferActive && <TransferForm />}
          {createUserActive && <CreateUserForm />}
          {msg && <h3>{msg}</h3>}
        </div>
        <div className='users-container'>
          <h4>All Users</h4>
          <div className='users'>
            {users.length > 0 ? renderdUsers() : 'Loading....'}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPage