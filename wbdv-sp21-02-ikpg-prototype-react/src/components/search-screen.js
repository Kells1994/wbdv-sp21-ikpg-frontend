import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import sheetsService from '../services/gsheets-service'

const SearchScreen = () => {
  // const { className } = useParams();
  const [advisory, setAdvisory] = useState(null);
  const [advisors, setAdvisors] = useState(null);

  const [advisorySearch, setAdvisorySearch] = useState('');

  const loadSheet = async (advisorySearch) => {
    const doc = await sheetsService.getAdvisoryRows(advisorySearch);
    setAdvisory(doc);
    console.log(advisory);
  }

  const getAdvisoryList = async () => {
    const doc = await sheetsService.getAdvisoryList();
    let advs = [];
    for (let name in doc) {
      advs.push(name);
    }
    setAdvisors(advs.sort());
  }

  return (
    <div>
      <h2>Student Search</h2>
      <input className="form-control"
             value={advisorySearch}
             type="text"
             onChange={(e) =>
               setAdvisorySearch(e.target.value)
             }
      />
      <button className="btn btn-primary"
              onClick={() => loadSheet(advisorySearch)}>
        Search
      </button>

      <button className="btn btn-secondary"
              onClick={() => getAdvisoryList()}>
        Get advisory list
      </button>

      {
        advisors !== null &&
        <div>
          <h4>Available Advisories</h4>
          <ul className="list-group">
            {
              advisors.map(advisor =>
                <li className="list-group-item">
                  {advisor}
                </li>
              )
            }
          </ul>
        </div>
      }
      <div>
        <ul className="list-group">
          {
            advisory !== null &&
            advisory.map(row =>
              <li className="list-group-item">
                <Link to={`/details/{someID}`}>
                  {`${row.Name} ${row.Math} ${row.English} ${row.Spanish} `}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchScreen;