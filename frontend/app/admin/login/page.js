"use client";
import Link from 'next/link';
import '../../styles/signup.login.css';

export default function SignIn() {

    async function makeAdminLogIn(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await fetch('http://localhost:5000/admin/auth/signin', {
                method: "POST",
                body: JSON.stringify({
                    email, password
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => {
                return res.json()
            }).then(data => {
                console.log(data)
            })
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <form action="" onSubmit={makeAdminLogIn} className="shadow-custom w-80 md:w-96 bg-primary-sign my-[10vh] mx-auto rounded-md p-8">
            <h1 className='text-primary mb-8 text-3xl font-bold'>Admin Login</h1>
            <div className="flex flex-col gap-5 relative custom">
                <input className='border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none text-s[15px] ' type="email" id="email" name="email" placeholder="" />
                <label className='absolute left-0 top-0 transition-all duration-300 ' htmlFor="email">Organization Email</label>
                <div className="text-center h-5 text-xl"></div>
            </div>
            <div className="flex flex-col gap-5 relative custom">
                <input className='border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none text-s[15px] ' type="password" id="password" name="password" placeholder="" />
                <label className='absolute left-0 top-0 transition-all duration-300 ' htmlFor="password">Password</label>
                <div className="text-center h-5 text-xl"></div>
            </div>
            <div className="flex justify-between items-center text-seconadary " >
                <label className='flex items-center' htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    <p className='my-0 mx-1'> Remember me</p>
                </label>
                <Link className='text-seconadary no-underline' href="">Forgot password</Link>
            </div>
            <button className='w-full bg-primary text-white text-base font-medium rounded-md border-none p-2 mt-[10%] mb-[5%] cursor-pointer transition-all duration-300 ease-linear hover:bg-primary-dark' type="submit">Log In</button>

        </form >
    )
}