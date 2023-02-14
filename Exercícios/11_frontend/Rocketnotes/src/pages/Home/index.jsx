import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Header } from "../../components/header"
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from "../../components/Button_text"

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title = "All" />
                </li>
                <li>
                    <ButtonText title = "React" />
                </li>
                <li>
                    <ButtonText title = "NodeJS" />
                </li>
            </Menu>

            <Search>
                <Input placeholder = "Search for title" icon = {FiSearch} />
            </Search>

            <Content>
                <Section title = "My Notes">
                    <Note data={{
                        title: 'React', tags: [
                            { id: 1, name: 'react'},
                            { id: 2, name: 'rocketseat'}
                        ]}}/>
                        
                </Section>
            </Content>

            <NewNote to = "/new">
                <FiPlus />
                Create Note
            </NewNote>
        </Container>
    )
}