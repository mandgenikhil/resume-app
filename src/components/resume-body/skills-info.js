import React, { Component } from 'react'

export default class SkillsInfo extends Component {
    render() {
        return (
            <div>
            <div className="content p-2">
                <p className='title is-5 p-2'>Programming Languages</p>
                <p className='ml-3'><span>• Java</span><span> • ReactJs </span><span> • Javascript</span><span> • Python</span>  <span>• C#</span>   <span>• C</span></p>
                                              
            </div>
            <div className="content p-2">
                <p className='title is-5 p-2'>Web Frameworks</p>
                <p className='ml-3'><span>• MVC</span>  <span>• Django</span>   <span>• Node</span></p>
                                              
            </div>
            <div className="content p-2">
                <p className='title is-5 p-2'>Databases</p>
                <p className='ml-3'><span>• MS-SQL</span> <span>• My-SQL</span> <span>• Postgres-SQL</span> <span>• Mongo-DB</span> </p>
                                              
            </div>
            <div className="content p-2">
                <p className='title is-5 p-2'>Others</p>
                <p className='ml-3'><span>• Android</span><span>• Git</span> <span>• AWS</span> <span>• Docker</span> <span>• Kubernatives</span> </p>
                                              
            </div>
          
</div>
                    )
    }
}
