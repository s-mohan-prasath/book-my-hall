import '../styles/signup.login.css';
import Link from 'next/link';

export default function SignIn() {
    return (
        <form action="" className="sign-in" >
            <h1>Sign Up</h1>
            <div className="group-input">
                <input type="name" id="name" name="name" placeholder="" />
                <label htmlFor="name">Name</label>
                <div className="error"></div>
            </div >
            <div className="group-input" >
                <input type="email" id="email" name="email" placeholder="" />
                <label htmlFor="email">Organization Email</label>
                <div className="error" ></div >
            </div >
            <div className="group-input" >
                <input type="password" id="password" name="password" placeholder="" />
                <label htmlFor="password">Enter Password</label>
                <div className="error" ></div >
            </div >
            <div className="group-input" >
                <input type="password" id="cpassword" name="cpassword" placeholder="" />
                <label htmlFor="cpassword">Confirm Password</label>
                <div className="error" ></div >
            </div >
            <div className="remember" >
                <label htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    <p>Remember me</p>
                </label>
            </div >
            <button type="submit">Sign Up</button>
            <div className="account" >
                <p>Have an account? <Link href={"/login"}> Sign In</Link></p>
            </div >
        </form >
    )
}