import React from 'react';
import axios from 'axios';
import './ToDo.css';
const list = [
    { id: "1", "title": "Todo" },
    { id: "2", "title": "Todo" },
    { id: "3", "title": "Todo" },
    { id: "4", "title": "Todo" },
    { id: "5", "title": "Tod9" }
];
class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.apiUrl = "http://localhost/api/todos";
        axios.get("http://localhost/api/todos")
        .then(response =>console.log(response) );
    }
    done() {

    }
    addTodo(){
        axios.post("http://localhost/api/todos",{title:"New item"});
    }
    componentDidMount() {
        this.setState({ todos: <ToDoItem list={list} /> });
        this.changeHandler = changeHandler;
        
        
    }
    render() {
        return (<div className='todolist table-responsive'>

            <table >
                <thead>
                    <div className='todo-head'>
                        <input placeholder='Task Name' />
                        <button className='btn btn-success' onClick={this.addTodo}>Add</button>
                    </div>
                </thead>
                <tbody>
                    {this.state.todos}
                </tbody>
                <tfoot></tfoot>
                <caption className='text-center'>Todo</caption>
            </table>
        </div>);
    }
}

class ToDoItem extends React.Component {
    construct() {
        this.props.list = list;
    }
    tick(event) {
        console.log("Done");

        let td = event.target.parentNode.parentNode;
        td.ClassName = 'done';
        console.log(event.target.parentNode.parentNode);
    }
    render() {
        if (list.length === 0)
            return "Add first todo";
        else {
            return this.props.list.map((item) => {
                return (<tr key={item.id}>
                    <td>
                        <input type='checkbox' onChange={this.tick} />
                        <span>{item.title}</span>
                        <button className='btn btn-success' >Done</button>
                        <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>);
            });
        }

    }
}

function changeHandler(event) {
    let checkbox = event.target;
    console.log(checkbox.parentNode.parentNode);
}
function addHandler() {
    console.log("Added todo");
}
export default ToDo;