import './Users.css';
import User from './User.js';

function Users({users})
{
    return(
        <>
            <div className='search'><input type='search' placeholder='Найти пользователя' /></div>
            <div>
            <h2>Список пользователей</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    <p>{user.first_name} {user.last_name}</p>
                    <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
                    </li>
            ))}
            </ul>
            </div>
            <button className='send-invite-btn'>Пригласить</button>
        </>
    )
}
export default Users;