import React, { Component } from 'react'
import './index.css'
import Me from '../../assests/images/me.jpeg'

export default class Header extends Component {
    render() {
        return (
            <div className='circle'>
            <img alt='' className='circular-img' src={Me} />
            </div>
        )
    }
}
