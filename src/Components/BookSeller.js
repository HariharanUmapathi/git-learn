import "./BookSeller.css";


function BookSeller(args) {
	if (args.data instanceof Array)
		return (<BookSellers group={args} />);
	return (
		<div className='BookSeller' key='args.id'>
			<div className='card' >
				<div className='card-header'>
					<span className='float-left text-info'>BookSeller Id:</span>
					<span className='float-right text-primary'>echo </span>
					<div className='card-body'>
						<div className='row' style={{ 'backgroundColor': args.color }}>
							<img className='col-4 float-left' src='' alt='' />
							<div className='col-8'>
								<div>Name:</div>
							</div>
						</div>
					</div>
					<div className='card-footer'>
						footer
					</div>
				</div>
			</div>
		</div>);
}

function BookSellers(args) {
	return (<div className='BookSellers'></div>);
	//var group=args.data.map((profile)=>{return(<BookSeller data={args.data}/>);});
	//return(<div>{group}</div>);	
}
export default BookSeller;