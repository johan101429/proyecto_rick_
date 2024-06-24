import React from 'react';



export const Card = ({imgCharacter,nameCharacter,qouteCharacter}) => {
  return (
    
    <div className="card">
            <img src={imgCharacter} alt={nameCharacter} />
            <h3>{nameCharacter}</h3>
            <p>{qouteCharacter}</p>
        </div>
  )
}

export default Card;