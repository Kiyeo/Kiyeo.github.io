import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import IntroOverlay from "../components/Introduction/IntroOverlay";

const theme = {
  backgroundColor: "#faf8dc",
};

export type ThemeType = typeof theme;

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <IntroOverlay />
      <Head>
        <title>Leo Keo</title>
        <meta name="description" content="Leo's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>testing</main>
    </ThemeProvider>
  );
};

export default Home;
