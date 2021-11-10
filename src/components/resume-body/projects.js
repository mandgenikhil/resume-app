import React, { Component } from 'react'


export default class ProjectsInfo extends Component {
    render() {
        return (
            <div>
                <div className="content p-2">
                    <p className='title is-5'> EMIE v2.1  </p>
                    <p className="subtitle is-6">Oct 2021- Present</p>
                    <p className="subtitle is-6">EMIE2.0 is an Web based tool built for curating and visualizing relationship knowledge data, with a preloaded data of meta-analytic findings of drivers for organizational performance outcomes. This Python web based tool has three pages: Instructions, Knowledge graph input, and Knowledge graph output.</p>
                    <button className="button">
                        <a href={"https://github.com/mandgenikhil/emie"}>
                            <span className="icon">

                                <i className="fa fa-lg fa-github"></i>

                            </span>
                            <span>GitHub</span>
                        </a>
                    </button>
                    <button className="button ml-1" >
                        <a href={"https://competent-wright-35e4ed.netlify.app/"}>
                            <span className="icon">

                                <i className="fa fa-lg fa-globe"></i>

                            </span>
                            <span>WebSite</span>
                        </a>
                    </button>


                </div>
                <div className="content p-2">
                    <p className='title is-5'> Voicebot  </p>
                    <p className="subtitle is-6">Aug 2021- Present</p>
                    <p className="subtitle is-6">Project aims to solve customer support queries and services through a Voicebot for insurance domain organizations.</p>
                    <button className="button">
                        <a href={"https://github.com/mandgenikhil/VoiceBot"}>
                            <span className="icon">

                                <i className="fa fa-lg fa-github"></i>

                            </span>
                            <span>GitHub</span>
                        </a>
                    </button>
                    <button className="button ml-1" >
                        <a href={"https://modest-clarke-dfef89.netlify.app/"}>
                            <span className="icon">

                                <i className="fa fa-lg fa-globe"></i>

                            </span>
                            <span>WebSite</span>
                        </a>
                    </button>


                </div>
                <div className="content p-2">
                    <p className='title is-5'> Covid Tracker India-Web App </p>
                    <p className="subtitle is-6">Jan 2020- Present</p>
                    <p className="subtitle is-6">Designed and develop Covid tracker app (India) to check the official count of active user using official India Covid data API’s</p>
                    <button className="button">
                        <a href={"https://github.com/mandgenikhil/covid-tracker.git"}>
                            <span className="icon">

                                <i className="fa fa-lg fa-github"></i>

                            </span>
                            <span>GitHub</span>
                        </a>
                    </button>
                    <button className="button ml-1" >
                        <a href={"https://romantic-golick-2d496e.netlify.app/"}>
                            <span className="icon">

                                <i className="fa fa-lg fa-globe"></i>

                            </span>
                            <span>WebSite</span>
                        </a>
                    </button>

                </div>
            </div>

        )
    }
}
