import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => (
	<header>
			<Stats todos={props.todos}/>
   		<h1>{props.title}</h1>
   		<Stopwatch/>
  </header>	
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})).isRequired
};

export default Header;