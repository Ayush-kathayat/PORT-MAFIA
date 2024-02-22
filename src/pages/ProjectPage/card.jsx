import PropTypes from 'prop-types';
import './card.css';

// Card component
const Card = ({ image, title, paragraph, githubLink, demoLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{paragraph}</p>
      {githubLink && <a href={githubLink} className="button">View on GitHub</a>}
      {demoLink && <a href={demoLink} className="button">Demo</a>}
    </div>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string,
};
