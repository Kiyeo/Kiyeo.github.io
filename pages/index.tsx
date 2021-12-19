import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import BasicLayout from "../components/layout/BasicLayout";
import IntroPage from "../components/Introduction/IntroPage";

const theme = {
  backgroundColor: "#FFFDD0",
};

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <IntroPage />
      <BasicLayout>
        <Head>
          <title>Leo Keo</title>
          <meta name="description" content="Leo's Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main></main>
      </BasicLayout>
    </ThemeProvider>
  );
};

export default Home;
