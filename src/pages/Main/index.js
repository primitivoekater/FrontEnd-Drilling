import { useEffect, useState } from 'react';
import UsersList from '../../components/UsersList';
import UsersRegister from '../../components/UsersRegister';
import './styles.css';
import userContext from '../../contexte/userContext'

export default function Main() {

  const [usersData, setUsersData] = useState([]);
  const [userInEditing, setUserInEditing] = useState(false);

  function handleDeleteUser(userId) {
    const localUsersData = [...usersData];

    const index = localUsersData.findIndex(item => item.id === userId);

    localUsersData.splice(index, 1);

    setUsersData(localUsersData);
  }

  return (
    <userContext.Provider value={{ usersData, setUsersData, setUserInEditing, userInEditing }}>
      <div className="container-main">
        <UsersRegister
          usersData={usersData}
          setUsersData={setUsersData}
          setUserInEditing={setUserInEditing}
          userInEditing={userInEditing}
        />

        <UsersList
          usersData={usersData}
          setUsersData={setUsersData}
          setUserInEditing={setUserInEditing}
          userInEditing={userInEditing}
          handleDeleteUser={handleDeleteUser}
        />

      </div>
    </userContext.Provider>
  );
}
