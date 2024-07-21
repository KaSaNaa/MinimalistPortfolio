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
  FaLink,
} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import Socials from "../data/socials.json";

const Footer = () => {
  const size = 30;
  const getSocialIcon = (name) => {
    switch (name) {
      case "GitHub":
        return <FaGithub size={size} />;
      case "LinkedIn":
        return <FaLinkedinIn size={size} />;
      case "Twitter":
        return <FaTwitter size={size} />;
      case "Instagram":
        return <FaInstagram size={size} />;
      case "Blogger":
        return <FaBlogger size={size} />;
      case "Spotify":
        return <FaSpotify size={size} />;
      case "TikTok":
        return <FaTiktok size={size} />;
      case "Reddit":
        return <FaReddit size={size} />;
      case "Google":
        return <FaGoogle size={size} />;
      default:
        return <FaLink size={size} />; // Default case if no icon matches
    }
  };

  return (
    <StyledFooter>
      <Title>
        <b>Find me on</b>
      </Title>
          <SocialLinks>
            {Socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getSocialIcon(social.name) }
              </a>
            ))}
          </SocialLinks>
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

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  flex-direction: column;
  margin-bottom: 20px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;

  a {
    justify-self: center;
    margin: 0 10px;
    transition: color 0.3s ease;
    padding: 1rem;
    color: black;
    width: 10px;

    &:hover {
      color: #007bff; // Blue color
    }
  }
`;

const Title = styled.h4`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;