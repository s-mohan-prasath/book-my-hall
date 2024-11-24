"use client";
import Link from 'next/link';
import '../styles/signup.login.css';

export default function SignIn() {
    return (
        <form action="" className="shadow-custom w-80 md:w-96 bg-primary-sign my-[10vh] mx-auto rounded-md p-8">
            <h1 className='text-primary mb-6 text-3xl font-bold'>Login</h1>
            <div className="flex flex-col gap-5 relative custom">
                <input className='peer border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none  ' type="email" id="email" name="email" placeholder="" />
                <label className='absolute top-[20%] left-0 translate-y-[-50%] text-seconadary text-base pointer-events-none transition-all duration-300 ease-linear 
                peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-[-120%]' htmlFor="email">Organization Email</label>
                <div className="text-center h-5 text-xl"></div>
            </div>
            <div className="flex flex-col gap-5 relative custom">
                <input className='peer border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none ' type="password" id="password" name="password" placeholder="" />
                <label className='absolute top-[20%] left-0 translate-y-[-50%] text-seconadary text-base pointer-events-none transition-all duration-300 ease-linear 
                peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-[-120%]' htmlFor="password">Password</label>
                <div className="text-center h-5 text-xl"></div>
            </div>
            <div className="flex justify-between items-center text-seconadary mt-3" >
                <label className='flex items-center' htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    <p className='my-0 mx-1'> Remember me</p>
                </label>
                <Link className='text-seconadary no-underline' href="">Forgot password</Link>
            </div>
            <button className='w-full bg-primary text-white text-base font-medium rounded-md border-none p-2 mt-[10%] mb-[5%] cursor-pointer transition-all duration-300 ease-linear hover:bg-primary-dark' type="submit">Log In</button>
            <div className="text-center" >
                <p>Don't have an account? <Link className='text-primary underline' href={"/signup"}> Sign Up</Link></p>
            </div >
        </form >
    )
}