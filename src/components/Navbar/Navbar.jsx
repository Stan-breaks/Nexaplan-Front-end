import "./Navbar.css"

function Navbar() {
  return (
    <nav
      class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          NexaPlan
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a class="nav-link" href="/tasks">
              Tasks
            </a>
            <a class="nav-link" href="/projects">
              Projects
            </a>
          </div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="analytics">
                  Analytics
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="profile">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar