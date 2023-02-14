import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'


export function Signup() {
    return(
        <Container>
            <Background />


            <Form>
                <h1>Rocket Notes</h1>
                <p>
                    Application to save and manage your useful links
                </p>

                <h2>Create your account</h2>

                <Input 
                    placeholder = 'Name'
                    type = "text"
                    icon ={FiUser}
                />
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

                <Button title = 'Sign up' />

                <Link to = "/">
                    Back to Signin
                </Link>
            
            </Form>


        </Container>
    )
}
