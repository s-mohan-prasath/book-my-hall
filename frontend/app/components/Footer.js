import Link from "next/link";
import "../styles/Footer.css";

export default function () {
  return (
    <div>{/* outer */}
      <div>{/* inner */}
        <div>{/* left */}
          <h1>Book My Hall</h1>
          <p>A Cloud-based Workplace Management Software</p>
        </div>
        <div>{/* right */}
          <h6>sitemap</h6>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/venues">venues</Link></li>
            <li><Link href="/signup">SignUp</Link></li>
            <li><Link href="/login">LogIn</Link></li>
          </ul>
        </div>
      </div>
      <div>{/* down border */}
        <p>&copy 2024 Book My Hall. All rights reserved.</p>
      </div>
    </div>
  );
}
