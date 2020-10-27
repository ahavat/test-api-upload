import React, { ChangeEvent, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import { Button, Form } from 'react-bootstrap';

interface IGallery {
  name: string;
  attach: string;
}

const FormUp: React.FC = () => {

  const [model, setModel] = useState<IGallery>({
    name: '',
    attach: '',
  })


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    await api.post('/upload', model)
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group >
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={model.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default FormUp;