import React from 'react';



export const Card = ({imgCharacter,nameCharacter,statusCharacter,speciesCharacter}) => {
  return (
    
    <div className="card">
            <img src={imgCharacter} alt={nameCharacter} />
            <h3>{nameCharacter}</h3>
            <p>{statusCharacter}</p>
            <p>{speciesCharacter}</p>
        </div>
  )
}

export default Card;


/*id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"*/