import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub} from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io5';

const SignUpPage = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-12">
                <div className="">
                    <Image src="/assets/images/login/login.svg" alt='signUp img'  width={500}
      height={500}></Image>
                </div>
                <form className="border-2 p-10 shadow-xl rounded-lg space-y-5">
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
                   <button className='btn btn-primary text-white w-full'>Sign Up</button>
                   <p className="text-center">Or Sign Up with</p>
                  <div className="flex gap-5 justify-center">
                 <button> <FaFacebook className="text-2xl cursor-pointer"/></button>
                   <button><FaGithub className="text-2xl cursor-pointer"/></button>
                  <button> <IoLogoGoogle className="text-2xl cursor-pointer"/></button>
                  </div>

                   <p className='text-center'>Already have an account? <Link className="text-blue-600" href={"/login"}>Login</Link> </p>
                </form>
            </div>

        </div>
    );
};

export default SignUpPage;