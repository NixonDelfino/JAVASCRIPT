import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'


export function Signin() {
    return(
        <Container>

        <Form>
            <h1>Rocket Notes</h1>
            <p>
                Application to save and manage your useful links
            </p>

            <h2>Login</h2>

            <Input 
                placeholder = 'E-mail'
                type = "text"
                icon ={FiMail}
            />
            <Input 
                placeholder = 'Password'
                type = "password"
                icon ={FiLock}
            />

            <Button title = 'Sign in' />

            <a href="#">
                Sign up
            </a>
            
        </Form>

        <Background />

        </Container>
    )
}
