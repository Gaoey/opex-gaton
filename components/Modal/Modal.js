import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'
import ModalHeader from './ModalHeader';


const Modal = (props) => {
  const { children } = props
  return (
    <SafeAreaView>
      <ModalHeader {...props} />
      {children}
    </SafeAreaView>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Modal