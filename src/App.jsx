import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'
const URL = ' https://rickandmortyapi.com/api/character'


function App() {

  const [characters, setCharacters] = useState([
    { name: 'Homero', image: homero, quote: '¡ OooH !' }
  ]);
  

  const handleGetApi = async () => {
    const newCharacters = [];
    for (let i = 0; i < 9; i++) {
      const response = await fetch(URL);
      const data = await response.json();
      newCharacters.push({
        name: data[0].character,
        image: data[0].image,
        quote: data[0].quote
      });
    }
    setCharacters(newCharacters);
  };

  return (
    <>
      <div className="card-container">
        {characters.map((character, index) => (
          <Card
            key={index}
            nameCharacter={character.name}
            imgCharacter={character.image}
            quoteCharacter={character.quote}
          />
        ))}
      </div>
      <button onClick={handleGetApi}>Generar Personajes</button>
    </>
  );
}

export default App