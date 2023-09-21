import { useState } from "react";
import Links from "../Links/Links";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const AnotherNav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];


    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu className=""></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex gap-7 absolute duration-1000 md:static p-5  bg-yellow-200 shadow-lg px-6 ${
                open? 'top-16': '-top-60'
            }`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};
   

export default AnotherNav;