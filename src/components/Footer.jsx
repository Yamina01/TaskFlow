import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>TaskFlow</h2>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>How it Works</p>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className="link-group">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="footer-socials">
          <p>© 2025 TaskFlow. All rights reserved.</p>
          <div className="social-icons">
            <span>🐦</span>
            <span>📘</span>
            <span>💼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
