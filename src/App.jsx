import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';


 class App extends  React.Component {

 	constructor(props) {
 		super(props);
 		this.state = {todos: []}; 
  }

  onError = (err)	=> 	console.log(err.message);
  

	componentDidMount() {
		axios.get('api/todos')
		.then(response => response.data)
		.then(todos => this.setState({todos: todos}))
		.catch(this.onError);
	}
 	
	onStatusChange = (id) => {
		axios.patch(`api/todos/${id}`)
		.then(response => {
			const newTodos = this.state.todos.map(todo => {
				if (todo.id === id) {
					todo = response.data;
				}
				return todo;
			});
			this.setState({todos: newTodos});
		})		
		.catch(this.onError); 		
	}

 	onTodoDelete = (id) => {
 		axios.delete(`api/todos/${id}`)
 		.then(() =>  { 
 			const todos = this.state.todos.filter(todo => (todo.id !== id));
 			this.setState({todos: todos}); 
 		})
 		.catch(this.onError);	
 	}

 	onTodoEdit = (id, newTitle) => {
 		axios.put(`api/todos/${id}`, {title: newTitle})
 		.then(response => {
 			const newTodos = this.state.todos.map(todo => {
 				if (todo.id === id) {
 					todo = response.data;
 				}
 				return todo;
 			});
 			this.setState({todos: newTodos});
 		})		
 		.catch(this.onError);  
 	}

 	onTodoAdd = (title) => {
 		axios.post('api/todos', {title: title})
		.then(response => response.data)
		.then(newTodo =>	this.setState({todos: [...this.state.todos, newTodo]}))
		.catch(this.onError);
 	}

   render() {
   	const {title} = this.props;
   	const {todos} = this.state;
   	return (
    <main>
    	<Header title={title} todos={todos}/>
    	<ReactCSSTransitionGroup 
    			className='todo-list' 
    			component='section'
    			transitionName='slide' 
    			transitionAppear={true}
    			transitionAppearTimeout={500}
    			transitionEnterTimeout={500}
    			transitionLeaveTimeout={500}>
    			{todos.map(todo => <Todo 
    				key={todo.id} 
    				id={todo.id} 
    				title={todo.title} 
    				completed={todo.completed} 
    				onStatusChange={this.onStatusChange}
    				onTodoDelete={this.onTodoDelete}    		
    				onTodoEdit={this.onTodoEdit}  
    			/>)}    	
    	</ReactCSSTransitionGroup>
    	<Form onAdd={this.onTodoAdd}/>
    </main>
   )
	}
};

App.propTypes = {
	title: PropTypes.string,
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})).isRequired
};

App.defaultProps = {
	title: 'React Todo'
};

export default App;