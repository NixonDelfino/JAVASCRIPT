import { Link } from 'react-router-dom';

import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Container, Form, Avatar } from "./styles";

export function Profile() {
    return(
        <Container>

            <header>
                <Link to = "/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="http://github.com/NixonDelfino.png" alt="user picture" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            id = "avatar"
                            type= "file"
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder = "Name"
                    type = "text"
                    icon = {FiUser}
                ></Input>
                <Input
                    placeholder = "E-mail"
                    type = "text"
                    icon = {FiMail}
                ></Input>
                <Input
                    placeholder = "Current Password"
                    type = "password"
                    icon = {FiLock}
                ></Input>
                <Input
                    placeholder = "New Password"
                    type = "password"
                    icon = {FiLock}
                ></Input>

                <Button title = "Save"></Button>
            </Form>

        </Container>
    )
}