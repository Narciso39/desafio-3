// import React from 'react';
import './App.css';
import { useApiUser } from './hooks/useApiUser';

function App() {
  const { user: users } = useApiUser();

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((u) => (
            <li key={u.id}>
              {`${u.email} ${u.password} - nome: ${u.name}`}
            </li>
          ))
        ) : (
          <li>Nenhum usuário encontrado.</li> 
        )}
      </ul>
    </div>
  );
}

export default App;
