import React, { ChangeEvent, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import { Button, Form, FormControl } from 'react-bootstrap';

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
    var formData = new FormData();
    // var imagefile = document.querySelector('#file');
    // formData.append("image", imagefile.files[0]);
    await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'key': 'file_upload[file]',
        'type': 'file',
      }
    })
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
        <Button variant="success" type="submit">
          Enviar
         </Button>
      </Form>
    </Container>
  )
}

export default FormUp;