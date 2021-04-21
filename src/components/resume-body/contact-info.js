import React, { Component } from 'react'

export default class ContactInfo extends Component {
    render() {
        return (
            < >
                <div className='columns p-2'>
                    <div className='column'>
                        <div className="field">
                            <label className="label">First Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-info">
                                    Send
    </button>
                            </p>
                        </div>

                    </div>
                    <div className='column'>

                    </div>

                    <div className='column '>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input " type="email" placeholder="Email input" value="" />

                            </div>
                            <div className="field">
                                <label className="label">Phone Number</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Text input" />
                                </div>
                            </div>
                            {/* <p className="help is-danger">This email is invalid</p> */}
                        </div>

                    </div>
                    <div className='column'>

                    </div>
                    <div className='column'>

                    </div>


                </div>

            </>
        )
    }
}
