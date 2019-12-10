import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Input = props => {
  let inputElement = null;
  const inputClasses = [];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('border border-danger');
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <Form.Control className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
      );
      break;
    case 'inputgroup':
      inputElement = (
        <InputGroup>
          <Form.Control className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
          <InputGroup.Append>
            <InputGroup.Text>{props.elementInputGroupText}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      );
      break;
    case 'textarea':
      inputElement = (
        <Form.Control as="textarea" className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
      );
      break;
    case 'select':
      inputElement = (
        <Form.Control as="select" className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </Form.Control>
      );
      break;
    case 'heading':
      inputElement = (
        <h4 className="border-bottom mt-4 pb-2">{props.fieldLabel}</h4>
      );
      break;
    default:
      inputElement = (
        <Form.Control className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
      );
  }

  const helpers = props.fieldHelper ?
    props.fieldHelper.map(helperText => {
      return <Form.Text>{helperText}</Form.Text>;
    })
    : null;

  const fieldLabel = props.fieldLabel && props.elementType !== 'heading' ? <Form.Label>{props.fieldLabel}</Form.Label> : null;
  const fieldHelper = props.fieldHelper ? helpers : null;
  const fieldRequired = props.shouldValidate ?
    (props.shouldValidate.required ?
      <span className="text-danger">*</span>
      : null)
    : null;
  const error =
    props.invalid && props.touched ? (
      <Form.Text className="text-danger">{props.error}</Form.Text>
    ) : null;

  return (
    <Form.Group controlId={props.controlId}>
      {fieldLabel} {fieldRequired}
      {inputElement}
      {fieldHelper}
      {error}
    </Form.Group>
  );
};

export default Input;
