import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []) // second param is important here, the effect will only run once, thus avoiding a loop

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {
          users.map(user => {
            const {id, login, avatar_url, html_url} = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login}/>
                <div>
                  <h4>{login}</h4>
                  <a href={html_url} title='profile'>profile</a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
