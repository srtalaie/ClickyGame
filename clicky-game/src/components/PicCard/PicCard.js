import React from 'react';
import './PicCard.css'

const PicCard = props => (
        <img className="img-fluid" src={props.imageUrl} alt="House-Banner" key={props.id} height="200px" width="200px" onClick={() => props.isClicked(props.id)} clicked={props.clicked}></img>
    );

export default PicCard;