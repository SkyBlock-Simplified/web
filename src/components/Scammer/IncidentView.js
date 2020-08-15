import React, { Component } from 'react';

class IncidentView extends Component {
    render() {
        return (
            <div class="fixed inset-0 overflow-hidden" style={{ zIndex: 99999 }}>
                <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute inset-0 bg-gray-700 bg-opacity-50 transition-opacity"></div>
                    <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                        <div class="relative w-screen max-w-md">
                            <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                <button aria-label="Close panel" class="text-gray-300 hover:text-white transition ease-in-out duration-150">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="h-full flex flex-col space-y-6 py-6 bg-gray-800 shadow-xl overflow-y-scroll">
                                <header class="px-4 sm:px-6">
                                    <h2 class="text-lg leading-7 font-medium text-white">
                                        Report {this.props.incident._id}
                                    </h2>
                                </header>
                                <div class="relative flex-1 px-4 sm:px-6">
                                    <div class="absolute inset-0 px-4 sm:px-6">
                                        <div class="h-full border-2 border-dashed border-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default IncidentView;