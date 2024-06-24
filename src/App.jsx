import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
const URL = 'https://rickandmortyapi.com/api/character';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchAllCharacters = async () => {
    try {
      let allCharacters = [];
      let nextPage = URL;

      while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        nextPage = data.info.next;
      }

      const formattedCharacters = allCharacters.map(character => ({
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin.name,
      }));

      setCharacters(formattedCharacters);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="card-container">
        {characters.map((character, index) => (
          <Card
            key={index}
            nameCharacter={character.name}
            imgCharacter={character.image}
            statusCharacter={character.status}
            speciesCharacter={character.species}
            genderCharacter={character.gender}
            originCharacter={character.origin}
          />
        ))}
      </div>
      <button onClick={fetchAllCharacters}>Generar Personajes</button>
    </>
  );
}

export default App;
