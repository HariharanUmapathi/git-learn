import './Profile.css';
function Profile(args) {

    if(args.test!=null) return (<Test value={args.test[0]} />);
    args=args.data
    args.name=args.title.substr(0,20);
    args.age=15+Math.floor(Math.random()*20);
    args.projects=Math.floor(Math.random()*20)
    return (
        <div className='Profile' key={args.id}>
            <div className="card-header clearfix">
                <span className='float-left'>#id {args.id}</span>
                <span className='float-right'>FSE CLASSROOM</span>
            </div>
            <div className='card-body'>
                <div>
                <img className="img-responsive mx-auto d-block" src={args.url} alt='' />
                </div>
                <div className='details'>
                    <p>Author Name</p>
                    <span className='name'>{args.name}</span>
                    <p>Age          :<span>{args.age}</span></p>
                    <p>Projects Done:<span>{args.projects}</span></p>
                </div>

            </div>
            <div className='card-footer'>
                <p>Followers {args.follows}</p>
                <p>Following {args.following}</p>
            </div>
        </div>
    );



}
function Test(data)
{  
   return (<div><img alt='' src={data.value.profile}/></div>); 
}
export default Profile;