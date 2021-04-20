import React, { Component } from 'react'
import Header from '../../components/header/'
import Footer from '../../components/footer/'
import ResumeBody from '../../components/resume-body/'

export default class Resume extends Component {

    render() {
        return (
            <div>
                <Header />
                <ResumeBody />
                <Footer />

            </div>
        )
    }
}
