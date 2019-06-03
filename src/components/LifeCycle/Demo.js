import React from 'react';
import Button from 'react-aaui/es/Button';
import Clock from './Clock';
import './Demo.less';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      stop: false
    }
  }

  handleClick(e) {
    this.setState({
      color: e.target.className
    });
  }

  handleButtonClick = () => {
    this.setState(prev => ({
      stop: !prev.stop
    }));
  }

  render() {
    const { color, stop } = this.state;
    return(
      <div className='demo'>
        <Clock color={color} stop={stop} />
        <div className='demo__actions'>
          <div className='demo__color-picker'>
            <span className='red' onClick={this.handleClick.bind(this)}></span>
            <span className='orange' onClick={this.handleClick.bind(this)}></span>
            <span className='blue' onClick={this.handleClick.bind(this)}></span>
          </div>
          <div className='demo__button-operation'>
            <Button onClick={this.handleButtonClick}>{stop ? 'Continue': 'Pause'}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;