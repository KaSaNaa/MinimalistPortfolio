import styled from "styled-components";

// Navbar Component
const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <NamePart>Ranawakage</NamePart>
        <NamePart>Pasindu.</NamePart>
      </Logo>
      <NavItems>
        <a href="https://github.com/KaSaNaa/KaSaNaa/blob/main/files/CV.pdf"
        rel="noopener noreferrer" target="_blank"
        ><NavItem >Check out my CV</NavItem></a>
      </NavItems>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #000;
  position: fixed; /* Fixes the navbar at the top of the viewport */
  top: 0; /* Aligns the navbar at the top */
  left: 0; /* Aligns the navbar to the left */
  width: 100%; /* Ensures the navbar spans the full width */
  z-index: 1000; /* Ensures the navbar stays above other content */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const NamePart = styled.div`
  font-family: "THICCCBOI";
  font-weight: 600;
  font-size: large;

  @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Logo = styled.div``;

const NavItems = styled.div`
  display: flex; // Ensures flexbox layout for direct children
  align-items: center; // Aligns items vertically in the center
  padding-right: 4rem;
  height: 3rem;
  padding-left: 1rem;

  @media (max-width: 768px) {
    padding-right: 0.5rem;
  }
`;

const NavItem = styled.button`
  color: black;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 1rem; // Adjust padding to ensure it fits within the navbar
  transition: background-color 0.5s ease, color 0.5s ease;
  &:hover {
    background-color: #3f3f3f;
    color: white;
  }
  border-radius: 1rem;
  overflow: hidden; // Prevents content from overflowing

  @media (max-width: 768px) {
        font-size: 8px;
        margin-right: 15px;
    }
`;
