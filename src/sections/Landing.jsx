import styled from "styled-components";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <section id="landing">
        <Container className="container">
          <Heading>My personal developer portfolio</Heading>
          <Content className="landing-content">
            <h1>
              <span>Passionate</span> <span>Code</span> <span>Artisan</span>
            </h1>
          </Content>
          <p>CodeSage: Crafting the Future with Code and Curiosity</p>
        </Container>
      </section>
    </>
  );
};

export default Landing;

const Heading = styled.div`
  padding-left: 7%;
  padding-top: 4%;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 5%; // Reduce padding on smaller screens
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding-left: 3%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vb;
  margin: auto;
  @media (max-width: 1024px) {
    width: 85vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (max-width: 480px) {
    width: 100vw;
  }

  p {
    padding-left: 7%;
    font-weight: 500;
    font-size: 26px;
    letter-spacing: -1.5px;

    border-top: 2px solid #000; /* Solid black line */
    padding-top: 10px; /* Space between text and line */
    margin-top: 15px;

    @media (max-width: 768px) {
      margin-left: 15px;
      font-size: 20px;
    }
  }
`;

const Content = styled.div`
  font-size: larger;
  display: flex;
  height: fit-content;
  color: transparent;

  h1 {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    user-select: none;

    @media (max-width: 1024px) {
      font-size: 70px;
    }

    @media (max-width: 768px) {
      font-size: 60px;
    }

    @media (max-width: 480px) {
      font-size: 50px;
      margin: 10px;
      flex-direction: column; // Stack the spans vertically on very small screens
    }
  }

  span {
    -webkit-text-stroke-width: 1px; /* Width of the outline */
    -webkit-text-stroke-color: black; /* Color of the outline */
    color: transparent; /* Makes the text fill transparent */
    font-family: THICCCBOI;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2px;
    transition: background-color 0.5s ease, color 0.5s ease,
      letter-spacing 0.5s ease; /* Include letter-spacing in the transition */
    &:hover {
      color: #000;
      letter-spacing: 3px;
      -webkit-text-stroke-color: transparent;
    }

    @media (max-width: 1024px) {
      font-size: 90px;
    }

    @media (max-width: 768px) {
      font-size: 80px;
    }

    @media (max-width: 480px) {
      font-size: 55px;
    }
  }
`;
