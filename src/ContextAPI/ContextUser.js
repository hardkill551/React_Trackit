import { createContext } from 'react';
import { useState } from 'react';


export const UrlContext = createContext()

export const UrlProvider = (props) => {
    const [url, setUrl] = useState(null)
    

    return (
        <UrlContext.Provider value={{url, setUrl}}>
            {props.children}
        </UrlContext.Provider>
    )
}
