import React from 'react';
import { Form } from 'react-bootstrap';
import "./musicuploard.css"

const SongLinks = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Song Links</h2>
      <Form>
        <Form.Group controlId="spotifyLink">
          <Form.Label className="statement_form">Spotify link:</Form.Label>
          <Form.Control name="spotifyLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="youtubeLink">
          <Form.Label className="statement_form">YouTube link:</Form.Label>
          <Form.Control name="youtubeLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="gaanaLink">
          <Form.Label className="statement_form">Gaana link:</Form.Label>
          <Form.Control name="gaanaLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="amazonLink">
          <Form.Label className="statement_form">Amazon Music link:</Form.Label>
          <Form.Control name="amazonLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="jioSaavnLink">
          <Form.Label className="statement_form">JioSaavn link:</Form.Label>
          <Form.Control name="jioSaavnLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="wynkLink">
          <Form.Label className="statement_form">Wynk music link:</Form.Label>
          <Form.Control name="wynkLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="appleLink">
          <Form.Label className="statement_form">Apple Music link:</Form.Label>
          <Form.Control name="appleLink" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="otherLink">
          <Form.Label className="statement_form">Other link:</Form.Label>
          <Form.Control name="otherLink" type="text" onChange={handleChange} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SongLinks;
