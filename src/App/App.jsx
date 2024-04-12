import ContainerModal from "../ContainerModal/ContainerModal"
import './App.css'
import Container from "../Container/Container"

const App = () => {
  return(
    <Container>
        <h1>FAQS</h1>
        <ContainerModal
        textButton={"What is Frontend Mentor, and how will it help me?"}
        textModal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore vel quidem ullam odio pariatur eos impedit modi perspiciatis accusamus ad aut aliquid obcaecati cumque cupiditate officiis, totam reprehenderit doloribus?"}/>

        <ContainerModal
        textButton={"Is Frontend Mentor"}
        textModal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore vel quidem ullam odio pariatur eos impedit modi perspiciatis accusamus ad aut aliquid obcaecati cumque cupiditate officiis, totam reprehenderit doloribus?"}/>
        
    <ContainerModal
        textButton={"Can I use Frontend Mentor projects in my portfolio?"}
        textModal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore vel quidem ullam odio pariatur eos impedit modi perspiciatis accusamus ad aut aliquid obcaecati cumque cupiditate officiis, totam reprehenderit doloribus?"}/>

    <ContainerModal
        textButton={"How can I get help I'm stuck on a challenge?"}
        textModal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore vel quidem ullam odio pariatur eos impedit modi perspiciatis accusamus ad aut aliquid obcaecati cumque cupiditate officiis, totam reprehenderit doloribus?"}/>
    </Container>
  )
}

export default App;