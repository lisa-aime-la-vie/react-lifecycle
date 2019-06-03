import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import './ReactComponent.less';

class ReactComponent extends PureComponent {
  static propTypes = {
    name: string
  }

  static defaultProps = {
    name: 'default prop name',
  }

  render() {
    const { name } = this.props;

    return (
      <div className="module react-component">
        <header>{name}</header>
        <FunctionComponent type={ 'Function Component' }/>
        <hr />
        <ClassComponent type={ 'Class Component' }/>
      </div>
    );
  }
}

ReactComponent.type= 'ReactComponent'
export default ReactComponent;
