import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { arrayOf, string, func } from 'prop-types';
import { Row, Col } from 'react-aaui/es/grid';
import './SwitchModule.less';

class SwitchModule extends PureComponent {
  static propTypes = {
    moduleTypes: arrayOf(string),
    getActiveModule: func.isRequired
  }

  static defaultProps = {
    moduleTypes: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      currenActiveModule: 'Introduction'
    }
  }

  handleClick = (moduleType) => {
    const { currenActiveModule } = this.state;
    const { getActiveModule } = this.props;

    if(currenActiveModule !== moduleType) {
        this.setState({
          currenActiveModule: moduleType
        }, ()=> {
          getActiveModule(moduleType)
        })
    }
  }

  render() {
    const { moduleTypes } = this.props;
    const { currenActiveModule } = this.state;

    if(moduleTypes.length === 0) {
      return <div>This is no moduleTypes to show!</div>
    }

    return (
      <Row fluid justify='start' align="center" gutter={30} className="switchModule">
        {
          moduleTypes.map((m, index) => {
            return (
              <Col span={12} sm={2} key={index} onClick={() => this.handleClick(m)}>
                <div className={classNames('item',{
                  active: currenActiveModule === m
                })} key={index}>
                  <div className="icon-leaf item-icon" />
                  <div className="item-text">{m.replace(/([A-Z])/g, ' $1').trim()}</div> 
                </div>
              </Col>
            )
          })
        }
        </Row>
    );
  }
}

export default SwitchModule;
