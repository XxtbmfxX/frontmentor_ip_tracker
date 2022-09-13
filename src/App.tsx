import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import ShowData from "./components/ShowData";

// 18.129.103.168
//To test

function App() {
  const [data, setData] = useState(undefined);
  const [input, setInput] = useState("18.129.103.168");

  const apiKey = process.env.APY_KEY;
  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input}`;

  const doxear = (ip: String) => {
    const apiKey = "at_YP7sbCwkqumxA5TzOfmMGUwFjmPG6";
    const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

    const options = {
      method: "GET",
    };
    fetch(URL, options)
      .then((response) => response.json())
      .then((r) => setData(r))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    doxear(URL);
  }, []);

  if (!data) {
    return (
      <div className="App">
        <h1>Loading uwu</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header doxear={doxear} input={input} setInput={setInput} />
        <div className="dummy">
          <ShowData data={data} />
        </div>

        <Map data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
