import "./Gallery.css";
import Book from "./Book.js";
import Profile from "./Profile.js";
import Author from "./Author.js";
function Gallery(data) {
    if (data.books) return (<BookGallery books={data.books} />);
    if (data.profiles) return (<ProfileGallery profiles={data.profiles} />);
    if (data.authors) return (<AuthorGallery authors={data.authors} />);
    return (<div className='Gallery'>
        <h1 className='text-danger'>Data not set</h1>
    </div>);
}

function BookGallery(data) {
    var books=data.books.map((book)=>{return (<Book key={book.id} data={book}/>)});
    return (<div className='Gallery'>{books}</div>);
}
function ProfileGallery(data) {
    var profiles = data.profiles.map((profile) => { return (<Profile key={profile.id} data={profile} />); });
    return (<div className="Gallery">{profiles}</div>);
}
function AuthorGallery(data) {
    var authors = data.authors.map((author) => { return (<Author key={author.id} data={author} />); });
    return (<div className="Gallery">{authors}</div>);
}
export default Gallery;
