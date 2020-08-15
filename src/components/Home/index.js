import React, { Component } from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="w-full h-screen" style={{ position: 'relative' }}>
                    <div className="w-full h-screen" style={{ position: 'absolute', backgroundImage: 'url("http://localhost:3000/banner.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50% 50%', filter: 'blur(3px)' }}></div>
                    <div class="relative overflow-hidden">
                        <div class="relative">
                            <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div class="text-center">
                                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                                        SkyBlock Simplified
                                        <br />
                                        <span class="text-indigo-600">Slogan here</span>
                                    </h2>
                                    <p class="mt-3 text-base font-semibold text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 text-xl">
                                        We are a massive community striving to make skyblock better everyday.
                                    </p>
                                    <div class="t-5 sm:mt-8 sm:flex justify-center">
                                        <div class="rounded-md shadow">
                                            <Link to="/scammers" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                                View Scammers
                                            </Link>
                                        </div>
                                        <div class="mt-3 sm:mt-0 sm:ml-3">
                                            <a href="/discord" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                                Join Discord
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;