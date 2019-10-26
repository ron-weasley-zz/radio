import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as fetchDataActions from '../../store/actions/fetchData';
import Card from './Card/Card';
import classes from './Cards.css';
import axios from '../../axios.config';

class Cards extends Component {
    cards = Object.keys(this.props.URL).map(el => {
        return (
            <div className={classes.block} key={el}>
                <Card firstColor={this.props.URL[el][3]} secondColor={this.props.URL[el][2]} text={this.props.URL[el][0]} fetch={this.props.fetchData} query={el} />
            </div>
        );
    });
    results = null;
    componentDidMount() {
        this.setState({ fetched: false, data: null });
    }
    render() {
        console.log(this.props.history);
        if (this.props.fetched) {
            const data = this.props.data;
            if (data['topalbums']) {
                this.results = (data.topalbums.album.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.result} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div className={classes.name}>{el.name}</div>
                            <div className={classes.name}>({el.playcount})</div>
                        </div>
                    );
                }));
            } else if (data['tags']) {
                this.results = (data.tags.tag.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.result} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div className={classes.name}>{el.name}</div>
                            <div className={classes.name}>({el.taggings})</div>
                        </div>
                    );
                }));
            } else if (data['tracks']) {
                this.results = (data.tracks.track.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.result} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div className={classes.name}>{el.name}&nbsp;-&nbsp;</div>
                            <div className={classes.name}>{el.artist.name}</div>
                            <div className={classes.name}>({el.playcount})</div>
                        </div>
                    );
                }));
            } else if (data['artists']) {
                this.results = (data.artists.artist.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.result} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div className={classes.name}>{el.name}&nbsp;-&nbsp;</div>
                            <div className={classes.name}>({el.listeners})</div>
                        </div>
                    );
                }));
            } else if (data.length === 3) {
                let result1 = data[0].results.artistmatches.artist.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.searchResults} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;</div>
                            <div className={classes.name}>{el.name.trim()}&nbsp;</div>
                            <div className={classes.name}>({el.listeners.trim()})</div>
                        </div>
                    );
                });
                let result2 = data[1].results.albummatches.album.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.searchResults} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;</div>
                            <div className={classes.name}>{el.name.trim()}&nbsp;-&nbsp;</div>
                            <div className={classes.name}>{el.artist.trim()}</div>
                        </div>
                    );
                });
                let result3 = data[2].results.trackmatches.track.splice(0, 10).map((el, index) => {
                    return (
                        <div className={classes.searchResults} key={index}>
                            <div className={classes.index}>{index + 1}&nbsp;</div>
                            <div className={classes.name}>{el.name.trim()}&nbsp;-&nbsp;</div>
                            <div className={classes.name}>{el.artist.trim()}&nbsp;</div>
                            <div className={classes.name}>({el.listeners.trim()})</div>
                        </div>
                    );
                });
                this.results = (
                    <div className={classes.search}>
                        <div className={classes.col1}>Artist<br />{result1}</div>
                        <div className={classes.col2}>Album<br />{result2}</div>
                        <div className={classes.col3}>Track<br />{result3}</div>
                    </div>
                );
                // <div className={classes.history}>Press H to view history.</div>
            }
        } else {
            this.results = null;
        }
        return (
            <div>
                {
                    this.props.fetched ? (<div className="resultBlock">{this.results}</div>) : (< div className={classes.container} ><div className={classes.row1}>
                        {this.cards}</div></div >)
                }
            </div>
        )
    }
};

const mapStatetoProps = state => {
    return {
        URL: state.URL,
        fetched: state.fetched,
        data: state.data,
        history: state.history
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        fetchData: (query) => dispatch(fetchDataActions.fetchData(query))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cards, axios);