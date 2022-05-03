import React from 'react';
import { useEffect, useState } from 'react';

export default function Characters() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    setCharacters(data.results);
    setIsLoading(false);

  }, [])

  return (
    <>
    {
      isLoading ? <p>Loading...</p>
      : (
      <ul>
        {
          characters.map((character) => {
            return (
              <article key={character.id}>
                <li>{character.name}</li>
              </article>
            )
          })
        }
      </ul>
      )
    }
    </>
  )
}
