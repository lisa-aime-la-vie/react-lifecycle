import React from 'react';
import { string } from 'prop-types';
import snapshot from './classComponent.png';

class ClassComponent extends React.PureComponent {
  render() {
    const { type } = this.props;
    return(
      <div className="module">
        <p>This is a <b>{ type }</b> component => defined by ES6 class</p>
        <img src={snapshot} alt="codeSnapshot" />
      </div>
    )
  }
}

ClassComponent.propTypes = {
  type: string
}

ClassComponent.defaultProps = {
  type: 'default function component name',
}

export default ClassComponent;