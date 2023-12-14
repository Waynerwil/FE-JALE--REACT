import React, { useState, useEffect } from 'react';

function Users() {
    
    const [getUser, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/users/')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error:', error));

    }, []);

  return (

    <div>

      <h2>{"(+o+)"} USERS LIST {"(+o+)"}</h2>

      <ul>

        {getUser.map(user => (

            <div key={user.user_id} style={{display: "flex", flexDirection: "column", alignItems: "start", fontSize: "20px"}}>

                <span><strong>{user.user_name}</strong> {user.user_lastname}</span>
                <span>{user.user_email}</span>
                <span>{user.user_password}</span>
                <span>{user.user_birthdate}</span>

            </div>

        ))}

      </ul>

    </div>

  );
}

export default Users;
