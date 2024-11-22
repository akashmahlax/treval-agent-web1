import {Link } from "react-router-dom"
const Navbar = () => {

    const nav = [
       
        { path : "/about", name : "About"},
        { path : "/services", name : "Services"},
        { path : "/testimonials", name : "Testimonials"},
        { path : "/contact", name : "Contact"},
    ];

  return (
    <>
        <nav className="navbar fixed top-0 w-full flex justify-between items-center p-4 bg-primary dark:bg-dark text-blue-600 shadow-lg">
        <h1 className="text-2xl font-bold">Vinay Harri Travels</h1>
            <ul className="hidden md:flex space-x-6 text-lg"  >
                {nav.map(({path, name}) => (
                    <li key={path}><Link  to={path} className="hover:text-accent">{name}</Link></li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default Navbar