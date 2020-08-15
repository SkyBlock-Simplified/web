import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [{ name: 'bruh', value: 0 }],
            name: '',
            selected: 0,
            open: false
        }

        this.nameChange = this.nameChange.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.openFilter = this.openFilter.bind(this);
    }

    openFilter() {
        this.setState({
            open: !this.state.open
        });
    }

    nameChange(e) {
        clearTimeout(this.timeout);
        const name = e.target.value;
        this.timeout = setTimeout(() => this.props.run(name, this.state.selected), 1000);

        this.setState({
            name: e.target.value
        });
    }

    changeFilter(id) {
        if (!this.state.open) return;

        this.setState({
            selected: id
        }, () => this.openFilter());
        //this.props.run(this.state.name, id);
    }

    renderFilter(filter) {
        return (
            <li onClick={this.changeFilter.bind(null, filter.value)} className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-700">
                <div class="flex items-center space-x-3">
                    <span class="font-normal text-white block truncate">
                        {filter.name}
                    </span>
                </div>

                {this.state.selected === filter.value ? <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </span> : null}
            </li>
        )
    }

    render() {
        return (
            <div class="bg-gray-900">
                <div class="max-w-8xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <h2 class="mt-2 text-4xl leading-10 font-semibold font-display text-white">Scammer List</h2>

                        <div class="mt-8 lg:mt-0">
                            <div class="max-w-lg lg:ml-auto lg:max-w-xl">
                                {/* eslint-disable-next-line */}
                                <a class="mt-3 flex items-start rounded-lg text-base leading-6 font-medium text-white">
                                    <div className="flex flex-row w-full h-full">
                                        <input onChange={this.nameChange} defaultValue={this.props.name} className="w-full rounded-lg h-16 mx-auto focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg mb-5 text-black" placeholder="Search"></input>

                                        <div class="w-1/5 ml-2">
                                            <div class="relative">
                                                <span class="inline-block w-full h-full rounded-md shadow-sm bg-gray-800">
                                                    <button onClick={this.openFilter} type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="cursor-default relative w-full rounded-md bg-lightDark pl-3 pr-10 h-16 text-left sm:text-sm sm:leading-5 shadow-lg">
                                                        <div class="flex items-center space-x-3">
                                                            <span className="text-lg text-white font-medium">{this.state.filters.find(filter => filter.value === this.state.selected).name}</span>
                                                        </div>
                                                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                                                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </span>

                                                {this.state.open ? <div style={{ zIndex: 999999 }} class="absolute mt-1 w-full rounded-md bg-gray-800 shadow-lg">
                                                    <ul tabindex="-1" role="listbox" class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
                                                        {this.state.filters.map((filter, index) => this.renderFilter(filter, index))}
                                                    </ul>
                                                </div> : null}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;