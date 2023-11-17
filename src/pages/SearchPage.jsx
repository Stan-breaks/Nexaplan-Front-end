import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

function SearchPage() {
  const user=useSelector(state=>state.user.user)
  const search=useSelector(state=>state.search.search);
  const [result,setResult]=useState([])
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/taskList?user=${user}&search=${search}`)
    .then(response=>response.json())
    .then(data=>{
      setResult(data)
    })
  },[])
  return (
    <div className="search-page">
      <h1 className="title">Search Results</h1>
      {results.map((item, index) => (
        <div key={index} className="result-item">
          {item.taskName && <p>Task Name: {item.taskName}</p>}
          {item.projectName && <p>Project Name: {item.projectName}</p>}
          </div>
      ))}
    </div>
  );
}
export default SearchPage