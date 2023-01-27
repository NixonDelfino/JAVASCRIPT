import { Container } from './styles'
import { Button } from '../../components/button'

export default function Details() {
  
  return(
    <Container>
      <h1>Hello World!!</h1>  
      <span>Nixon Delfino</span>

      <Button title="Login" loading></Button>
      <Button title="Register"></Button>
      <Button title="Back"></Button>
    </Container>
    )
}