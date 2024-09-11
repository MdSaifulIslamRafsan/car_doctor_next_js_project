import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({service , index}) => {
    
    const { _id ,img , title , price} = service;
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className='h-60'>
    <Image
      src={img}
      alt={title}  width={500}
      height={500}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="flex items-center justify-between">
    <p className="text-red-600 font-bold">price: ${price}</p>
      <Link href={`/services/${_id}`} className="text-red-600"><FaArrowRight /></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;