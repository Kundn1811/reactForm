import React from 'react'

const TableList = ({item}) => {
  return (
    <tr>
        <td>{item.username}</td>
        <td>{item.age}</td>
        <td>{item.salary}</td>
        <td>{item.department}</td>
       
    </tr>
  )
}

export default TableList