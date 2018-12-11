import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
	<button className={props.className} onClick={props.onClick} {...props}>
			{props.icon ? <i className='material-icons'>{props.icon}</i> : props.children}
	</button>    
);

Button.propTypes = {
	icon: PropTypes.string,	
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node
};

export default Button;
