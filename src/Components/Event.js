import React from 'react';
import './Events.css';


class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 1, title: "Event 1", src: "https://lorem-picsium" },
                { id: 2, title: "Event 2", src: "https://lorem-picsium" },
                { id: 3, title: "Event 3", src: "https://lorem-picsium" },
                { id: 4, title: "Event 3", src: "https://lorem-picsium" },
                { id: 5, title: "Event 3", src: "https://lorem-picsium" }
            ]
        }


    }

    componentDidMount(){
    }
    render() {
        let content = "No Events For Now";
        if (this.state.events instanceof Array && this.state.events.length !== 0) {
            content = this.state.events.map((event) => { return <Event data={event} /> })

        }

        return (<section className='events'>
            <div className='event-header'>
                <h1 className='event-heading'>Upcoming Events</h1>
                <p className='event-description'>Wanna watch us close Participate The events we are conducting</p>
                <div aria-controls='event-holder'>
                    <button onClick={this.prev}><span className='fa fa-arrow-circle-left '></span></button>
                    <button onClick={this.next}><span className='fa fa-arrow-circle-right'></span></button>
                </div>
            </div>
            <div className='event-holder'>
                {content}
            </div>

        </section>)

    }
}

function Event({ data }) {
    return (<div className='event' key={data.id}>
        <img src={data.src} alt="" />
        <p>{data.title}</p>
    </div>)
}

export default Events;