import styled from "styled-components";
import Header from "../components/Header";

const AboutStyle = styled.section`
  min-height: 100vh;
  padding: 5vh 10vw 0 10vw;
  background-color: ${(p) => p.theme.backgroundColor};
  color: ${(p) => p.theme.color};
  transition: background-color 1s ease-in, color 1s ease-in;
`;

const AboutSection: React.FC = () => {
  return (
    <AboutStyle>
      <Header>About</Header>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </AboutStyle>
  );
};

export default AboutSection;
