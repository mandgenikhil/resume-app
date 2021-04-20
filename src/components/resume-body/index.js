import React, { Component } from 'react'
import ResumeSideBar from '../resume-side-bar'
import ResumeContentBar from '../resume-content-bar'
import ContactInfo from './contact-info'
import HobbiesInfo from './hobbies-info'

export default class ResumeBody extends Component {
    constructor(props) {
        super(props)
        {
            this.state =
            {
                isContact: true,
                isHobies: false,
                isCurrent: false,
                isPrevious: false,
                content: ContactInfo
            }
        }

        this.onClickFunction = this.onClickFunction.bind(this);
    }

    onClickFunction(id, value) {
        if (id === "isContact") {
            this.setState({
                isContact: true,
                isHobies: false,
                isCurrent: false,
                isPrevious: false,
                content: ContactInfo
            })
        }
        else if (id === "isHobies") {
            this.setState({
                isContact: false,
                isHobies: true,
                isCurrent: false,
                isPrevious: false,
                content: HobbiesInfo
            })

        }
        else if (id === "isCurrent") {
            this.setState({
                isContact: false,
                isHobies: false,
                isCurrent: true,
                isPrevious: false,

            })

        }
        else if (id === "isPrevious") {
            this.setState({
                isContact: false,
                isHobies: false,
                isCurrent: false,
                isPrevious: true,

            })

        }
    }


    render() {

        return (
            <div className="columns section">
                <div className="column is-one-quarter">
                    <ResumeSideBar onClickFunction={this.onClickFunction} content={this.state} />
                </div>
                <div className="column contentbox">
                    <ResumeContentBar Content={this.state.content} data />
                </div>

            </div>
        )
    }
}
