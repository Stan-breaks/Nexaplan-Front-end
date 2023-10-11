import Layout from "./Layout"
import Loader from "../components/Loader/Loader"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Home() {
  const tasksCount = useSelector(state => state.tasks.tasks.length);
  const projectsCount = useSelector(state => state.projects.projects.length);
  const user=useSelector(state=>state.user.user)
  console.log(tasksCount);
  return (
   
      <Layout>
         <div className="homepage">
        <div className="welcome-section">
          <h1>Welcome to NexaPlan!</h1>
          <p>Your Ultimate Task and Project Management Solution</p>
          <div className="illustration-section">
            {/* Add welcoming illustrations or graphics here */}
            <img src="welcome.png" alt="Welcome Illustration" />
          </div>
          <br/>
          
          <Link to="/taskList">
            <button className="cta-button">View Tasks ({tasksCount})</button>
          </Link>
          <Link to="/projects">
            <button className="cta-button">
              View Projects ({projectsCount})
            </button>
          </Link>
          
        </div>
        
        </div>
      </Layout>
    
  );
}
export default Home