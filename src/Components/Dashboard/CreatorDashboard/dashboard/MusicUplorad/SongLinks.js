import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import "./musicuploard.css"

const SongLinks = ({ formData, setFormData }) => {
  const [songLinks, setSongLinks] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongLinks((prev) => ({
        ...prev,
        [name]: value,
    }));
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setFormData(songLinks);
}, []);
const handleBlur = (e) => {
    setFormData(songLinks);
}
  return (
    <div>
      <h2>Song Links</h2>
      <Form>
        <Form.Group controlId="spotifyLink">
          <Form.Label className="statement_form">Spotify link</Form.Label>
          <Form.Control name="spotifyLink" placeholder='Enter link' type="text" value={formData.spotifyLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="youtubeLink">
          <Form.Label className="statement_form">YouTube link</Form.Label>
          <Form.Control name="youtubeLink" placeholder='Enter link' type="text" value={formData.youtubeLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="gaanaLink">
          <Form.Label className="statement_form">Gaana link</Form.Label>
          <Form.Control name="gaanaLink"  placeholder='Enter link' type="text" value={formData.gaanaLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="amazonLink">
          <Form.Label className="statement_form">Amazon Music link</Form.Label>
          <Form.Control name="amazonLink"  placeholder='Enter link' type="text" value={formData.amazonLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="jioSaavnLink">
          <Form.Label className="statement_form">JioSaavn link</Form.Label>
          <Form.Control name="jioSaavnLink" placeholder='Enter link' type="text"  value={formData.amazonLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="wynkLink">
          <Form.Label className="statement_form">Wynk music link</Form.Label>
          <Form.Control name="wynkLink" placeholder='Enter link'  type="text"  value={formData.wynkLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="appleLink">
          <Form.Label className="statement_form">Apple Music link</Form.Label>
          <Form.Control name="appleLink" placeholder='Enter link' type="text" value={formData.appleLink} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="otherLink">
          <Form.Label className="statement_form">Other link</Form.Label>
          <Form.Control name="otherLink" placeholder='Enter link' type="text" value={formData.otherLink} onBlur={handleBlur} onChange={handleChange} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SongLinks;
