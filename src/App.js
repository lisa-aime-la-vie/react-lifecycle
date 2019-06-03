import React, { Component } from 'react';
import keys from 'lodash/keys';
import moduleTypes from './datas/modules';
import SwitchModule from './components/SwitchModule';
import * as modules from './components';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShowModuleType: 'Introduction'
    }
  }

  getActiveModule = (moduleType) => {
    this.setState({
      currentShowModuleType: moduleType
    })
  }
  
  onSubmit = () => {
    this.field.submit()
    //console.log(this.refs, 88)
  }

  render() {
    const { currentShowModuleType } = this.state;
    const ShowField = modules[currentShowModuleType];
    return (
      <div className="App">
        <SwitchModule moduleTypes={keys(moduleTypes)} getActiveModule={this.getActiveModule}/>
        <ShowField ref={(f) => { this.field = f; }} name={moduleTypes[currentShowModuleType]}/> 
      </div>
    );
  }
}

export default App;
