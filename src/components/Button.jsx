import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, icon, onDelete}) => (
	<button className={className} onClick={onDelete}>
			<i className='material-icons'>{icon}</i>
	</button>    
);

Button.propTypes = {
	icon: PropTypes.string,	
	className: PropTypes.string,
	onDelete: PropTypes.func
};

export default Button;
