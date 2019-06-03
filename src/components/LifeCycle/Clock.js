import React from 'react';
import classNames from 'classnames';
import Alert from 'react-aaui/es/alert';
import './Clock.less';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: this.getClock()
    }
    console.log('constructor');
  }

  //Enable a component to update its internal state as the result of changes in props
  static getDerivedStateFromProps(props, state) {
    console.log('**************************************');
    console.log('%cgetDerivedStateFromProps', 'color:#ffb934');
    if (props.color !== state.color) {
      return {
        ...state,
        color: props.color
      }
    }
    return null;
  }

  componentDidMount() {
    this.setTimer();
    console.log('%ccomponentDidMount', 'color:#45a162');
  }

  /* Only exists as a performance optimization,
   * use PureComponent(shallow comparison of props and state)
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cshouldComponentUpdate', 'color:#ffb934');
    if (nextProps.stop) {
      return nextProps.color !== this.props.color;
    }
    return true;
  }

  /* Enables component to capture some information from the DOM before potentially changed,
   * returned value as parameter of componentDidUpdate
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('%cgetSnapshotBeforeUpdate', 'color:#ffb934');
    if (prevProps.color !== this.props.color) {
      return {
        msg: `color has been changed from ${prevProps.color} to ${this.props.color}`
      }
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      Alert.info(JSON.stringify(snapshot.msg));
    }
    this.setTimer();
    console.log('%ccomponentDidUpdate', 'color:#45a162');
    console.log('**************************************');
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    console.log('%ccomponentWillUnmount', 'color:#45a162');
  }
  

  getClock = () => {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? "pm" : "am"
    };
  }

  setTimer = () => {
    this.timer = setTimeout(this.updateClock, 1000);
  }

  updateClock = () => {
    this.setState({
      clock: this.getClock()
    })
  }

  render() {
    const { clock: { hours, minutes, seconds, ampm }, color } = this.state;
    console.log('render');
    return (
      <div className={classNames('clock', color)}>{`${hours} : ${minutes} : ${seconds} ${ampm}`}</div>
    );
  }
}

export default Clock;