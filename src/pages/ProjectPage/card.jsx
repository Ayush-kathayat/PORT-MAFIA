import PropTypes from "prop-types";
import "./card.css";

// Card component
const Card = ({ image, title, paragraph, githubLink, demoLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <div className="card-buttons">
        {githubLink && (
          <a href={githubLink} className="card-btn -solid -accent">
            <span className="btn__text">Github</span>
            <div className="btn__stroke">
              <i className="h"></i>
              <i className="v"></i>
            </div>
          </a>
        )}
        {demoLink && (
          <a href={demoLink} className="card-btn -solid -accent">
            <span className="btn__text">Demo</span>
            <div className="btn__stroke">
              <i className="h"></i>
              <i className="v"></i>
            </div>
          </a>
        )}
      </div>
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
