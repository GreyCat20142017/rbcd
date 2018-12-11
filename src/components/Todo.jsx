import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

const Todo = ({id, title, completed, onStatusChange, onTodoDelete}) => {

	return (
	<div className='todo'>
		<Checkbox checked={completed} onChange={() => onStatusChange(id)}/>
		<span className='todo-title'>{title}</span>
		<Button icon={'delete'} className={'delete icon'} onClick={() => onTodoDelete(id)}/>
	</div>
)};

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onStatusChange: PropTypes.func.isRequired,
	onTodoDelete: PropTypes.func
};

Todo.defaultProps = {
	completed: false
}

export default Todo;