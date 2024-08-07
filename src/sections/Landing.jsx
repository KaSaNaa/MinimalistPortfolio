import styled from "styled-components";
import scrollToSection from "../scripts/scroll2Sections";

const LandingSection = () => {
  return (
    <>
      <section id="landing">
        <Container className="container">
          <Heading>My personal developer portfolio</Heading>
          <Content className="landing-content">
            <h1>
              <WordArt className="passion">
                <span
                  className="hover-circle"
                  onClick={() => scrollToSection("gallery")}
                >
                  Passionate
                </span>
              </WordArt>
              <WordArt className="code">
                <span
                  className="hover-circle"
                  onClick={() => scrollToSection("projectsSection")}
                >
                  Code
                </span>
              </WordArt>
              <WordArt className="artisan">
                <span
                  className="hover-circle"
                  onClick={() => scrollToSection("footerSection")}
                >
                  Artisan
                </span>
              </WordArt>
            </h1>
          </Content>
          <p>CodeSage: Crafting the Future with Code and Curiosity</p>
        </Container>
      </section>
    </>
  );
};

export default LandingSection;

const WordArt = styled.span``;

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
      margin: 20px;
      font-size: 18px;
      letter-spacing: -0.6px;
      text-align: center;
      padding: 10px;
    }
  }
`;

const Content = styled.div`
  font-size: larger;
  display: flex;
  height: fit-content;
  color: transparent;

  .hover-circle {
    position: relative;
    cursor: pointer;
    display: inline-block; /* Ensure the span behaves correctly for positioning */

    @media (max-width: 480px) {
      margin: 10px; // Add some space around the text on very small screens
    }

    @media (max-width: 768px) {
      margin: 20px; // Add some space around the text on small
    }

    @media (max-width: 1024px) {
      margin: 20px; // Add some space around the text on medium screens
    }
  }

  .hover-circle::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.3s ease;
    z-index: -1;
    animation: hoverCircleAnimation 2s infinite alternate ease-in-out;
  }

  @keyframes hoverCircleAnimation {
    0% {
      transform: translateX(-50%) scale(0);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }

  .hover-circle:hover::before {
    transform: translateX(-50%) scale(1); /* Show the circle on hover */
  }

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
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: transparent;
    font-family: THICCCBOI;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2px;
    transition: background-color 0.5s ease, color 0.5s ease,
      letter-spacing 0.5s ease;
    animation: textEffectAnimation 2s infinite alternate ease-in-out;

    @media (max-width: 1024px) {
      font-size: 80px;
    }

    @media (max-width: 768px) {
      font-size: 70px;
    }

    @media (max-width: 480px) {
      font-size: 60px;
    }
  }

  @keyframes textEffectAnimation {
    0% {
      color: transparent;
      letter-spacing: -2px;
      -webkit-text-stroke-color: black;
    }
    100% {
      color: #000;
      letter-spacing: 3px;
      -webkit-text-stroke-color: transparent;
    }
  }
`;
