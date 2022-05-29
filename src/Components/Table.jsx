import React, { useEffect } from 'react'
import TableList from './TableList'
const Table = ({data}) => {
    useEffect(()=>{
        console.log(data)
    },[])
    console.log(data)
  return (
    <div>
        <table>
            <tr>
                <th>username</th>
                <th>age</th>
                <th>salary</th>
                <th>department</th>
               
            </tr>
           { data.map((el)=>( <TableList item={el}/> ))}
        </table>
    </div>
  )
}

export default Table