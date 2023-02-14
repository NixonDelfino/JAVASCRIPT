import { Container, Links, Content } from './styles'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/Button_text'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'

export function Details() {
  
  return(
    <Container>
      <Header />
      <main>

        <Content>

        <ButtonText title= "Delete Note" />

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium doloribus, blanditiis labore ex modi non et quos accusantium officiis soluta asperiores saepe, repellat magni dignissimos illum animi odit cum earum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim vero repellat tempora? Id aperiam quibusdam voluptates quae qui eum soluta, labore hic perferendis similique quam optio, officia pariatur nam.
          </p>

        <Section title = 'Useful Links'>
            <Links>
              <li><a href="https://github.com/NixonDelfino" target = '_blank'>https://github.com/NixonDelfino</a></li>
              <li><a href="https://github.com/NixonDelfino" target = '_blank'>https://github.com/NixonDelfino</a></li>
            </Links>
          </Section>
        
          <Section title = 'Tags'>
              <Tag title= "express"/>
              <Tag title= "nodejs"/>
          </Section>
      
          <Button title="Back" />
        </Content>
      </main>
    </Container>
    )
}