import styled from "styled-components";

const ProjectItem = () => {
  return (
    <Card>
      <Details>
        <p>project link</p>
        <h1>Project Name</h1>
        <span>related topics</span>
      </Details>
      <Image>
        <img
          src="https://via.placeholder.com/150"
          alt="project"
          width={250}
          height={250}
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
  width: 1311px;
  height: 499px;
  flex-shrink: 0;

  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Details = styled.div`
  display: flex;
  margin-left: 5rem;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h1 {
    font-weight: 500;
    font-size: 48px;
    letter-spacing: -0.96px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
  span {
    color: #999;
    font-size: 24px;
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
  margin-left: 40px;
`;
