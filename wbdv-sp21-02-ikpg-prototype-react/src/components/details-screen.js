import React from 'react'
import { useHistory } from 'react-router-dom'

const DetailsScreen = () => {
  const history = useHistory();
  return (
    <div>
      <button className="btn btn-light"
              onClick={() => {
                history.goBack()
              }}>
        Back
      </button>
      <h2>Student Results</h2>
    </div>
  );
}

export default DetailsScreen;