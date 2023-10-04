import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* Add more footer links as needed*/}
        </ul>
      </div>
      <div className="social-icons">
        {/* Social media icons (e.g., Facebook, Twitter) */}
      </div>
      <div className="copyright">
        &copy; 2023 NexaPlan. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer