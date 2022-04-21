import { useState } from "react";
import CurrencyContainer from "./components/CurrencyContainer";
import Intro from "./components/Intro";
import useFetch from "./components/useFetch";

function App() {
  const [url, setUrl] = useState(`https://api.exchangerate-api.com/v4/latest/USD`);
  const { data, isPending, error } = useFetch(url);
  return (
    <div className="App">
      <Intro />
      {error && <div>{error}</div>}
      {isPending && <p>Fetching data from server</p>}
      {data && <CurrencyContainer data={data} setUrl={setUrl} />}
    </div>
  );
}

export default App;
