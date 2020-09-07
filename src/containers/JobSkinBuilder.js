import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '../layouts/Layout';
import ModalUI from '../ui/modal/ModalUI';
import CodeSnippet from '../components/CodeSnippet';
import checkValidity from '../ui/form/checkValidity';
import Input from '../ui/form/input';
import generateCode from '../helpers/generateCode';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const JobSkinBuilder = props => {
  const [form, setForm] = useState(props.formFields);
  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...form,
    };

    const updatedFormElement = {
      ...updatedForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    setForm(updatedForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in form) {
    formElementsArray.push({
      id: key,
      config: form[key],
    });
  }

  const displayForm = (
    <>
      {formElementsArray.map(formElement => (
        <div className={formElement.config.elementGrid} key={formElement.id}>
          <Input
            key={formElement.id}
            controlId={formElement.id}
            fieldLabel={formElement.config.fieldLabel}
            fieldHelper={formElement.config.fieldHelper}
            elementType={formElement.config.elementType}
            elementInputGroupText={formElement.config.elementInputGroupText}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            error={formElement.config.error}
            changed={event => inputChangedHandler(event, formElement.id)}
          />
        </div>
      ))}
    </>
  );

  const isDisabled = !formIsValid ? { disabled: true } : { disabled: false };

  const GenerateCodeButton = props => {
    return (<button type="button" className="btn btn-primary float-right" {...props.disabled} onClick={generateCodeHandler}>Generate Code</button>);
  }

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setCopied(false);
    setShowModal(false);
  };

  const [code, setCode] = useState('asdfadsf');
  const [copied, setCopied] = useState(false);

  const generateCodeHandler = () => {
    setCode(generateCode(null, form));
    handleShow();
  }

  const modalBody = <div className="code-snippet"><CodeSnippet code={code} /></div>;

  return (
    <Layout>
      <Container className="mt-3 mb-3">
        <Row>
          {displayForm}
          <Col xs="12" className="border-top pt-3 pb-3">
            <GenerateCodeButton disabled={isDisabled} />
          </Col>
        </Row>
      </Container>

      <ModalUI size="lg" show={showModal} closeModal={handleClose} title="Code" body={modalBody}>
        <Modal.Footer>
          {copied ? 'Copied.' : null}
          <CopyToClipboard text={code}
            onCopy={() => setCopied(true)}>
            <Button variant="primary">
              Copy to Clipboard
            </Button>
          </CopyToClipboard>
        </Modal.Footer>
      </ModalUI>

    </Layout>
  )
}

export default JobSkinBuilder;
