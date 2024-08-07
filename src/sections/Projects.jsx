import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/projects.json";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <Title>
        <p>
          <b>Projects</b>
        </p>
      </Title>
      <ProjectSection>
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            projectLink={project.projectLink}
            projectName={project.projectName}
            topics={project.topics}
            imageURL={project.imageURL}
          />
        ))}
      </ProjectSection>
    </section>
  );
};

export default ProjectsSection;

const Title = styled.div`
  width: 100%;
  padding-left: 5rem;
  align-self: start;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.48px;

  @media (max-width: 768px) {
    padding-left: 3rem;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    padding-left: 1rem;
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

const ProjectSection = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(2, 1fr); // Creates 2 columns
  gap: 20px; // Adjust the gap between items as needed
  padding: 20px; // Add some padding around the grid

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // On smaller screens, switch to 1 column
    padding: 10px; // Reduce padding on smaller screens
    gap: 0;
  }
`;
