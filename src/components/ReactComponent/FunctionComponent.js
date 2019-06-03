import React from 'react';
import { string } from 'prop-types';
import snapshot from './functionComponent.png';

const FunctionComponent = ({ type }) => {
  return (
    <div className="module">
      <p>This is a <b>{ type }</b> component => stateless component without lifecycle</p>
      <img src={snapshot} alt="codeSnapshot" />
    </div>
  );
}



FunctionComponent.propTypes = {
  type: string
}

FunctionComponent.defaultProps = {
  type: 'default function component name',
}

export default FunctionComponent;