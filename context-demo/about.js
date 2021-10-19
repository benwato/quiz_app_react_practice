import React from 'react'

const about = () => {
    const [value, setValue] = useContext(UserContext) //pass context that we want to get the value for
    return (
    
        <div>
            <h2>Home</h2>
            //<div>{value}</div> //want current value, whenever the content value changes it changes in div
            //<button onClick={() => setValue('hey')}>change value</button>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default about
