import React, { useContext } from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ThemeContext } from '../../context/ThemeContext';
import { emptyFn } from '../../utils/functions';

/**
 * 
 * detail 
 * [{
 *  id: 1,
 *  name: "general"
 * },
 * {
 *  id: 2,
 *  name: "general 2"
 * }]
 */
function Step(props) {
  const { width, lineStyle, currentStep, details, endProcess } = props
  const theme = useContext(ThemeContext);
  const styles = stylesheet(theme, width, lineStyle)
  const [ detailHead, ...detailsTail ] = details
  if (currentStep > details.length) {
    endProcess()
  }
  return (
    <View style={[ styles.container, styles.row ]}>
      <Circle detail={detailHead} width={width} currentStep={currentStep} />
      {
        detailsTail.length &&
        detailsTail.map(value => {
          const doneOrDoingStep = value.id <= currentStep
          const internalStyles = stylesheet(theme, width, lineStyle, doneOrDoingStep)
          return (
            <View style={internalStyles.row} key={value.id}>
              <Text style={internalStyles.line}>
                ────
              </Text>
              <Circle detail={value} width={width} currentStep={currentStep} />
            </View>
          )
        })
      }
    </View>
  )
}

function Circle(props) {
  const { detail, width, currentStep } = props
  const theme = useContext(ThemeContext);
  const isStepDone = detail.id < currentStep
  const isCurrentStep = detail.id === currentStep
  const doneOrDoingStep = isStepDone || isCurrentStep
  const styles = stylesheet(theme, width, {}, doneOrDoingStep)
  return (
    <View>
      <Text style={styles.title}>{isCurrentStep ? detail.title : null}</Text>
      {isStepDone
        ? <Icon name="check-circle" style={styles.doneIcon} />
        : <View style={styles.circle}>
          <Text style={styles.text}>{detail.id}</Text>
        </View>
      }
    </View >
  )

}

Step.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  lineStyle: ViewPropTypes.style,
  currentStep: PropTypes.number,
  endProcess: PropTypes.func
}

Step.defaultProps = {
  width: 30,
  lineStyle: {
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  endProcess: emptyFn,
  currentStep: 0
}

Circle.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  currentStep: PropTypes.number
}

Circle.defaultProps = {
  width: 30,
  currentStep: 1
}

function stylesheet(theme, width, lineStyle, doneOrDoingStep) {
  return StyleSheet.create({
    container: {
      flex: 1
    },
    line: {
      ...{
        alignSelf: 'center',
        color: doneOrDoingStep ? theme.color : theme.grey2
      },
      ...lineStyle
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    circle: {
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height: width,
      backgroundColor: theme.white,
      borderRadius: width / 2,
      borderWidth: 1,
      borderColor: doneOrDoingStep ? theme.color : theme.grey2,
    },
    text: {
      color: doneOrDoingStep ? theme.color : theme.grey2,
      textAlign: 'center',
    },
    title: {
      color: theme.color,
      textAlign: 'center',
      fontSize: 10,
      marginBottom: 5
    },
    doneIcon: {
      fontSize: width,
      color: theme.color
    }
  })
}

export default Step