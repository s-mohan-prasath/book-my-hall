import Link from 'next/link';
import '../styles/signup.login.css';

export default function SignIn() {
    return (
        <form action="" className="sign-in">
            <h1>Login</h1>
            <div className="group-input">
                <input type="email" id="email" name="email" placeholder="" />
                <label htmlFor="email">Organization Email</label>
                <div className="error"></div>
            </div>
            <div className="group-input">
                <input type="password" id="password" name="password" placeholder="" />
                <label htmlFor="password">Password</label>
                <div className="error"></div>
            </div>
            <div className="remember" >
                <label htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    <p>Remember me</p>
                </label>
                <a href="">Forgot password</a>
            </div>
            <button type="submit">Log In</button>
            <div className="account" >
                <p>Don't have an account? <Link href={"/signup"}> Sign Up</Link></p>
            </div >
        </form >
    )
}