import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import SocialMediaIcon from "../components/SocialMediaIcon";
import ThemeToggle from "../components/ThemeToggle";
import AboutSection from "./AboutSection";
import IntroSection from "./IntroSection/IntroSection";
import Theme from "../theme";

const Home: NextPage = () => {
  const lightTheme: Theme = {
    backgroundColor: "hsl(0, 0%, 95%)",
    color: "#121212",
    accent: "#f8bf54f8",
    hoverAccent: "hsl(0, 0%, 85%)",
  };

  const darkTheme: Theme = {
    backgroundColor: "#121212",
    color: "white",
    accent: "orange",
    hoverAccent: "hsl(0, 0%, 45%)",
  };

  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggle
        toggleTheme={(theme: Theme) => setTheme(theme)}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      />
      <SocialMediaIcon />
      <Head>
        <title>Leo Keo</title>
        <meta name="description" content="Leo's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IntroSection />
        <AboutSection />
      </main>
    </ThemeProvider>
  );
};

export default Home;
