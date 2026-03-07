import './Users.css';
import User from './User.js';

function Users({users, searchValue, onChangeValue, invites, onClickInvite})
{
    return(
        <>
            <div className='search'>
                <input type='search' placeholder='Найти пользователя' value={searchValue} onChange={onChangeValue} />
            </div>
            <div>
                <ul className='users-list'>
                    {
                        //users.map(obj => (<User key={Object.id} {...obj} />))
                        users.filter
                        (
                            obj =>
                            {
                                const full_name = `${obj.first_name}${obj.last_name}`.toLowerCase();
                                return (
                                    full_name.includes(searchValue.toLowerCase()) || 
                                    obj.email.toLowerCase().includes(searchValue.toLowerCase)
                                );
                            }
                        )
                        .map
                        (obj => (
                            <User 
                                key={Object.id} 
                                {...obj} 
                                onClickInvite={onClickInvite} 
                                isInvited={invites.includes(obj.id)}
                            />
                        ))
                    }
                </ul>
            </div>
            <button className='send-invite-btn'>Пригласить</button>
        </>
    )
}
export default Users;