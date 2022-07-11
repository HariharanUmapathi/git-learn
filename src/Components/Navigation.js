import './Navigation.css';
import {Link} from "react-router-dom";
function Navigation() {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light'>
                <a href="/home" className='navbar-brand'>Black Pearl digital world</a>
                <button className="navbar-toggler" type='button' data-toggle="collapse" data-target='#navbarNav' aria-controls="navbarNav" aria-expanded="false" aria-label='Toggle Navigation' >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item nav-link'><Link to='/home'><button >Home</button></Link></li>
                        <li className='nav-item nav-link'><Link to='/login'><button >Login/Register</button></Link></li>
                        <li className='nav-item nav-link'><Link to='/explore'><button >Explore</button></Link></li>
                        <li className='nav-item nav-link'><Link to='/book-sellers'><button >Book-Sellers</button></Link></li>
                        <li className='nav-item nav-link'><Link to='/other'><button >Others</button></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;