import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as searchQueryActions from '../../store/actions/searchQuery';
import logo from "../../assets/logo.png";
import classes from './header.css';
import axios from '../../axios.config';

class Header extends Component {
    state = {
        currVal: null,
        history: []
    }
    componentDidMount() {
        document.querySelector(`.${classes.searchb}`).focus();
    };
    reload() {
        window.location = '/';
    }
    currUpdate(e) {
        this.setState({ currVal: e.target.value });
    }
    search(e) {
        e.preventDefault();
        const history = this.state.history.concat(this.state.currVal);
        this.setState({ history });
        this.props.searchQuery(this.state.currVal);
    }

    render() {
        return (
            <header className={classes.header}>
                <div className={classes.name}>
                    <NavLink to="/" onClick={this.reload} className={classes.main_link} activeClassName={classes.active}>radio<img src={logo} className={classes.logo} alt="" /></NavLink>
                </div>
                <div className={classes.search_bar}>
                    <form onSubmit={this.search.bind(this)} className={classes.searchb_form}>
                        <input onChange={this.currUpdate.bind(this)} className={classes.searchb} type="text" autoFocus placeholder="Believe" />
                    </form>
                </div>
                <div className={classes.what}>
                    <NavLink to="/what-is-it" className={classes.logo_what} activeClassName={classes.active}><div className={classes.cover}>?</div></NavLink>
                </div>
            </header>
        );
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        searchQuery: (query) => dispatch(searchQueryActions.searchQuery(query))
    }
}

export default connect(null, mapDispatchtoProps)(Header, axios);