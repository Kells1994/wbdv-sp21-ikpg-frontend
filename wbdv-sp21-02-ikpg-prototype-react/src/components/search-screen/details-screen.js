import React from 'react'
import {Link, useParams} from 'react-router-dom'

const DetailsScreen = ({student}) => {
    const {advisor} = useParams();
  return (
    <div>
        <Link className="btn btn-light" to={`/search/${advisor}`}>
            Return Previous Search
        </Link>
        <h2>Student Details for {student.Name}</h2>
        <ul>
            <li>Advisor: {advisor}</li>
            <li>Math: {student.Math}</li>
            <li>English: {student.English}</li>
            <li>Spanish: {student.Spanish}</li>
        </ul>
    </div>
  );
}

export default DetailsScreen;