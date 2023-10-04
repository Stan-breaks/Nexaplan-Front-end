import "./Sidebar.css"
function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/analytics">Analytics</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </aside>
  );
}
export default Sidebar