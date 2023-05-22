//fetch data from api in react


import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.title}-{user.price}-{user.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// // import "./style.css";

// const App = () => {
//   const [users, SetUsers] = useState([]);
// };

// const fetchData = () => {
//   fetch('https://fakestoreapi.com/users')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       SetUsers(data);
//     });
// };

// useEffect(() => {
//   fetchData();
// }, []);

// return (
//   <div>
//     {users.length > 0 && (
//       <ul>
//         {users.map((user) => (
//           <li key={user.title}>{user.price}</li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// export default App;
