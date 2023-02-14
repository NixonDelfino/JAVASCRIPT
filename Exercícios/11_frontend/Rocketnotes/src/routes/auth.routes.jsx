import { Routes, Route } from 'react-router-dom'

import { Signin } from "../pages/SignIn"
import { Signup } from "../pages/Signup"

export function AuthRoutes(){
    return(
        <Routes>
            
            <Route path = "/" element = {<Signin />}/>
            <Route path = "/signup" element = {<Signup />}/>

        </Routes>
    )
}