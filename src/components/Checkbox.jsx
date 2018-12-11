import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({checked, onChange}) => (
	<button className='checkbox icon' onClick={onChange}>
		<i className='material-icons'>{checked ? 'check_box' : 'check_box_outline_blank'}</i>
	</button>
);

Checkbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
	checked: false
}

export default Checkbox;
