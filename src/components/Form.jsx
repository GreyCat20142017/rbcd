import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onFormSubmit = (evt) => {
		evt.preventDefault();
		const title = this.refs.title.value;
		if (title.trim() !== '') {
			this.props.onAdd(title);		
			this.refs.title.value = '';
		}
	}

	render() {
		return (
			<form className='todo-form' onSubmit={this.onFormSubmit}>
				<input type='text' placeholder='Что нужно сделать?' ref='title'/>
				<Button type='submit'>Добавить</Button>
			</form>
		)
	}
}

Form.propTypes = {
	onAdd: PropTypes.func.isRequired
};

export default Form;