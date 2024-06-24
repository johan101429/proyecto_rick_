
import React from 'react';
import './card.css';

export const Card = ({ nameCharacter, imgCharacter, statusCharacter, speciesCharacter, genderCharacter, originCharacter }) => (
  <div className="card">
    <img src={imgCharacter} alt={nameCharacter} className="card-image" />
    <h2 className="card-name">{nameCharacter}</h2>
    <p className="card-status"><strong>Status:</strong> {statusCharacter}</p>
    <p className="card-species"><strong>Species:</strong> {speciesCharacter}</p>
    <p className="card-gender"><strong>Gender:</strong> {genderCharacter}</p>
    <p className="card-origin"><strong>Origin:</strong> {originCharacter}</p>
  </div>
);



/*id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"*/