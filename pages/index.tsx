import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import BasicLayout from "../layout/BasicLayout";

const StyledCenter = styled.div`
  font-family: "JetBrains Mono";
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <Head>
        <title>Leo Keo</title>
        <meta name="description" content="Leo's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledCenter>
        <main>
          <header>Leo Keo</header>
        </main>
      </StyledCenter>
    </BasicLayout>
  );
};

export default Home;
