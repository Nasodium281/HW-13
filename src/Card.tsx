import React from 'react'

type CardProps = {
    teacherName: string;
    courseName: string;
    description: string;
    rating: string;
  };

type StudentProps = {
  studentID:string,
  age:number,
  grade:string,
  room:string,
  name:string
}

const Card = (props) => {
    return (
      <div>
          <p>{props.teacherName}</p>
          <p>{props.courseName}</p>
          <p>{props.description}</p>
          <p>Rating {props.rating}</p>
      </div>
    )
  }
 
  export default Card