import React, { Component } from 'react'

export default class ResumeSideBar extends Component {


    render() {
        return (
            <a href side className="menu">
                <p className="menu-label">
                    About Me
  </p>
                <ul href className="menu-list">
                    <li><a className={this.props.content.isContact === true ? "is-active" : ""} onClick={() => this.props.onClickFunction("isContact", false)} href>Contact</a></li>
                    <li><a href className={this.props.content.isHobies === true ? "is-active" : ""} onClick={() => this.props.onClickFunction("isHobies", false)}>Hobbies</a></li>
                </ul>
                <p className="menu-label">
                    Work Experience
  </p>
                <ul href className="menu-list">
                    <li><a href className={this.props.content.isCurrent === true ? "is-active" : ""} onClick={() => this.props.onClickFunction("isCurrent", false)} >Current</a></li>
                    <li>
                        <a href className={this.props.content.isPrevious === true ? "is-active" : ""} onClick={() => this.props.onClickFunction("isPrevious", false)} >Previous</a>

                    </li>

                </ul>

            </a>
        )
    }
}
