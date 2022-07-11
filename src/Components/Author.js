function Author(data) {
    data=data.data
    return (<div className='Author'>
        <div>
            <img alt="" src={data.image} />
        </div>
        <div>
            Name<p>{data.name}</p>
            <div className="details d-block-row p-2 m-3">
            <a href="/books">View Books</a>
            <a href='/blog'>Read Blog</a>
            
            </div>
            <div><span>Books Wrote</span>
            <p>{booksWrote()}</p></div>
            <small onClick={getBookList}>{data.books}</small>
        </div>
    </div>);
}

function booksWrote()
{
    return Math.floor(Math.random()*100);
}
function getBookList()
{
return ["book1"];
}

export default Author;