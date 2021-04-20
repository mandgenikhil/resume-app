import React, { Component } from 'react'
import './index.css'
import Me from '../../assests/images/me.jpeg'

export default class Header extends Component {
    render() {
        return (
            <div className='columns'>
                <div className='column'>
                    <div className=''>
                        </div>
                <img alt='' className='circular-img' src={Me} />
                </div>
                <div className='column'>
                </div>

           
            </div>
        )
    }
}
