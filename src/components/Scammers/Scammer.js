import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Scammer extends Component {
    render() {
        return (
            <Link to={`/scammers/c5ef334745934f398bb12eaa40dd986e`} class="overflow-hidden w-full h-auto px-3 py-2 md:w-1/2 lg:w-1/3 xl:w-1/3 transition duration-500 ease-in-out transform hover:-translate-y-3">
                <div class="flex flex-row w-full h-full shadow-lg bg-gray-900 rounded-lg p-4">
                    <div className="flex flex-row">
                        <img width="60" style={{ maxHeight: 150 }} src={`https://mc-heads.net/body/robloxrocks`} alt="Player Body" />

                        <div className="flex flex-col ml-4">
                            <div className="flex flex-row">
                                <h1 className="text-white font-bold text-2xl">
                                    {"jackson#0001"}
                                </h1>

                                <h2 className="ml-3 text-gray-600 font-semibold text-xl">
                                    {3} incidents
                                </h2>
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <h2 className="text-white font-semibold text-md">
                                        Known Mojang Accounts
                                    </h2>

                                    <div id="smallScroll" style={{ maxHeight: 175, minHeight: 175, overflowY: 'scroll' }} className="bg-gray-800 rounded-md px-2 py-1 flex flex-col">
                                        <h4 className="text-white font-semibold">robloxrock</h4>
                                        <h4 className="text-white font-semibold">robloxrock</h4>
                                    </div>
                                </div>

                                <div className="ml-3">
                                    <h2 className="text-white font-semibold text-md">
                                        Known Discord Accounts
                                    </h2>

                                    <div id="smallScroll" style={{ maxHeight: 175, minHeight: 175, overflowY: 'scroll' }} className="bg-gray-800 rounded-md px-2 py-1 flex flex-col">
                                        <h4 className="text-white font-semibold">bruh#1002</h4>
                                        <h4 className="text-white font-semibold">bruh#1002</h4>
                                        <h4 className="text-white font-semibold">bruh#1002</h4>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

//https://mc-heads.net/body/c5ef3347-4593-4f39-8bb1-2eaa40dd986e

export default Scammer;