import Link from "next/link";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link href="/">Book My Hall</Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/signup">SignUp</Link> </li>
                    <li><Link href="/login">LogIn</Link></li>
                </ul>
            </nav >

        </>
    )
} 