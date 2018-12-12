import React from 'react';

import Button from './Button';

class Stopwatch extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		running: false,
		elapsed: 0,
		lastTick: 0
	};
	this.ticks = this.ticks.bind(this);
}	

componentDidMount() {
	this.interval = setInterval(this.ticks, 1000);
}

componentWillUnmount() {
   clearInterval(this.interval);
}


ticks() {
	if (this.state.running) {
		let now = Date.now();
		let diff = now - this.state.lastTick;
		this.setState({
			elapsed: this.state.elapsed + diff,
			lastTick: now
		});
	}
}

onTimerStart = () => {
	this.setState({
		running: true,
		lastTick: Date.now()
	});
}

onTimerPause = () => {
	this.setState({running: false});
}

onTimerStop = () => {
	this.setState({
		running: false,
		elapsed: 0,
		lastTick: 0
	});
}

format = (milliseconds) => {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
}


render() {
	const time = this.format(this.state.elapsed);
	return (
		<section className='stopwatch'>
			<div className='stopwatch-time'>{time}</div>
			<div className='stopwatch-controls'>
				{this.state.running ?
					<Button className='icon' icon='pause' onClick={this.onTimerPause}></Button> :
					<Button className='icon' icon='play_arrow' onClick={this.onTimerStart}></Button>
				}
				<Button className='icon' icon='stop' onClick={this.onTimerStop}></Button>				
			</div>
		</section>
	)
}
}

export default Stopwatch;