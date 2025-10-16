import Weather from "./Weather";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital ? country.capital[0] : "not found"}</p>
      <p>Area {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages ? (
          Object.entries(country.languages).map(([short, language]) => (
            <li key={short}>{language}</li>
          ))
        ) : (
          <p>No languages found</p>
        )}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />

      <Weather
        capital={country.capital ? country.capital[0] : country.name.common}
      />
    </div>
  );
};

export default CountryDetails;
