import React, { Component } from 'react'
import Result from './Result'
export class ListRendering extends Component {
    
  render() {
    const courses= [
        {
            title : 'Microprocessor',
            courseId : 'CSE303',
            section : 'D1',
            result : '4.00'
            
          },
          {
            title : 'Data Communication',
            courseId : 'CSE307',
            section :' D1',
            result : '4.00'
            
          },
          {
            title : 'Software Engineering',
            courseId : 'CSE403',
            section : 'D1',
            result :' 4.00'
            
          },
          {
            title : 'Machine Learning',
            courseId :'CSE413',
            section : 'D1',
            result : '4.00'
            
          }
    ]
          const courseList = courses.map( course => <Result course={course}/>)
          return <div>{courseList}</div>
    }

  }


export default ListRendering
