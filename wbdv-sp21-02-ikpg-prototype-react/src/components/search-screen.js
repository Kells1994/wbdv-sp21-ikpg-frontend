import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import sheetsService from '../services/gsheets-service'

const SearchScreen = () => {
  const { className } = useParams();
  const [searchResults, setSearchResults] = useState({});
  useEffect(() => {
    findStudentsByClass(className);
  });

  const findStudentsByClass = (className) => {
    sheetsService.findStudentsByClass(className)
      .then((results) => {
        setSearchResults(results);
      })
  }

  return (
    <div>
      <h2>Student Search</h2>
      <input className="form-control" type="text" placeholder="Student name"/>
      <button className="btn btn-primary"
              onClick={() => alert('Search!!!')}>
        Search
      </button>

      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to={`/details/{someID}`}>
              Kim
            </Link>
          </li>
          <li className="list-group-item">
            James
          </li>
          <li className="list-group-item">
            Carlos
          </li>
          <li className="list-group-item">
            Louis
          </li>
        </ul>
        <p>{searchResults.toString()}</p>
      </div>
    </div>
  )
}

export default SearchScreen;