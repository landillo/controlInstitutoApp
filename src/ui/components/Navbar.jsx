import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
   
    const navigate = useNavigate();
    
    
    const onLogout = () => {
        navigate('/login', {
            replace: true
        })
    }
   
   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2  p-3 ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Instituto Federico Froebel
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                    <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/about"
                    >
                        About
                    </NavLink>
                    {/* <NavLink 
                        className={({ isActive}) =>  `nav-item nav-link ${isActive ? 'active' : '' }` }
                        to="/hero"
                    >
                        Hero
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info' >
                        Orlando
                    </span>

                    <button
                    className='nav-item nav-link btn'
                    onClick={ onLogout }
                    >
                        Login
                    </button>
                   
                </ul>
            </div>
        </nav>
    )
}