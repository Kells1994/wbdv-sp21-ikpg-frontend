import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailsScreen = ({ student }) => {
  const { advisor } = useParams();
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <h5>{student.Name}</h5>
          <img
            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
            alt="Profile picture"
            width="200"
            height="150"/>
          <ul className="list-group">
            <li className="list-group-item">
              Grade: 12
            </li>
            <li className="list-group-item">
              Advisor: {advisor}
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>Current Grades</h5>
          <img
            src="https://academy.allaboutbirds.org/wp-content/uploads/2016/02/Favorite-Subjects-graph.jpg"
            alt="Profile picture"
            width="500"
            height="300"/>
          <span>Math: {student.Math} ... </span>
          <span>English: {student.English} ... </span>
          <span>Spanish: {student.Spanish} ... </span>
        </div>
        <div className="col-4">
          <h5>Grades Over Time</h5>
          <img
            src="https://datavizcatalogue.com/methods/images/top_images/line_graph.png"
            alt="Class grades bar chart"
            width="500"
            height="300"/>
        </div>
        <div className="col-2">
          <h5>General Score</h5>
          <img
            src="https://modalsurvey.pantherius.com/documentation/upload/progress_circle.png"
            alt="Class grades bar chart"
            width="250"
            height="200"/>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h4>Check-ins</h4>
        </div>
        <div className="col-4">
          <h4>Events and Tasks</h4>
        </div>
      </div>
    </div>
  );
}

export default DetailsScreen;