import { useSelector } from "react-redux";
import Logo from "../assests/img/foodvilla.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Title=()=>(
    <a href="/">
    <img className="h-28 p-2"
     alt="logo"
     src={Logo}
     />
     </a>
);

const Header=()=>{

    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems);
    
    return(
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div className="nav-links">
                <ul className="flex py-10 p-2 m-2">
                    <Link to="/">
                       <li className="px-2">Home</li>
                    </Link>
                    
                    <Link to="/about">
                       <li className="px-2">About</li>
                    </Link>
                    
                    <Link to="/Contact">
                       <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/Cart">
                       <li><FontAwesomeIcon icon={faShoppingCart} />{cartItems.length}</li>
                       
                    </Link>
                    {/* <Link to="/Login">
                       <li>Login</li>
                    </Link> */}
                    {/* <Link to="/instamart">
                       <li className="px-2">Instamart</li>
                    </Link> */}
                </ul>

            </div>
        </div>
    );
}

export default Header;