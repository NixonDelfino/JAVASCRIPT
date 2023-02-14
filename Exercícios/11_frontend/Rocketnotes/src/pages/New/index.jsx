import { Header } from "../../components/header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Text_area"
import { Container, Form } from "./styles"

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <a href="/">Return</a>
                    </header>

                    <Input placeholder = "Title"/>
                    <Textarea placeholder = "Comments"/>

                </Form>
            </main>

        </Container>
    )
}