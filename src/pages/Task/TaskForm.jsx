import { useDispatch, useSelector } from "react-redux/es/hooks/useSelector";
import { addTask } from "../../reducers/actions";
function TaskForm() {
    const dispatch=useDispatch();
    const tasks=useSelector(state=>state.tasks);
    const handleSubmit=task=>{
        dispatch(addTask(task))
    }
  return (
    <div>TaskForm</div>
  )
}
export default TaskForm