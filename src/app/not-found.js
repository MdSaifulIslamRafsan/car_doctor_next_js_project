import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' space-y-4 flex justify-center items-center text-center flex-col'>
      <h1 className='text-4xl font-bold'>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link className='btn btn-primary text-white' href="/">Return Home</Link>
    </div>
  )
}