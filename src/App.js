import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter';
import {Text} from './components/Text';
import Users from './components/Users';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const payload = {
        "project_slug": "<project_slug>",
        "project_id": "<project_id>",
        "source_type": "collection",
        "source_id": "<collection_slug>",
        "event": "record.created",
        "action_type": "webhook",
        "action_config": {
          "url": "https://example.com/webhook"
        }
      };

      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'x-api-key': 'reqres_771a052959ff4a37acad6940d563f96c',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const json = await response.json();
      setUsers(json);
    };

    fetchUsers();
  }, []);

  return (
    <div className='main'>
      {/* <Counter /> */}
      {/* <Text /> */}
      <Users users={users} />
    </div>
  );
}

export default App;
