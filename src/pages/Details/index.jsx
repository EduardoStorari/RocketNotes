import {Container} from "./styles";
import {Button } from "../../components/button";

export function Details() {

  return (
    <Container>
      <h1>Hello World</h1>
      <span>Eduardo Storari</span>

      <Button title ="wow" loading/>
      <Button title ="genius"/>
      <Button title ="wow!!!"/>
    </Container>   
  )
};