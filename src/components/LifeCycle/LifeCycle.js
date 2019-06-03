import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import Demo from './Demo';
import image from './lifecycle.png';
import './LifeCycle.less';

class LifeCycle extends PureComponent {
  static propTypes = {
    name: string
  }

  static defaultProps = {
    name: 'lifecycle',
  }

  render() {
    return (
      <div className="life-cycle module">
        <header>What are React lifecycle methods?</header>
        <div className="content" >
          <p>Think of React lifecycle methods as <b>a series of events</b> that happen from the birth of a React component to its death.</p>
          <img src={image} alt="codeSnapshot" />
          <hr/>
          <Demo />
        </div>
      </div>
    );
  }
}

LifeCycle.type= 'Lifecycle'
export default LifeCycle;
