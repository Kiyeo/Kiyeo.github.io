interface Props {
  title: string;
  link: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, link, children }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="card">
        <h2 className="card__h2">{title}</h2>
        {children}
      </div>
    </a>
  );
};

export default Card;
