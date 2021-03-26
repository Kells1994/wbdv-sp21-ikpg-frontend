import React from 'react'

const SearchScreen = () => {
  return (
    <div>
      <h2>Student Search</h2>
      <input className="form-control" type="text" placeholder="Student name"/>
      <button className="btn btn-primary"
              onClick={() => alert('Search!!!')}>
        Search
      </button>
    </div>
  )
}

export default SearchScreen;