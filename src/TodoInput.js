import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      todoTitle: '',
      todoResponsibile: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
    const target = event.target;
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState = {
      todoTitle: '',
      todoResponsibile: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    }
  }

  render() {
    return (
      <div>
        <h1>Add New Todo</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
             <div className="col-sm-10">
               <input 
                name="todoTitle" 
                type="text" 
                className="form-control"
                id="inputTodoTitle"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Title">
                </input>
             </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Todo Responsible</label>
             <div className="col-sm-10">
               <input 
                name="todoResponsibile" 
                type="text" 
                className="form-control"
                id="inputTodoResponsible"
                value={this.state.todoResponsibile}
                onChange={this.handleInputChange}
                placeholder="Responsible">
                </input>
             </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputTodoDescription" className="col-sm-2 control-label">Todo Description</label>
             <div className="col-sm-10">
               <textarea 
                name="todoDescription" 
                type="text" 
                className="form-control"
                id="inputTodoDescription"
                value={this.state.todoDescription}
                onChange={this.handleInputChange}
                placeholder="Description">
                </textarea>
             </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
             <div className="col-sm-10">
               <select 
                name="todoPriority" 
                className="form-control"
                id="inputTodoPriority"
                value={this.state.todoPriority}
                onChange={this.handleInputChange}>

                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
                </select>
             </div>
          </div>

          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <button type="submit" className="btn btn-success">Add Todo</button>
             </div>
          </div>
        </form>
      </div>
    )
  }
}
