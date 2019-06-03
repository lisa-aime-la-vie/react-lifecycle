import React from 'react';
import logo from './logo.svg';
import './Introduction.less';

class Introduction extends React.PureComponent {
  render() {
    return(
      <div className="introduction module">
        <img src={logo} className="logo" alt="logo" />
        <a
          className="link"
          href="https://reactjs.org/docs/components-and-props.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1. Function Component vs Class Component
        </a>
        <a
          className="link"
          href="https://reactjs.org/docs/react-component.html?utm_source=caibaojian.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2. Lifecycle
        </a>
        <br/>
        <a
          className="link"
          href="https://gitlab.dev.activenetwork.com/fee/react-courses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gitlab resource: git@gitlab.dev.activenetwork.com:fee/react-courses.git
        </a>
      </div>
    )
  }
}

export default Introduction;
