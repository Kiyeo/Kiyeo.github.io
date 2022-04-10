import styled from "styled-components";
import Header from "../components/Header";

const AboutStyle = styled.section`
  min-height: 100%;
  padding: 5% 10% 5% 10%;
`;

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 2em;
  font-size: clamp(1rem, 2vw + 1rem, 4rem);
  text-align: center;


`;

const AboutSection: React.FC = () => {
  return (
    <AboutStyle>
      <Header>About</Header>
      <ContentDiv>
        <p>Just a developer trying to figure out how things work.</p>
        <img alt="me" src={"/assets/images/IMG_0186.jpg"} />
      </ContentDiv>
    </AboutStyle>
  );
};

export default AboutSection;
