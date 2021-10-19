import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from './user-context'

const home = () => {
    const {user, setUser} = useContext(UserContext) //pass context that we want to get the value for
    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (<button onClick={() => {
                //call logout
                setUser(null)
            }}>logout</button>) : (
            <button 
            onClick={async() => {
                const user = await login
             setUser(user)}})}
            >Log in</button>
        </div>
    )
}

export default home
