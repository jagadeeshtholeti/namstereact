const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; 2025 Your Company. All Rights Reserved.
        </p>
        <div className="footer__links">
          <a className="footer__link" href="/privacy-policy">
            Privacy Policy
          </a>
          <a className="footer__link" href="/terms-of-service">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;