import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import { setId } from "../reducers/actions";

function SearchPage() {
  const user = useSelector((state) => state.user.user);
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(
      `https://nexaplanbackend.onrender.com/search?user=${user}&search=${search}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        console.log(data);
      });
  }, []);
  console.log(search);
  console.log(result);
  const handleTask = (id) => {
    dispatch(setId(id));
    window.location.href = "taskView";
  };
  const handleProject = (id) => {
    dispatch(setId(id));
    window.location.href = "projectView";
  };
  return (
    <Layout>
      <div className="search-page">
        <h1 className="title">Search Results</h1>
        {result.map((item, index) => (
          <div
            key={index}
            className="result-item"
            onClick={() => {
              if (item.taskName) {
                handleTask(item.id);
              } else if (item.projectName) {
                handleProject(item.id);
              }
            }}
          >
            {item.taskName && <p>Task Name: {item.taskName}</p>}
            {item.projectName && <p>Project Name: {item.projectName}</p>}
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default SearchPage;

