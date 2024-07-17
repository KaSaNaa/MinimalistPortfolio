import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <ProjectSection>
        <p>
          <b>Projects</b>
        </p>
        <ProjectItem />
        <ProjectItem />
      </ProjectSection>
    </section>
  );
};

export default ProjectsSection;

const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem;
    justify-content: center;

    p{
        font-size: 36px;
        font-weight: 500;
        letter-spacing: -0.48px;
    }
`
