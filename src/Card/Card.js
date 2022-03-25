import "./Card.css";
import Image1 from './Image1.jpg'
// import image4 from './image4.jpg'

const CardItem = (props) => {
  const { title, Image, ID, Name, OriginPlace, Color, Year } = props;
  return (

    <div>

      <div className="card-container">
        <center>
          <h3 className="title">{title}</h3>
          <img src={Image} className="flower-size" />
        </center>
        <div className="alignment">
          <span>ID</span>:{ID}<br></br>
          <span>Name</span>:{Name} <br></br>
          <span>Origin Place</span>:{OriginPlace}<br></br>
          <span>Color</span> : {Color}<br></br>

        </div>

      </div>
    </div>

  );
};
export default CardItem;
