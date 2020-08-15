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
                                <h2 class="text-6xl leading-10 font-bold font-display text-white">robloxrocks</h2>

                                <span class="px-2 ml-2 inline-flex items-center text-lg leading-5 font-bold rounded-full bg-green-100 text-green-800">
                                    Verified
                                    </span>
                            </div>
                            <h3 class="text-2xl leading-10 font-semibold font-display text-white">jackson#0001</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;