import React from 'react';
import Input from "../Input/Input";
import Form from './Form';

function FormInput(props) {
  return (
    <Form {...props}>
      {(props) => <Input {...props} />}
    </Form>
  )
}

export default FormInput