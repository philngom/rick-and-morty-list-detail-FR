import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Character() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      console.log(id);
      setCharacter(data);
      console.log(data);
    }
    fetchCharacter();
  }, [])

  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image}></img>
    </>
  )
}
