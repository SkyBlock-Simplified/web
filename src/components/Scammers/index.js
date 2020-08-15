import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../NavBar';
import Header from './Header';
import GuildSelect from '../GuildSelect';
import Scammer from './Scammer';

class Scammers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scammers: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            loading: false,
            failed: false
        }
    }

    renderScammer(scammer) {
        return (<Scammer scammer={scammer} />);
    }

    render() {
        return (
            <div>
                <NavBar />

                <Header />

                <GuildSelect show={false} />

                <div className="flex flex-wrap bg-gray-800 w-full h-full py-10 px-4">
                    {this.state.scammers.map(scammer => this.renderScammer(scammer))}
                </div>
            </div>
        )
    }
}

export default Scammers;