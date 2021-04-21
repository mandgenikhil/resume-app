import React, { Component } from 'react'

export default class SkillsInfo extends Component {
    render() {
        return (
            <div>
            <div className="content p-1">
                <p className='title is-5'>Programming Languages</p>
                <p><span>• Python</span>  <span>• C#</span>   <span>• C</span></p>
                                              
            </div>
            <div className="content p-1">
                <p className='title is-5'>Web Frameworks</p>
                <p><span>• MVC</span>  <span>• Django</span>   <span>• Node</span></p>
                                              
            </div>
            <div className="content p-1">
                <p className='title is-5'>Databases</p>
                <p><span>• MS-SQL</span> <span>• My-SQL</span> <span>• Postgres-SQL</span> <span>• Mongo-DB</span> </p>
                                              
            </div>
            <div className="content p-1">
                <p className='title is-5'>Others</p>
                <p><span>• Git</span> <span>• AWS</span> <span>• Docker</span> <span>• Kubernatives</span> </p>
                                              
            </div>
          
</div>
                    )
    }
}
