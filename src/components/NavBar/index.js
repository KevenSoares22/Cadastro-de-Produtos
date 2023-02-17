import { NavLink } from 'react-router-dom'
import './styles.css'




const NavBar = () =>{



    return(
    <nav className="navBar">


    <NavLink to="/" className="btnNav">Home</NavLink>
    <NavLink to="/about" className="btnNav">About</NavLink>



    </nav>


    )


}


export default NavBar