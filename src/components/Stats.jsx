import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({todos}) => {
	const totals = todos.reduce((sum, current)  => {
        sum.total += 1;
        sum.completed += current.completed ? 1 : 0;
        sum.notCompleted += current.completed ? 0 : 1;
        return sum;
  }, {total: 0,  completed: 0, notCompleted: 0});

	return (
	<table className='stats'>
    <tbody>
      <tr>
        <th>Всего задач:</th>
        <td>{totals.total}</td>
      </tr>
      <tr>
        <th>Выполнено:</th>
        <td>{totals.completed}</td>
      </tr>
      <tr>
        <th>Осталось:</th>
        <td>{totals.notCompleted}</td>
      </tr>
    </tbody>
   </table>
)};

Stats.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})).isRequired
}

export default Stats;
