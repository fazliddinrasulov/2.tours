import Tour from "./Tour";
type ToursType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
type Props = {
  tours: ToursType[];
  removeTour: (id: string) => void;
};

const Tours = ({ tours, removeTour }: Props) => {
  return (
    <section className="section">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
