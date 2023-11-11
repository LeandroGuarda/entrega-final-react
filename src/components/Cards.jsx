import Card from "./Card";

import dean from "../assets/dean.jpg";
import fender from "../assets/fender.jpg";
import gibson from "../assets/gibson.jpg";
import ibanez from "../assets/ibanez.jpg";
import ltd from "../assets/ltd.jpg";
import washburn from "../assets/washburn.jpg";

const cards = [
  {
    id: 1,
    title: "Guitar Dean",
    image: dean,
    price: 800,
  },

  {
    id: 2,
    title: "Fender Stratocaster",
    image: fender,
    price: 1200,
  },

  {
    id: 3,
    title: "Guitar Gibson",
    image: gibson,
    price: 2000,
  },

  {
    id: 4,
    title: "Guitar Ibanez",
    image: ibanez,
    price: 800,
  },

  {
    id: 5,
    title: "Guitar LTD",
    image: ltd,
    price: 800,
  },

  {
    id: 6,
    title: "Guitar Washburn",
    image: washburn,
    price: 800,
  },
];

function Cards() {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-sm-1 col-md-4 p-3" key={index}>
            <Card
              title={card.title}
              imageSource={card.image}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
