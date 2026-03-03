import './Users.css';
import User from './User.js';

function Users({users})
{
    return(
        <>
            <div className='search'><input type='search' placeholder='Найти пользователя' /></div>
            <div>
                <ul className='users-list'>
                    {
                        users.map(obj => (<User key={Object.id} {...obj} />))
                    }
                </ul>
            </div>
            <button className='send-invite-btn'>Пригласить</button>
        </>
    )
}
export default Users;