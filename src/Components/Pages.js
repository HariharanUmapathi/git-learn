import { useHistory } from 'react-router-dom';
import Cabs from './CarsGallery.js';


function Homepage() {
    const history = useHistory();
    const handleClick = () => history.push("/");
    return (
        <div className="container-fluid span p-2 m-2" style={{borderRadius: "6px" }} onClick={handleClick}>
            <main style={{ margin: "inherit", padding: "5px" }}>
                <section id='landing' className='row'>
                    <div className='col-4'>
                        <div className="bg-white border-radius-5">
                            <h1 className='icon-font text-dark text-center'>Who Are We?</h1>
                            <span className='d-flex icon-font icon-font-s3 text-dark p-4 m-2' >We are a team of Graduates who interested on web development.
                                Started web development individually. Now we are gathered together to educate the newbies</span>
                        </div>

                    </div>
                    <div className='col-8  video'>
                    <Cabs />
                    </div>
                </section>
                <section className='row'>
                    <div className='col-8'>

                    </div>
                    <div className='col-4'>
                        <h1 className='icon-font'>What We Do?</h1>
                        <section></section>
                        <figure>
                            <figcaption>This is our works</figcaption>
                        </figure>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
}
function Aboutpage() {
    return (<div>
        <h1>About</h1>
        <TwitterEmbed />
    </div>);
}

function TravelsHome() {
    return <div className='carApp'><Cabs /></div>;
}


function TwitterEmbed() {
    return (<div></div>);
}
//Cmponents
function Footer() {
    return (<footer className='jumbotron' >
        <div className='row'>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <p>Address</p>
                <span>190,Kamaraj Nagar,
                    Thirubuvanam.
                </span>
            </div>
            <div className="col-lg-4">
                Follow Us on
                <div>
                    <i className='fa fa-twitter'></i>
                    <i className='fa fa-facebook'></i>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-whatsapp'></i>
                </div>
            </div>
            <div className="col-lg-4">
                <form className='input-group'>
                    <input type='email' placeholder='Enter your Email' />
                    <input className='btn btn-warning text-white' type='submit' value='Subscribe' />
                </form>
            </div>
        </div>
        <div className='d-block text-center'>
            &copy; Hariharan Umapathi 2021. &hearts;
        </div>
    </footer>);
}





var Pages = { Homepage, Aboutpage };
export { Homepage, Aboutpage, TravelsHome };
export default Pages;