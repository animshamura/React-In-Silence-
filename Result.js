import React from 'react'

 function Result({course}) {
  return (
    <div>
      <div>
        <tr>
        <td>{course.title}</td>
        <td>{course.courseId}</td>
        <td>{course.section}</td>
        <td>{course.result}</td>
      </tr>
      </div>
        
    </div>
  )
}

export default Result
