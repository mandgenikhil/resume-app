import React, { Component } from 'react'
import ResumeContentBar from '../resume-content-bar'
import ContactInfo from './contact-info'
import HomeInfo from './home-info'
import SkillsInfo from './skills-info'
import WorkExInfo from './work-ex-info'
import EducationInfo from './eduaction-info'
import './index.css'

export default class ResumeBody extends Component {
    constructor(props) {
        super(props)
        
            this.state =
            {
                isHome: true,
                isWorkEx: false,
                isEducation: false,
                isSkills: false,
                isContact: false,
                content: HomeInfo
            }
        

        this.onClickFunction = this.onClickFunction.bind(this);
    }

    onClickFunction(id, value) {
        if (id === "isHome") {
            this.setState({
                isHome: true,
                isWorkEx: false,
                isEducation: false,
                isSkills: false,
                isContact: false,
                content: HomeInfo
            })
        }
        else if (id === "isWorkEx") {
            this.setState({
                isHome: false,
                isWorkEx: true,
                isEducation: false,
                isSkills: false,
                isContact: false,
                content: WorkExInfo
            })

        }
        else if (id === "isEducation") {
            this.setState({
                isHome: false,
                isWorkEx: false,
                isEducation: true,
                isSkills: false,
                isContact: false,
                content: EducationInfo

            })

        }
        else if (id === "isContact") {
            this.setState({
                isHome: false,
                isWorkEx: false,
                isEducation: false,
                isSkills: false,
                isContact: true,
                content: ContactInfo

            })

        }
        else if (id === "isSkills") {
            this.setState({
                isHome: false,
                isWorkEx: false,
                isEducation: false,
                isSkills: true,
                isContact: false,
                content: SkillsInfo

            }


            )



        }
    }


    render() {

        return (
            <div className='bgdata'><div className="tabs is-centered is-size-5">
                <ul>
                    <li className={this.state.isHome === true ? "is-active" : ""} onClick={() => this.onClickFunction("isHome", false)}><a href >Home</a></li>
                    <li className={this.state.isWorkEx === true ? "is-active" : ""} onClick={() => this.onClickFunction("isWorkEx", false)}><a href>Work Experience</a></li>
                    <li className={this.state.isEducation === true ? "is-active" : ""} onClick={() => this.onClickFunction("isEducation", false)}><a href>Education</a></li>
                    <li className={this.state.isSkills === true ? "is-active" : ""} onClick={() => this.onClickFunction("isSkills", false)}><a href>Skills</a></li>
                    <li className={this.state.isContact === true ? "is-active" : ""} onClick={() => this.onClickFunction("isContact", false)}><a href>Contact</a></li>
                </ul>
            </div>
                <div className="">
                    <ResumeContentBar Content={this.state.content} />
                </div>
            </div>
        )
    }
}
