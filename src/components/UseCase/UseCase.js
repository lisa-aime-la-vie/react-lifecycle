import React, { PureComponent } from 'react';
import { string } from 'prop-types';

class UseCase extends PureComponent {
  static propTypes = {
    name: string
  }

  static defaultProps = {
    name: 'state',
  }

  render() {
    return (
      <div className="module">
        <header>Rule: If you ever have a class component with only a render method – you should always make it a functional component.</header>
        <ul>
          Why use Functional Component?
          <li>Easy to read.</li>
          <li>Easy to test (no need to rely on any mocking, state manipulation).</li>
          <li>
            <a
              className="link"
              href="https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f"
              target="_blank"
              rel="noopener noreferrer">
              Potentially have a better performance
            </a>
          </li>
        </ul>
       </div>
    );
  }
}

UseCase.type= 'UseCase'
export default UseCase;
