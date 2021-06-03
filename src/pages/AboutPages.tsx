import me from "../assets/images/me.jpg";

const AboutPages: React.FC = () => (
  <div className="about">
    <div className="about__heading">
      <img className="about__display-picture" src={me} alt={"Leo Keo"} />
      <h1 className="about__h1">Visualise. Initialise. Actualise.</h1>
    </div>
    <div className="about__content">
      <p>
        Hello! My name is Leo, I am a recent graduate from the University of
        Auckland and I love solving problems and design.
      </p>
      <p>
        My favourite text editor is Vim and I mostly use it on WSL2 with Fish
        Shell terminal; you can find my .config folder{" "}
        <a
          href="https://github.com/Kiyeo/.config"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . My coding font is{" "}
        <a
          href="https://www.jetbrains.com/lp/mono/"
          target="_blank"
          rel="noreferrer"
        >
          JetBrains Mono
        </a>{" "}
        and it is free and open source. My theme for Vim is{" "}
        <a
          href="https://github.com/w0ng/vim-hybrid"
          target="_blank"
          rel="noreferrer"
        >
          vim-hybrid
        </a>{" "}
        and VSCode is{" "}
        <a
          href="https://github.com/Relaxed-Theme/vscode-theme-relaxed"
          target="_blank"
          rel="noreferrer"
        >
          vscode-theme-relaxed
        </a>
        .
      </p>
    </div>
  </div>
);

export default AboutPages;
