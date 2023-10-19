import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import  { fetchTodos } from './TodoSlice'
const App = () => {
  const dispatch=useDispatch()
  const output=useSelector(state=>state.todo);
  console.log(output);
  return (
    <div>
      <button onClick={()=>dispatch(fetchTodos())}>Fetch Todos</button>

    </div>
  )
}

export default App
