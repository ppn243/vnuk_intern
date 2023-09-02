import Context from "./Context";
import { Admin } from "../Data/Data";
import {useState} from 'react'

const Provider = ({children}:any) => {
    const [admin, setAdmin] = useState(Admin)
    return <Context.Provider value={[admin, setAdmin]}>
        {children}
    </Context.Provider>
}

export default Provider