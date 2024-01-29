import PropTypes from 'prop-types';
import './anitext.css';

const AnimatedText = ({ texts }) => (
 <h1 className="animated animated-text">
    <div className="animated-info">
      {texts.map((text, index) => (
        <span className="animated-item" key={index}>{text}</span>
      ))}
    </div>
 </h1>
);

AnimatedText.propTypes = {
 texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnimatedText;
