import React, {
    Component,
        Fragment
} from 'react';
import Header from './../../components/header/header';
import Cards from './../../components/Cards/Cards';

class Radio extends Component {
    // state = {
    // }
    render() {
        return (
            <Fragment >
                <Header />
                <Cards />
            </Fragment>
        );
    }
}

export default Radio;