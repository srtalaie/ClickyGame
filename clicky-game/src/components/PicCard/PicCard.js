import React from 'react';
import './PicCard.css'

const PicCard = ({ imageUrl, id, clicked, handleClick }) => (
    <img className="img-fluid" src={imageUrl} alt="House-Banner" key={id} height="175px" width="175px" onClick={() => handleClick(id)} data={clicked}></img>
    );

export default PicCard;