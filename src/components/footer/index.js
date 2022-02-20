import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="content has-text-centered ">
              <p>
                <strong>Resume</strong> by <a href="https://github.com/mandgenikhil">Nikhil mandge</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. 
              </p>
            </div>
          </footer>
        )
    }
}
