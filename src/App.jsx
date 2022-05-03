import { useEffect, useState } from 'react';

export default function App() {

  const [characters, setCharacters] = useState();

  useEffect(async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    setCharacters(data.results);

  }, [])

  return (

  <h1>Hello World</h1>

  );
}
