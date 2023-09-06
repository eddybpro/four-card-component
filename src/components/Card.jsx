import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="Card">
      <h2 className="Card-Title">{props.title}</h2>
      <p className="Card-Para">{props.para}</p>
      <img src={props.img} alt={props.title} className="Card-Img" />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
  img: PropTypes.string,
};
export default Card;
