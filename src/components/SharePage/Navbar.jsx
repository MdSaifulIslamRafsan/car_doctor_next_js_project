import Image from "next/image";
import logo from "../../../public/assets/logo.svg"
import Link from "next/link";
const Navbar = () => {
    const NavLinks = <>
    <li><Link href={'/'}>Home</Link></li>
    </>
  return (
    <div className="shadow-2xl bg-base-100">
      <div className="navbar w-[95%] md:w-11/12 max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link href={'/'} className="w-14"><Image src={logo} alt='logo'></Image></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
