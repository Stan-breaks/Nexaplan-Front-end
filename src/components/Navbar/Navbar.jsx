import "./Navbar.css"

function Navbar() {
  return (
    <header>
      <div className="myLogo">NexaPlan</div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/tasks">Tasks</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div className="user-options">
        {/* User account options (e.g., profile, logout) */}
      </div>
    </header>
  );
}
export default Navbar