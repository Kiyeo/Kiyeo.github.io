import Card from "../components/Card";
import pathfinding from "../assets/images/pathfinding.png";

const HomePage: React.FC = () => {
  const projects = {
    title: "Pathfind Visualiser",
    link: "https://kiyeo.github.io/pathfinding-visualiser/",
  };

  return (
    <div className="home-page">
      <Card title={projects.title} link={projects.link}>
        <img
          className="card__img"
          src={pathfinding}
          alt="Pathfinding Visualiser"
        />
      </Card>
    </div>
  );
};

export default HomePage;
