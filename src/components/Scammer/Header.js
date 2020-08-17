import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div class="bg-gray-900">
                <div class="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row">
                        <img src={`https://mc-heads.net/body/robloxrocks`} width={125} alt="Player Body" />

                        <div className="flex flex-col ml-5 justify-center">
                            <div className="flex flex-row">
                                <h2 class="text-6xl leading-10 font-bold font-display text-white">jackson#0001</h2>
                            </div>
                            <h3 class="text-2xl leading-10 font-semibold font-display text-white mt-5">robloxrocks</h3>

                            <div className="flex flex-row mt-5">
                                <div>
                                    <h3 class="text-lg font-semibold font-display text-white">Known Mojang Accounts</h3>

                                    <div id="smallScroll" className="flex flex-col bg-gray-800 rounded-md px-2 py-1" style={{ minHeight: 150, maxHeight: 150, overflowY: 'scroll' }}>
                                        <h3 class="text-lg font-semibold font-display text-white">robloxrocks2</h3>
                                    </div>
                                </div>

                                <div className="ml-5">
                                    <h3 class="text-lg font-semibold font-display text-white">Known Discord Accounts</h3>

                                    <div id="smallScroll" className="flex flex-col bg-gray-800 rounded-md px-2 py-1" style={{ minHeight: 150, maxHeight: 150, overflowY: 'scroll' }}>
                                        <h3 class="text-lg font-semibold font-display text-white">robloxrocks#3873</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;