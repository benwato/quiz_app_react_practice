import React from 'react'
import { UserContext } from './user-context'

const ContextDemo = () => {
    const [user, setUser] = useState(null)
    const value = useMemo(() => ({user, setUser}), [user, setUser]) //like a useEffect, doesn't make a huge difference but good for when value frequently changes
    return (
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to = "/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <UserContext.Provider value={/*{user, setUser}*/ or providerValue}/>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            </UserContext.Provider>
        </div>
        </Router>
    )
}
export default App
