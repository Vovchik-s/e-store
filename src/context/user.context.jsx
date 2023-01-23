import { createContext, useState } from 'react'

export const UserContext = createContext({
    currentUser: null, // must be default value. To check if user is logged in.
    setCurrentUser: () => null,
});

// for every context we create, we need to create a provider that will wrap around any component and provide the context value to all of its children .
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// This provider allows to { children } component to access the value of the useState hook. The value is passed to the context provider as a prop. The value is an object with the user and setUser properties. The user property is the value of the useState hook and the setUser property is the function that updates the user property.