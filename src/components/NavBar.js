import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            togglePullout: false,
            toggleDropdown: false,
            guildListOpen: false,
            selectedGuild: '328847247832',
            guilds: [{ name: 'bruh', id: '328847247832' }, { name: 'te', id: '3324434' }, { name: 'bru33h', id: '3288472478342342' }]
        }

        this.togglePullout = this.togglePullout.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.openFilter = this.openFilter.bind(this);
        this.renderGuild = this.renderGuild.bind(this);
    }

    togglePullout() {
        this.setState({
            togglePullout: !this.state.togglePullout
        });
    }

    toggleDropdown() {
        this.setState({
            toggleDropdown: !this.state.toggleDropdown
        });
    }

    openFilter() {
        this.setState({
            guildListOpen: !this.state.guildListOpen
        })
    }

    changeFilter(id) {
        if (!this.state.guildListOpen) return;

        this.setState({
            selected: id
        }, () => this.openFilter());
        //this.props.run(this.state.name, id);
    }

    renderGuild(guild) {
        return (
            <li onClick={this.changeFilter.bind(null, guild.id)} role="option" class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-700">
                <div class="flex items-center space-x-3">
                    <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                    <span class="font-normal block truncate">
                        {guild.name}
                    </span>
                </div>

                {this.state.selectedGuild === guild.id ? <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </span> : null}
            </li>
        )
    }

    render() {
        return (
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={this.togglePullout} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <Link to="/" class="flex-shrink-0">
                                <img class="block lg:hidden h-8 w-auto rounded-lg" src="/sbs_logo.gif" alt="Sbs logo" />
                                <img class="hidden lg:block h-8 w-auto rounded-lg" src="/sbs_logo.gif" alt="Sbs logo" />
                            </Link>

                            <Link to="/" className="ml-2">
                                <h1 className="text-white text-2xl font-bold">SkyBlock Simplified</h1>
                            </Link>

                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex">
                                    <Link to="/scammers" class={`px-3 py-2 rounded-md text-sm font-medium leading-5 text-white ${document.location.pathname.startsWith("/scammers") ? "bg-gray-900" : "text-gray-300"} focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out`}>Scammers</Link>
                                    <Link to="/reputation" class={`ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white ${document.location.pathname.startsWith("/reputation") ? "bg-gray-900" : "text-gray-300"} hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out`}>Reputation</Link>
                                    <Link to="/discord" class={`ml-2 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white ${document.location.pathname.startsWith("/discord") ? "bg-gray-900" : "text-gray-300"} hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out`}>Discord</Link>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>

                            <div class="ml-3 relative">
                                <div>
                                    <button onClick={this.toggleDropdown} class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <img class="h-8 w-8 rounded-full" src="https://cdn.discordapp.com/avatars/296084893459283968/1cb8c2f8f3de5fcc737d44e181f2a448.webp?size=256" alt="" />
                                    </button>
                                </div>
                                <div class={`${this.state.toggleDropdown ? "" : "hidden"} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`} style={{ zIndex: 1 }}>
                                    <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <a href="/scammers" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Admin Panel</a>
                                        <a href="/reputation" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Reports</a>
                                        <a href="/discord" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={this.state.togglePullout ? "" : "hidden sm:hidden"}>
                    <div class="px-2 pt-2 pb-3">
                        <a href="#" class={`block px-3 py-2 rounded-md text-base font-medium text-white ${document.location.pathname.startsWith("/scammers") ? "bg-gray-900" : ""} focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out`}>Scammers</a>
                        <a href="#" class={`mt-1 block px-3 py-2 rounded-md text-base font-medium text-white ${document.location.pathname.startsWith("/reputation") ? "bg-gray-900" : ""} text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out`}>Reputation</a>
                        <a href="#" class={`mt-1 block px-3 py-2 rounded-md text-base font-medium text-white ${document.location.pathname.startsWith("/discord") ? "bg-gray-900" : ""} text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out`}>Discord</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;