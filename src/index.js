import React from 'react';
import ReactDOM from 'react-dom';
import {todosReducer} from './reducers/todos_reducer';
// import {createStore} from './store';
import {createStore} from 'redux';
import ToDoList from './components/app'

const store = createStore(todosReducer);

function render(){
  ReactDOM.render(<ToDoList store={store} />, container)
};

render();

store.subscribe(render)