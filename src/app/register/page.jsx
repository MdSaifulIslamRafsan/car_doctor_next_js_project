"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub} from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io5';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const SignUpPage = () => {
    const route = useRouter()
    const handleSignUp = async(event) =>{
        event.preventDefault()
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        axios.post('http://localhost:3000/register/api' , JSON.stringify(newUser))
        .then((response) => {
          console.log(response);
          if(response?.data){
            route.push('/login')
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }    
   
    
    return (
        <div>
            <div className="grid grid-cols-2 gap-12">
                <div className="">
                    <Image src="/assets/images/login/login.svg" alt='signUp img'  width={500}
      height={500}></Image>
                </div>
                <form onSubmit={handleSignUp} className="border-2 p-10 shadow-xl rounded-lg space-y-5">
                    <h1 className='text-center text-3xl'>Sign Up</h1>
                  <div className="">
                  <label htmlFor="name">Name</label>
                  <input className='input input-bordered w-full' type="text" name="name" placeholder='name' id="name" />
                  </div>
                   <div className="">
                   <label htmlFor="email">Email</label>
                   <input className='input input-bordered w-full' type="email" name="email" placeholder='example@gmail.com' id="email" />
                   </div>
                   <div className="">
                   <label htmlFor="password">Password</label>
                   <input className='input input-bordered w-full' type="password" name="password" placeholder='*******' id="password" />
                   </div>
                   <button type='submit' className='btn btn-primary text-white w-full'>Sign Up</button>
                   <p className="text-center">Or Sign Up with</p>
                  <div className="flex gap-5 justify-center">
                 <button className='btn rounde'> <FaFacebook className="text-2xl"/></button>
                   <button className='btn rounde'><FaGithub className="text-2xl "/></button>
                  <button className='btn rounde'> <IoLogoGoogle className="text-2xl "/></button>
                  </div>

                   <p className='text-center'>Already have an account? <Link className="text-primary" href={"/login"}>Login</Link> </p>
                </form>
            </div>

        </div>
    );
};

export default SignUpPage;