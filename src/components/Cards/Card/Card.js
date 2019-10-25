import React from 'react';

import './Card.css';

const Card = (props) => (
    <div className="container">
        <div className="first">
            <div className="color"></div>
        </div>
        <div className="second">
            <div onclick={props.fetch} className="text">{props.text}lol</div>
        </div>
    </div>
);

export default Card;