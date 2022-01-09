import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import me from "../public/IMG_0186.jpg";

const AboutStyle = styled.section`
  min-height: 100vh;
  padding: 5vh 10vw 5vh 10vw;
`;

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
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
        <Image className="dp" priority src={me} alt={"Leo Keo"} />
      </ContentDiv>
    </AboutStyle>
  );
};

export default AboutSection;
