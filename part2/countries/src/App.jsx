import { useState } from "react";
import Search from "./components/Search";
import Countries from "./components/Countries";
import { useEffect } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => response.json())
      .then((data) => setAllCountries(data));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;

    setCountry(value);

    setFilteredCountries(
      allCountries.filter((c) =>
        c.name.common.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      <Search onChange={handleChange} value={country} />
      <Countries countries={filteredCountries} />
    </>
  );
}

export default App;
