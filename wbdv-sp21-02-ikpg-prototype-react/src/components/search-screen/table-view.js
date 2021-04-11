import React from 'react'

const TableView = ({ students }) => {
  console.log(students);
  return (
    <table className={"table table-hover"}>
      <thead>
        <tr>
          <th scope="col">#</th>
        </tr>
      </thead>
    </table>
  )
}

export default TableView;