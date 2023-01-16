import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import LookForBebidas from "./components/LookForBebidas";

function App() {
  const [bebidaData, setBebidaData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, [name]);

  const getData = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((resp) => setBebidaData(resp.data.drinks))
      .catch((error) => console.error(error));
  };

  const lookForDrink = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  return (
    <div className="App">
      <div className="search">
        <form onSubmit={(e) => lookForDrink(e)}>
          <input type="text" placeholder="Search by name" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="drinks">
        {bebidaData.map((drinks, index) => (
          <LookForBebidas data={drinks} key={`drinks-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
