import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
	}

	onEditSubmit = (evt) => {
		evt.preventDefault();
		const title = this.refs.title.value;
		this.props.onTodoEdit(this.props.id, title);
		this.setState({editing: false});
	}

	changeUI = () => {
		this.setState({editing: !this.state.editing});
	}

	renderForm() {
		const title=this.props.title;
		return (
		<form className='todo-edit-form' onSubmit={this.onEditSubmit}>
				<input type='text' defaultValue={title} ref='title'/>
				<Button className={'save icon'} icon={'save'} type='submit'/>
		</form>)
	}

	renderDisplay() {
		const	{id, title, completed, onStatusChange, onTodoDelete} = this.props;
		return (
			<div className='todo'>
				<Checkbox checked={completed} onChange={() => onStatusChange(id)}/>
				<span className='todo-title'>{title}</span>
				<Button className={'edit icon'} icon={'edit'} onClick={this.changeUI}/>
				<Button className={'delete icon'} icon={'delete'} onClick={() => onTodoDelete(id)}/>
			</div>
		)
	}

	render() {
		
		return (
			this.state.editing ? this.renderForm() : this.renderDisplay()	

	)}
}		

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onStatusChange: PropTypes.func.isRequired,
	onTodoDelete: PropTypes.func.isRequired,
	onTodoEdit: PropTypes.func.isRequired
};

Todo.defaultProps = {
	completed: false
}

export default Todo;