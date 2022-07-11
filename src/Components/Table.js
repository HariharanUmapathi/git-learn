//import Database from './Database.js';
import React from 'react';

class SampleTable extends React.Component
{
    constructor()
    {
        super();
        this._handleClick=this._handleClick.bind(this);
    }
    componentDidMount()
    {
       this._handleClick(); 
    }
    _handleClick()
    {
    }
    render()
    {
        return <Table />
    }
}
function Table() {
    return (
    <div className='Table'>
        <table id='#SampleTable'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Album Id</th>
                    <th>Album Title</th>
                    <th>Full Url</th>
                    <th>Sample Url</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    );
}


export default SampleTable;