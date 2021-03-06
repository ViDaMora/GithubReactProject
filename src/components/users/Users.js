import React, {useContext}  from 'react'
import UserItem from './UsersItem'
import Spinner from '../layaout/Spinner'
import GithubContext from '../../context/github/githubContext'


const Users=()=> {
    const githubContext = useContext(GithubContext)

   const {users,loading} = githubContext;
    if (loading) {
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
                {users.map(user =>(
                     <UserItem key={user.id} user={user}> </UserItem>
                ))}
            </div>
        )
    }
        
    }
 
const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Users
