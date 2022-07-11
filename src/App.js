import './App.css';

import Login from './Components/Login.js';
import { Homepage, Aboutpage, TravelsHome } from './Components/Pages.js';
import Event from './Components/Event.js';
import Courses from './Components/Courses.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (<div className="App" >
        <Router>
            <div>
                <nav className='navbar navbar-expand-md navbar-expand-xl navbar-dark' >
                    <div className='navbar-header' >
                        <div className='navbar-brand' >
                            <a className='nav-link' href='/' > Black Pearl Digital World </a> </div >
                        <button type='button' className='navbar-toggler' data-toggle='collapse'
                            data-target='#navbar'
                            aria-controls='navbar'
                            aria-expanded='false'
                            aria-label='toggler' >
                            <span className='navbar-toggler-icon' > </span> </button> </div>
                    <div className='collapse navbar-collapse'
                        id='navbar' >
                        <ul className='navbar-nav nav' >

                            <li className='nav-link' > < Link to='/' > Home </Link></li >
                            <li className='nav-link'>  <Link to='/Travels/Home'>Travles</Link></li>
                            <li className='nav-link' > < Link to="/About" > About </Link></li >
                            <li className='nav-link'><Link to='/Events' >Events</Link></li>
                            <li className='nav-link' > < Link to='/login' > Login </Link></li >
                            <li className='nav-link'><Link to='/Courses' >Courses</Link></li>
                        </ul> </div>
                </nav>
                <Route path="/About" component={Aboutpage} />
                <Route path='/Travels/Home' component={TravelsHome} />
                <Route path='/login' component={Login} />
                <Route path='/Events' component={Event} />
                <Route path='/Courses' component={Courses} />
                <Route exact path="/" component={Homepage} />
            </div>
        </Router >
    </div >
    );
}


export default App;