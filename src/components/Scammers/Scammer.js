import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

class Scammer extends Component {
    render() {
        return (
            <Link to={`/scammers/c5ef334745934f398bb12eaa40dd986e`} class="overflow-hidden w-full h-48 px-3 py-2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                <div class="flex flex-row w-full h-full shadow-lg bg-gray-900 rounded-lg p-4">
                    <div className="flex flex-row">
                        <img width="60" src={`https://mc-heads.net/body/robloxrocks`} />

                        <div className="flex flex-col ml-4">
                            <h1 className="text-white font-bold text-2xl">
                                {"robloxrocks"}

                                <span class="px-2 ml-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Verified
                                </span>
                            </h1>

                            <h2 className="text-white font-semibold text-md">
                                {"jackson#0001"}
                            </h2>

                            <h3 className="text-white font-semibold text-sm">
                                Incidents: {3}
                            </h3>

                            <h3 className="text-white font-semibold text-sm">
                                Last incident {moment(Date.now()).fromNow()}
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

//https://mc-heads.net/body/c5ef3347-4593-4f39-8bb1-2eaa40dd986e

export default Scammer;