import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'
import { todos } from './seeders';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(indexOfTodo){
    this.setState({
      todos: this.state.todos.filter(function(currentValue, index, arr){
        return index !== indexOfTodo;
      })
    })
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo}/>
        <hr />
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>

        <ul className="list-group">
          {this.state.todos.map((todo, indexOfTodo) =>
          
            <li className="list-group-item" key={indexOfTodo}>

              <h4 className="list-group-item-heading">
                {todo.todoTitle}
                <small> <span className="label label-info">{todo.todoPriority}</span></small>
              </h4>

              <p><span className="glyphicon glyphicon-user"></span>    
               {todo.todoResponsibile}
              </p>

              <p>{todo.todoDescription}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, indexOfTodo)}>
                <span className="glyphicon glyphicon-trash">Delete</span>
              </button>

            </li>
          )}
        </ul>
      </div>
    );
  }
}



export default App;
