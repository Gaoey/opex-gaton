import React, { Component } from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../context/ThemeContext';

const stepIndicatorStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: theme.color,
  separatorFinishedColor: theme.color,
  separatorUnFinishedColor: theme.grey,
  stepIndicatorFinishedColor: theme.white,
  stepIndicatorUnFinishedColor: theme.white,
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: theme.color,
  stepIndicatorLabelFinishedColor: theme.white,
  stepIndicatorLabelUnFinishedColor: theme.white,
  labelColor: theme.white,
  labelSize: 15,
  currentStepLabelColor: theme.color
}

export default class Step2 extends Component {

  renderStepIndicator = (props) => {
    return props.stepStatus === "current" || props.stepStatus === "finished"
      ? <Icon name="check-circle" size={30} style={{ color: theme.color }} />
      : <Icon name="checkbox-blank-circle-outline" size={30} style={{ color: theme.grey }} />
  }

  render() {
    // const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
    // stepCount = labels.length
    const { stepCount, currentPosition, labels } = this.props
    return (
      <View style={{ backgroundColor: theme.white, justifyContent: 'center', height: 60 }}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={stepCount}
          currentPosition={currentPosition || 0}
          labels={labels || []}
          renderStepIndicator={this.renderStepIndicator}
        />
      </View>
    )
  }
}
