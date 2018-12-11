import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: 'Написать приложение'};
	}

	onFormSubmit = (evt) => {
		evt.preventDefault();
		const title = this.state.title;
		if (title.trim() !== '') {
			this.props.onAdd(title);		
			this.setState({title: ''});
		}
	}

	onInputChange = (evt) => {
		this.setState({title: evt.target.value});
	}

	render() {
		return (
			<form className='todo-form' onSubmit={this.onFormSubmit}>
				<input 
					type='text' 
					placeholder='Что нужно сделать?' 
					value={this.state.title} 
					onChange={this.onInputChange}/>
				<Button type='submit'>Добавить</Button>
			</form>
		)
	}
}

Form.propTypes = {
	onAdd: PropTypes.func.isRequired
};

export default Form;