import { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";

const Countries = ({ countries }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (countries.length === 1) {
      setCountry(countries[0]);
    } else {
      setCountry(null);
    }
  }, [countries]);

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  }

  if (countries.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <>
      {country ? (
        <CountryDetails country={country} />
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.cca2}>
              {country.name.common}{" "}
              <button onClick={() => setCountry(country)}>show</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;
