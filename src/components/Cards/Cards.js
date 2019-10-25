import React from 'react';

import Card from './Card/Card';
import './Cards.css';

const Cards = (props) => (
    <div className="container">
        <div className="row1">
            <div className="block">
                <Card />
            </div>
            <div className="block">
                <Card />
            </div>
            <div className="block">
                <Card />
            </div>
            <div className="block">
                <Card />
            </div>
        </div>
        <div className="row2">
            <div className="block">
                <Card />
            </div>
            <div className="block">
                <Card />
            </div>
            <div className="block">
                <Card />
            </div>
            <div className="block">
                <Card />
            </div>
        </div>
    </div>
);

export default Cards;