import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';


 class App extends  React.Component {

 	constructor(props) {
 		super(props);
 		this.state = {todos: this.props.todos};
 	}

 	onStatusChange = (id) => {
 		const newTodos = this.state.todos.map(todo => {
 			if (todo.id === id) {
 				todo.completed = !todo.completed;
 			}
 			return todo;
 		});
 		this.setState({todos: newTodos});
 	}

 	onTodoDelete = (id) => {
 		const newTodos = this.state.todos.filter(todo => (todo.id !== id)); 		
 		this.setState({todos: newTodos});
 	}

   render() {
   	const {title} = this.props;
   	const {todos} = this.state;
   	return (
    <main>
    	<Header title={title} todos={todos}/>
    	<section className='todo-list'>
    			{todos.map(todo => <Todo 
    				key={todo.id} 
    				id={todo.id} 
    				title={todo.title} 
    				completed={todo.completed} 
    				onStatusChange={this.onStatusChange}
    				onTodoDelete={this.onTodoDelete}
    			/>)}    	
    	</section>
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