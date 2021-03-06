import React, { Component } from 'react';

import NavBar from '../NavBar';
import Header from './Header';
import Incident from './Incident';
import IncidentView from './IncidentView';

class Scammer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incidents: [{ _id: "bruh2" }, { _id: "bruh3" }, { _id: "bruh4", verified: true, reason: 'Proin accumsan odio a mi consequat, sit amet sagittis ex sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas pretium risus nunc, et consectetur ligula elementum a. Quisque vehicula lectus nec quam pulvinar, nec interdum nisl rhoncus. Suspendisse quis nisl egestas, bibendum eros nec, dictum nisl. Cras metus odio, ultrices ut diam et, fermentum sagittis turpis. Nunc turpis justo, laoreet sed tempor id, luctus nec dolor. Quisque nec mattis lectus. Phasellus vel suscipit sapien.' }],
            loading: false,
            failed: false,
            selectedIncident: 'bruh4'
        }

        this.selectIncident = this.selectIncident.bind(this);
        this.closeIncident = this.closeIncident.bind(this);
    }

    selectIncident(id) {
        this.props.history.push(`/scammers/${this.props.match.params.id}/${id}`);
        this.setState({ selectedIncident: id });
    }

    closeIncident() {
        this.props.history.push(`/scammers/${this.props.match.params.id}`);
        this.setState({ selectedIncident: '' });
    }

    renderIncident(incident) {
        return (<Incident setIncident={this.selectIncident} history={this.props.history} incident={incident} id={this.props.match.params.id} />);
    }

    render() {
        return (
            <div>
                <NavBar />

                <Header />

                <IncidentView selectedIncident={this.state.selectedIncident} close={this.closeIncident} incidents={this.state.incidents} />

                <div className="flex flex-wrap bg-gray-800 py-10 min-h-screen px-4">
                    {this.state.incidents.map(incident => this.renderIncident(incident))}
                </div>
            </div>
        )
    }
}

export default Scammer;