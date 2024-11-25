"use client";
import Link from 'next/link';
import '../styles/signup.login.css';

export default function SignIn() {
    async function makeSignUp(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = "9025802851";
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('cpassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            await fetch('http://localhost:5000/auth/signup', {
                method: "POST",
                body: JSON.stringify({
                    name, email, password, phoneNumber
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
        <form
            action=""
            className="shadow-custom w-80 md:w-96 bg-primary-sign my-[10vh] mx-auto rounded-md p-8"
            onSubmit={makeSignUp}
        >
            <h1 className='text-primary mb-6 text-3xl font-bold'>Sign Up</h1>
            <div className="flex flex-col gap-5 mb-6 relative custom">
                <input
                    className='peer border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none'
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    required
                />
                <label
                    className='absolute left-0 top-0 transition-all duration-200 transform peer-focus:translate-y-[-120%] peer-focus:text-xs peer-focus:top-[5px] peer-placeholder-shown:top-0 peer-placeholder-shown:text-base'
                    htmlFor="name"
                >
                    Name
                </label>
            </div>
            <div className="flex flex-col gap-5 mb-6  relative custom">
                <input
                    className='peer border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none'
                    type="email"
                    id="email"
                    name="email"
                    placeholder=""
                    required
                />
                <label
                    className='absolute top-[20%] left-0 translate-y-[-50%] text-seconadary text-base pointer-events-none transition-all duration-300 ease-linear peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-[-120%]'
                    htmlFor="email"
                >
                    Organization Email
                </label>
            </div>
            <div className="flex flex-col mb-6 gap-5 relative custom">
                <input
                    className='peer border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none'
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    required
                />
                <label
                    className='absolute top-[20%] left-0 translate-y-[-50%] text-seconadary text-base pointer-events-none transition-all duration-300 ease-linear peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-[-120%]'
                    htmlFor="password"
                >
                    Enter Password
                </label>
            </div>
            <div className="flex flex-col mb-6 gap-5 relative custom">
                <input
                    className='peer border-0 border-b-2 [border-color:#222222] w-full h-9 bg-transparent text-seconadary focus:outline-none'
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    placeholder=""
                    required
                />
                <label
                    className='absolute top-[20%] left-0 translate-y-[-50%] text-seconadary text-base pointer-events-none transition-all duration-300 ease-linear peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-[-120%]'
                    htmlFor="cpassword"
                >
                    Confirm Password
                </label>
            </div>
            <div className="flex justify-between items-center text-seconadary mt-3">
                <label className='flex items-center' htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    <p className='my-0 mx-1'>Remember me</p>
                </label>
            </div>
            <button
                className='w-full bg-primary text-white text-base font-medium rounded-md border-none p-2 mt-[10%] mb-[5%] cursor-pointer transition-all duration-300 ease-linear hover:bg-primary-dark'
                type="submit"
            >
                Sign Up
            </button>
            <div className="account">
                <p>
                    Have an account?{" "}
                    <Link className='text-primary underline' href="/login">
                        Sign In
                    </Link>
                </p>
            </div>
        </form>
    );
}
