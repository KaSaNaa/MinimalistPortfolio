import styled from "styled-components"

const Landing = () => {
  return (
    <>
        <section id="landing">
            <Container className="container">
                <Content className="landing-content">
                    <h1>Full Stack Rookie</h1>
                    <p>a menacing developer</p>
                    <a href="#about" className="btn">About Me</a>
                </Content>
            </Container>
        </section>
    </>
  )
}

export default Landing

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100dvw;
    background-color: aquamarine;
`

const Content = styled.div`
    font-size: larger;
    background-color: cadetblue;
    height: fit-content;
    color: #fff;
`
