import React, { Component } from 'react';

import moment from 'moment';

class Incident extends Component {
    render() {
        return (
            <>
                {/* eslint-disable-next-line */}
                <a style={{ cursor: 'pointer' }} onClick={() => this.props.setIncident(this.props.incident._id)} class="w-full h-48 px-3 py-2 md:w-1/2 lg:w-1/3 xl:w-1/3 transition duration-500 ease-in-out transform hover:-translate-y-3">
                    <div class="flex flex-row w-full h-full shadow-lg bg-gray-900 rounded-lg p-4 relative">
                        <div className="flex overflow-hidden flex-col text-white">
                            <h2 className="text-white font-bold">Reported {moment(this.props.incident.timestamp).fromNow()}</h2>
                            <h2 className="text-gray-600 font-bold">Report ID: {this.props.incident._id}</h2>

                            <p className="text-white text-md font-normal">
                                {this.props.incident.reason}
                            </p>
                        </div>

                        <div className="absolute right-0 top-0 mt-5 mr-5">
                            <span class={`px-2 ml-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${this.props.incident.verified ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                {this.props.incident.verified ? "Verified" : "Not Verified"}
                            </span>
                        </div>
                    </div>
                </a>
            </>
        )
    }
}

export default Incident;