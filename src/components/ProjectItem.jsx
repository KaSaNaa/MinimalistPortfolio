import styled from "styled-components";
import PropTypes from "prop-types";

// Utility function to extract the site name from a URL
const extractSiteName = (url) => {
  try {
    const hostname = new URL(url).hostname;
    // Split the hostname and return the second last part as the site name
    const parts = hostname.split(".");
    return parts.length > 2 ? parts[parts.length - 2] : parts[0];
  } catch (error) {
    console.error("Invalid URL", error);
    return url; // Return the original URL if there's an error
  }
};

const ProjectItem = ({ projectLink, projectName, topics, imageURL }) => {
  ProjectItem.propTypes = {
    projectLink: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    topics: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  };

  const handleCardClick = () => {
    window.open(projectLink, "_blank");
  };

  const siteName = extractSiteName(projectLink);
  return (
    <Card onClick={handleCardClick}>
      <Details>
        <ProjectLink>{siteName}</ProjectLink>
        <h1>{projectName}</h1>
        <span>{topics}</span>
      </Details>
      <Image>
        <img
          src={imageURL}
          alt="project"
          width={150}
          height={150}
          style={{ borderRadius: "1rem" }}
        />
      </Image>
    </Card>
  );
};

export default ProjectItem;

const Card = styled.div`
  display: flex;
  border-radius: 2rem;
  flex-direction: row;
  width: 500px;
  flex-shrink: 0;
  height: 250px;
  justify-content: space-evenly;
  transition: box-shadow 0.6s ease-in-out;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.6s ease-in-out;
  }
`;

const ProjectLink = styled.h3`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #000; /* Adjust color as needed */
  text-decoration: none;
`;

const Details = styled.div`
  display: flex;
  margin-left: 3rem;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h1 {
    font-weight: 500;
    font-size: 25px;
    letter-spacing: -0.96px;
  }
  span {
    color: #999;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.48px;
  }
`;
const Image = styled.div`
  display: flex;
  border-radius: 2rem;
  width: 50%;
  justify-content: center;
  align-items: center;
  justify-content: end;
  margin-right: 3rem;
`;
