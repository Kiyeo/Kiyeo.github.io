import styled from "styled-components";
import Header from "../components/Header";

const AboutStyle = styled.section`
  min-height: 100vh;
  padding: 5% 10% 5% 10%;
`;

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 2em;
`;

const AboutSection: React.FC = () => {
  return (
    <AboutStyle>
      <Header>About</Header>
      <ContentDiv>
        A developer just figuring how things work. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <img src="/assets/images/IMG_0186.jpg" />
      </ContentDiv>
    </AboutStyle>
  );
};

export default AboutSection;
