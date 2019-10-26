import React, {
    Component,
    Fragment
} from 'react';
import Header from './../../components/header/header';
import Docs from './../../components/Docs/Docs';

class What extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Docs />
            </Fragment>
        );
    }
}

export default What;