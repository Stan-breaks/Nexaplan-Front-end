import "./Footer.css"
function Footer() {
  return (
    <footer className="footer footer-dark" >
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/stanley-mwendwa-5a594b233/">
          <i class="fa-brands fa-linkedin"></i>
          Linkedin
        </a>
        <a href="mailto:stanleymwendwa03@gmail.com">
          <i class="fa-solid fa-envelope"></i>
          Gmail
        </a>
        <a href="https://github.com/Stan-breaks">
          <i class="fa-brands fa-github"></i>
          Github
        </a>
      </div>
      <div className="copyright">
        &copy; 2023 NexaPlan. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer