import React, { Component } from 'react';

import NavBar from '../NavBar';
import Header from './Header';
import Incident from './Incident';
import IncidentView from './IncidentView';

class Scammer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incidents: [{ _id: "bruh2" }, { _id: "bruh3" }, { _id: "bruh4", reason: 'Proin accumsan odio a mi consequat, sit amet sagittis ex sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas pretium risus nunc, et consectetur ligula elementum a. Quisque vehicula lectus nec quam pulvinar, nec interdum nisl rhoncus. Suspendisse quis nisl egestas, bibendum eros nec, dictum nisl. Cras metus odio, ultrices ut diam et, fermentum sagittis turpis. Nunc turpis justo, laoreet sed tempor id, luctus nec dolor. Quisque nec mattis lectus. Phasellus vel suscipit sapien.' }],
            loading: false,
            failed: false
        }
    }

    renderIncident(incident) {
        return (<Incident incident={incident} id={this.props.match.params.id} />);
    }

    render() {
        return (
            <div>
                <NavBar />

                <Header />

                <IncidentView incident={this.state.incidents[2]}/>

                <div className="flex flex-wrap bg-gray-800 py-10 min-h-screen px-4">
                    {this.state.incidents.map(incident => this.renderIncident(incident))}
                </div>
            </div>
        )
    }
}

export default Scammer;