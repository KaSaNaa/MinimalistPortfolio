import styled from "styled-components";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaBlogger,
  FaSpotify,
  FaTiktok,
  FaReddit,
} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  const size = "30px";
  return (
    <StyledFooter>
      <Title><b>Find me on</b></Title>
      <Container>
        {/* Socials Section */}
        <FooterSection id="socials">
          <SocialLinks>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter to={"google.com"} size={size} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={size} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={size} />
            </a>
          </SocialLinks>
        </FooterSection>

        {/* Contact Details Section */}
        <FooterSection>
          <SocialLinks>
            <a
              href="mailto:ranawakagepasindu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size={size} />
            </a>
            <a
              href="https://pasinduranawakage.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBlogger size={size} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={size} />
            </a>
          </SocialLinks>
        </FooterSection>

        {/* Additional Links Section */}
        <FooterSection>
          <SocialLinks>
            <a
              href="mailto:ranawakagepasindu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify size={size} />
            </a>
            <a
              href="mailto:ranawakagepasindu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={size} />
            </a>
            <a
              href="mailto:ranawakagepasindu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit size={size} />
            </a>
          </SocialLinks>
        </FooterSection>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

// Styled components
const StyledFooter = styled.footer`
  padding: 10px;
  text-align: center;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;

  a {
    margin: 0 10px;
    color: #333; /* Example icon color */
    transition: color 0.3s ease;
    padding: 1rem;
    width: 10px;

    &:hover {
      color: #007bff; /* Example hover color */
    }
  }
`;

const Title = styled.h4`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;