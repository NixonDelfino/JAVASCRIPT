import { Link } from "react-router-dom";

import { NoteItem } from "../../components/Note_item"
import { Textarea } from "../../components/Text_area"
import { Section } from "../../components/Section"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Input } from "../../components/Input"

import { Container, Form } from "./styles"

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                       <Link to = "/">
                            Return
                       </Link>
                    </header>

                    <Input placeholder = "Title"/>
                    <Textarea placeholder = "Comments"/>

                    <Section title = "Links Úteis">
                        <NoteItem value = "https://github.com"/>
                        <NoteItem isNew placeholder = "New link"/>
                    </Section>
                       
                    <Section title = "Tags">
                        <div className="tags">
                            <NoteItem value = "react"/>
                            <NoteItem isNew placeholder = "New tag"/>
                        </div>
                    </Section>
                    <Button title = "Save" />
                </Form>
            </main>

        </Container>
    )
}