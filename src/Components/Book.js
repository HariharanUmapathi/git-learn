import './Book.css';
function Book({data}) {
    return (

        <div className="Book">
            <div>
                <img alt="" src={data.logo}/>
            </div>
            <div >
                <p>{data.title}</p>
                <small>{data.price}</small>
            </div>
        </div>
    );
}

export default Book;