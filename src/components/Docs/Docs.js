import React from 'react';
import classes from './Docs.css';

const Docs = (props) => (
    <div className={classes.block}>
        <div className={classes.first}>
            Search for any singer, tag, album and much more using this web app.
        </div>
        <div className={classes.second}>
            It uses API provided by last.fm which can be accessed only by an api key provided by them.
            <br />
            So, login first and set the api key in 'config.env' file.
        </div>
        <div className={classes.third}>
            Created by <div className={classes.nishant} to="github.com/ron-weasley">Nishant Chauhan</div>
            Technologies used: React, Redux, Jquery, etc.
        </div>
    </div>
);

export default Docs;