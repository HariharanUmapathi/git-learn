import axios from 'axios';
import React from 'react';
import './Courses.css';

class Courses extends React.Component {
    constructor() {
        super();
        this.state = { courses: [] }
    }
    displayCourses = () => {
        if (this.state.courses.length === 0)
            return ["no Courses Is prepared"];
        else {
            let courses = [];
            return courses;
        }
    }
    componentDidMount() {
        axios.get("http://localhost/api/courses").then(response => {
            this.setState({ "courses": response.data });
        })
    }
    render() {
        console.log(this.state.courses);
        let courses =this.state.courses.map((data)=>{return <Course data={data}/>})
        
        return <section><h1>Courses</h1><div className='row'>
            {courses}
            </div></section>;
    }
}

function Course({data}) {
    return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
    <div className='card course' key={data.courseid}>
        <div className='card-header'><img className='thumb' src={data.thumb} alt=''/></div>
        <div className='card-body'>{data.coursetitle}</div>
        <div className='card-footer'>
            <a className='d-block' href='#board'><h5>Board:{data.board}</h5></a>
            <a className='d-block' href='#class'><h5>Class:{data.class}</h5></a>
            <a className='d-block' href='#subject'><h5>Subject:{data.subject}</h5></a>
        </div>
    </div></div>);
}

export default Courses;