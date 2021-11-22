import { useEffect, useState } from "react";

const withData = (Component) => () => {
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setResults(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Component results={results} />;
};

const ListResults = ({ results }) => {
  return (
    <ul>
      {results.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default withData(ListResults);
