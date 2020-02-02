import React from 'react';
import TextArea from '../Input/TextArea';
import Form from './Form';

function FormTextArea(props) {
  return (
    <Form {...props}>
      {(props) => <TextArea {...props} />}
    </Form>
  )
}

export default FormTextArea