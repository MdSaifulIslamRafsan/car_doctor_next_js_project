"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {signIn} from 'next-auth/react';
import { FaFacebook, FaGithub} from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
    const route = useRouter()
    const handleSignIn = async(event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
       const response = await signIn('credentials',{
        email,
        password,
        redirect: false,
       })
        console.log(response)
        if(response.status === 200){
            route.push("/");
        }

    }    
    return (
        <div>
            <div className="grid grid-cols-2 gap-12">
                <div className="">
                    <Image src="/assets/images/login/login.svg" alt='signUp img'  width={500}
                    height={500}></Image>
                </div>
                <form onSubmit={handleSignIn} className="border-2 p-10 shadow-xl rounded-lg space-y-5">
                    <h1 className='text-center text-3xl'>Login</h1>
                
                   <div className="">
                   <label htmlFor="email">Email</label>
                   <input className='input input-bordered w-full' type="email" name="email" placeholder='example@gmail.com' id="email" />
                   </div>
                   <div className="">
                   <label htmlFor="password">Password</label>
                   <input className='input input-bordered w-full' type="password" name="password" placeholder='*******' id="password" />
                   </div>
                   <button type='submit' className='btn btn-primary text-white w-full'>Sign In</button>
                   <p className="text-center">Or Sign In with</p>
                  <div className="flex gap-5 justify-center">
                 <button className='btn rounde'> <FaFacebook className="text-2xl"/></button>
                   <button className='btn rounde'><FaGithub className="text-2xl "/></button>
                  <button className='btn rounde'> <IoLogoGoogle className="text-2xl "/></button>
                  </div>

                   <p className='text-center'>Have an account? <Link className="text-primary" href={"/register"}>register</Link> </p>
                </form>
            </div>

        </div>
    );
};

export default SignInPage;