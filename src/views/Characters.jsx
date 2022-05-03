import React from 'react';
import { useEffect, useState } from 'react';

export default function Characters() {

  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    setCharacters(data.results);

  }, [])

  return (
    <>
      <ul>
        {
          characters.map((character) => {
            return <li>{character.name}</li>
          })
        }
      </ul>
    </>
  )
}
