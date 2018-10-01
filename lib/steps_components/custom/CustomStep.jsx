import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import CustomStepContainer from './CustomStepContainer';
import {BasicCard} from './BasicCard'

class CustomStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.renderComponent = this.renderComponent.bind(this);
  }

  componentDidMount() {
    const { step } = this.props;
    const { delay, waitAction } = step;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
      
      });
    }, delay);
  }

  renderComponent() {
    const { step, steps, previousStep} = this.props;
    const { component } = step;
    

    let cloned = React.cloneElement(component, {
      // componentProps: component.props,
      step,
      steps,
      previousStep
    });


    return cloned;
  }

  render() {
    const { loading } = this.state;
    const { style } = this.props;

    return (
      <CustomStepContainer
        className="rsc-cs"
        style={style}
      >
        {
          loading ? (
            <Loading />
          ) : this.renderComponent()
        }
      </CustomStepContainer>
    );
  }
}

CustomStep.propTypes = {
  // step: PropTypes.object.isRequired,
  // steps: PropTypes.object.isRequired,
  // style: PropTypes.object.isRequired,
  // previousStep: PropTypes.object.isRequired,
};

export default CustomStep;
