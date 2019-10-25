import React from 'react';
import { NavLink } from 'react-router-dom';
import './Docs.css';

const Docs = (props) => (
    <div className="block">
        <div className="first">
            Search for any singer, tag, album and much more using this web app.
        </div>
        <div className="second">
            It uses API provided by last.fm which can be accessed only by an api key provided by them.
            <br />
            So, login first and set the api key in 'config.env' file.
        </div>
        <div className="third">
            Created by <NavLink className="nishant" to="github.com/ron-weasley">Nishant Chauhan</NavLink>
            Technologies used: React, Redux, Jquery, etc.
        </div>
    </div>
);

export default Docs;