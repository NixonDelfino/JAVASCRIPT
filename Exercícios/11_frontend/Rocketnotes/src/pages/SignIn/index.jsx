import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

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

            <Link to = "/signup">
                Create Account
            </Link>
            
        </Form>

        <Background />

        </Container>
    )
}
