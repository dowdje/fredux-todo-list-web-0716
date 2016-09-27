import React from 'react';

export default class ToDoList extends React.Component {

  constructor(props){
    super(props)
    this.state = {term: ''}
  }

  onAddToList(event){
    event.preventDefault();
    let action = {type: 'ADD_TODO', payload: {title: event.target.firstChild.value}}
    document.getElementById('scrub').value = ''
    this.props.store.dispatch(action);
  }

  deleety(task){
    let action = {type: 'DELETE_TASK', payload: {index: task}}
    this.props.store.dispatch(action)

  }

  render(){
    return (<div>
      <h2>To Do List</h2>
      <ul>
        {this.props.store.getState().map((task, index)=>{
          return <li key={index}>{task.title}<button onClick={()=>{this.deleety(index)}}>X</button></li>
        })}
      </ul>
      <form onSubmit={this.onAddToList.bind(this)} >
      <input id='scrub' defaultValue=''/>
      </form>
    </div>
    )
  }
}