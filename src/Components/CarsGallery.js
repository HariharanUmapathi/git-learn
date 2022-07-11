import React from "react";
import "./CarsGallery.css";
const img_src="http://localhost:3000/public/mountain.jpg";
 
class Cabs extends React.Component {
    render() {
        let src=img_src+"";
        return (<section className='CarsGallery'>
            <div className='frame'>
            <Cab src={src}/>
            <Cab src={src}/>
            <Cab src={src} />
            <Cab src={src}/>
            </div>
        </section>);
    }
}

class Cab extends React.Component{
    constructor(props){
        super(props);
        console.log({"props":this.props})
    }
    render(){
        return <div className='Cab'><div className='details' ><img src={this.props.src} alt="" /></div></div>;
    }
}
export default Cabs;