import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Layout from "../Layout";
import { setId } from "../../reducers/actions";

function TaskList() {
    
 const user=useSelector(state=>state.user.user)
 const dispatch=useDispatch()
 const [tasks, setTasks] = useState([]);
 const [categories,setCategories]=useState("")
 const [projectCategories,setProjectCategories]=useState('')
 const [showAll,setShowAll]=useState(true)
 const [showProject,setShowProject]=useState(false)
 const [showLabel,setShowLabel]=useState(false)


 useEffect(() => {
   fetch(`http://127.0.0.1:8000/taskList?user=${user}`)
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       setTasks(data);
     })
     .catch((error) => console.error("There was an error!", error));

    fetch(`http://127.0.0.1:8000/categoryList?user=${user}&label=project`)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      setProjectCategories(data)
    })

    fetch(`http://127.0.0.1:8000/categoryList?user=${user}&label=label`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
    
 }, []);
    const handleClick = (id) => {
      console.log(id);
      dispatch(setId(id));
      window.location.href="/taskView"
    };
    const handleProjectClick=()=>{
      setShowAll(false);
      setShowLabel(false);
      setShowProject(true);
    }
    const handleLabelClick=()=>{
      setShowAll(false);
      setShowLabel(true);
      setShowProject(false);
    }
    const handleAllClick=()=>{
     setShowAll(true)
     setShowLabel(false)
     setShowProject(false)
    }
    
  return (
    <Layout>
      <div className="tasklist">
        <h1>Welcome to your Task List</h1>
        <br />
        <div className="buttons">
          <button onClick={handleAllClick}>All tasks</button>
          <button onClick={handleProjectClick}>Projects Category</button>
          <button onClick={handleLabelClick}>Label Category</button>
          {showLabel ? (
            <div className="labelCategory">
              <br></br>
              <h2>Your Task Category List</h2>
              {categories.length > 0 ? (
                <ul>
                  {categories.map((category) => {
                    return (
                      <li key={category}>
                        <a href="#">{category}</a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul>
                  <li>No categories here</li>
                </ul>
              )}
            </div>
          ) : (
            <></>
          )}
          {showProject ? (
            <div className="projectCategory">
              <br></br>
              <h2>Your Task Project List</h2>
              {projectCategories.length > 0 ? (
                <ul>
                  {projectCategories.map((category) => {
                    return (
                      <li key={category}>
                        <a href="#">{category}</a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul>
                  <li>No categories here</li>
                </ul>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        {showAll ? (
          <>
            <br />
            <h2>Tasks</h2>
            <br />
            {tasks.length > 0 ? (
              <ul id="task">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} onView={handleClick} />
                ))}
              </ul>
            ) : (
              <p>No task found</p>
            )}
            <button onClick={() => (window.location.href = "/taskForm")}>
              Add task
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}
export default TaskList