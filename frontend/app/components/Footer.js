import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-title">Book My Hall</h1>
          <p className="footer-description">A Cloud-based Workplace Management Software</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutubeSquare size={24} />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h6 className="footer-sitemap-title">Sitemap</h6>
          <ul className="footer-sitemap-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/venueDetails">Venues</Link></li>
            <li><Link href="/signup">SignUp</Link></li>
            <li><Link href="/login">LogIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2024 Book My Hall. All rights reserved.</p>
      </div>
    </footer>
  )
}
