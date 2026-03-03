import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter';
import {Text} from './components/Text';
import Users from './components/Users';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Запрос идет на /api/users. Прокси перенаправит его на https://reqres.in/api/users
        const response = await fetch('/api/users?page=1'); // ИЗМЕНЕНО: Убрали домен
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json(); 
        
        // reqres.in возвращает объект с data: [...]
        setUsers(json.data); 

      } catch (e) {
        console.error("Ошибка загрузки (возможно, сетевая/CORS):", e);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='main'>
      {/* <Counter /> */}
      {/* <Text /> */}
      {loading ? <p>Загрузка пользователей...</p> : <Users users={users} />}
    </div>
  );
}

export default App;
