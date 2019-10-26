import React, { Component } from 'react';

import classes from './Card.css';
// onClick={props.fetch(props.query)} query={props.query}
class Card extends Component {
    render() {
        return (
            <div className={classes.container} style={{ backgroundColor: this.props.firstColor }} onClick={() => this.props.fetch(this.props.query)} query={this.props.query}>
                <div className={classes.first} style={{ backgroundColor: this.props.secondColor }}>
                    <div className={classes.color}></div>
                </div>
                <div className={classes.second}>
                    <div className={classes.text}>{this.props.text}</div>
                </div>
            </div >
        )
    };
};

export default Card;