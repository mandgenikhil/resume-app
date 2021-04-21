import React, { Component } from 'react'
import './index.css'
import Me from '../../assests/images/me.jpeg'

export default class Header extends Component {
    render() {
        return (
            <div className='bg'>
                <div className='level-right p-2'>
                    <p className='level-item'> <a href='https://facebook.com/mandge/' class="icon ">
                        <i class="fa fa-lg fa-facebook"></i>
                    </a></p>
                    <p className='level-item'><a href='https://instagram.com/nikhil_mandge/' class="icon has-text-danger">
                        <i class="fa fa-lg fa-instagram"></i>
                    </a></p>
                    <p className='level-item'><a href='https://linkedin.com/in/nikhil-mandge-91450b112' class="icon has-text-info">
                        <i class="fa fa-lg fa-linkedin"></i>
                    </a></p>
                    <p className='level-item'><a href='www.gmail.com' class="icon has-text-dark">
                        <i class="fa fa-lg fa-google"></i>
                    </a></p>
                    <p className='level-item'></p>

                </div>
                <div className='has-text-centered'>
                    <img alt='' className='circular-img' src={Me} />
                    <div className='is-size-3'>
                        Nikhil Mandge
                        </div>
                </div>

            </div>
        )
    }
}
