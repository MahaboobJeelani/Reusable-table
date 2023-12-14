import React from 'react'
import TableComp from './Components/Table'

const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Bob Johnson', age: 40 },
  { id: 4, name: 'Alice Brown', age: 35 },
  { id: 5, name: 'Charlie Davis', age: 50 },
  { id: 6, name: 'Eva Green', age: 28 },
  { id: 7, name: 'Frank Lee', age: 45 },
  { id: 8, name: 'Grace Kim', age: 32 },
  { id: 9, name: 'Henry Chen', age: 55 },
  { id: 10, name: 'Isabel Perez', age: 27 },
  { id: 11, name: 'Jack Wang', age: 42 },
  { id: 12, name: 'Karen Liu', age: 29 },
  { id: 13, name: 'Larry Zhang', age: 38 },
  { id: 14, name: 'Maggie Wu', age: 31 },
  { id: 15, name: 'Nancy Hu', age: 47 },
];


const App = () => {
  return (
    <div>
      <TableComp data={data}/>
    </div>
  )
}

export default App