import React, { Component } from 'react';

class GuildSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mutualGuilds: [],
            publicGuilds: [],
            selectedGuild: ''
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.selectGuild = this.selectGuild.bind(this);

        this.timeout = null;
    }

    componentWillMount() {
        this.setState({
            mutualGuilds: this.fetchMutualGuilds(),
            publicGuilds: this.fetchPublicGuilds()
        });
    }

    fetchMutualGuilds() {
        return [{ id: '84574893845748399', name: 'Bruh moment' }, { id: '84574893845748399', name: 'Bruh moment' }, { id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' },{ id: '84574893845748399', name: 'Bruh moment' }]
    }

    fetchPublicGuilds() {
        return [{ id: '844539844933483444', name: 'Bruh momen 3meket' }]
    }

    selectGuild(id) {
        localStorage.setItem('selectedGuild', id);

        this.setState({
            selectedGuild: id
        });
    }

    renderGuild(guild, index, type) {
        const roundedTop = index === 0;
        let roundedBottom = false;

        if (type === "mutual") {
            roundedBottom = index + 1 === this.state.mutualGuilds.length;
        } else if (type === "public") {
            roundedBottom = index + 1 === this.state.publicGuilds.length;
        }

        return (
            <button onClick={this.selectGuild.bind(null, guild.id)} className={`bg-gray-700 hover:bg-gray-800 w-full p-3 relative ${roundedTop ? "rounded-t-md" : ""} ${roundedBottom ? "rounded-b-md" : ""}`} key={guild.id}>
                <div class="flex items-center space-x-3">
                    <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                    <span class="font-bold text-white block truncate">
                        {guild.name}
                    </span>
                </div>

                {this.state.selectedGuild === guild.id ? <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </span> : null}
            </button>
        )
    }

    onNameChange(e) {
        clearTimeout(this.timeout);

        const name = e.target.value;

        this.timeout = setTimeout(() => {
            this.fetchPublicGuilds(name)
        }, 2000);
    }

    render() {
        return (
            <div class={`${this.props.show ? "" : "hidden"} fixed h-screen bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 flex items-center justify-center`}>
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                </div>
                <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full overflow-scroll" style={{maxHeight: '80vh'}}>
                                <h3 class="text-lg leading-6 font-medium text-white" id="modal-headline">
                                    Select a Default Guild
                                </h3>
                                <div class="mt-2">
                                    <input onChange={this.onNameChange} class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Guild Name" />

                                    <h3 className="text-xs mt-5 text-white font-bold">
                                        Your Guilds
                                    </h3>

                                    <div className="mt-3 divide-y divide-gray-900">
                                        {this.state.mutualGuilds.map((guild, index) => this.renderGuild(guild, index, "mutual"))}
                                    </div>

                                    <h3 className="text-xs mt-5 text-white font-bold">
                                        Your Query
                                    </h3>

                                    <div className="mt-3 divide-y divide-gray-900">
                                        {this.state.publicGuilds.map((guild, index) => this.renderGuild(guild, index, "public"))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:w-auto">
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Close
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuildSelect;