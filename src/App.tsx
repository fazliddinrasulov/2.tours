import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";

const url = "https://course-api.com/react-tours-project";
type ToursType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState<Array<ToursType>>([] as Array<ToursType>);
  const removeTour = (id: string) => {
    const newTours = tours.filter((tour: ToursType) => tour.id !== id);
    setTours(newTours);
  };
  const fetchUrl = async () => {
    try {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1 style={{ textAlign: "center" }}>No Tours Left</h1>
        <button className="btn refresh-btn" onClick={fetchUrl}>
          refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
