import { useState } from "react";

type TourType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
type Props = {
  tour: TourType;
  removeTour: (id: string) => void;
};

const Tour = ({ tour, removeTour }: Props) => {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)} ...`}
          <span className="readmore-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
