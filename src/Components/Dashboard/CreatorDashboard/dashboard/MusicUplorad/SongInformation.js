import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./musicuploard.css"

const SongInformation = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            
            <h2>Song Information</h2>
            <Form>
                <div className="d-flex">
                    <Form.Check
                        type="radio"
                        id="song"
                        name="songType"
                        label="Song"
                        value="song"
                        checked={selectedOption === "song"}
                        onChange={handleOptionChange}
                    />
                    <Form.Check
                        type="radio"
                        id="instrumental"
                        name="songType"
                        label="Instrumental"
                        value="instrumental"
                        checked={selectedOption === "instrumental"}
                        onChange={handleOptionChange}
                    />
                </div>

                <Form.Group controlId="ownerName">
                    <Form.Label className="statement_form">Copyright owner name *</Form.Label>
                    <Form.Control name="ownerName" placeholder="Enter name" type="text" value={formData?.ownerName} onChange={handleChange} required />
                </Form.Group>
                {/* <Form.Group controlId="category">
                    <Form.Label className="statement_form">Music category *</Form.Label>
                    <Form.Control name="category" as="select" value={formData?.category} onChange={handleChange}>
                        <option value="Song">Song</option>
                        <option value="Instrumental">Instrumental</option>
                    </Form.Control>
                </Form.Group> */}
                <Form.Group controlId="musicLink">
                    <Form.Label className="statement_form">Upload music *</Form.Label>
                    <Form.Control name="musicLink" placeholder='Enter link from platform(Ex:Spotify ,Youtube,Imusic,etc.)' type="text" value={formData?.musicLink} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="coverLink">
                    <Form.Label className="statement_form">Upload cover template *</Form.Label>
                    <Form.Control name="coverLink" type="text" placeholder='Enter link from platform(Ex:Spotify ,Youtube,Imusic,etc.)' value={formData?.coverLink} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="musicName">
                    <Form.Label className="statement_form">Music name *</Form.Label>
                    <Form.Control name="musicName" type="text" placeholder='Enter music name' value={formData?.musicName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="artistName">
                    <Form.Label className="statement_form">Artist name *</Form.Label>
                    <Form.Control name="artistName" type="text" placeholder='Enter artist name'  value={formData?.artistName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="releaseDate">
                    <Form.Label>Month & year of release *</Form.Label>
                    <Form.Control name="releaseDate" placeholder="Select date" type="month" value={formData?.releaseDate} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="language">
                    <Form.Label className="statement_form">Language *</Form.Label>
                    <Form.Control name="language" placeholder="Select language" type="text" value={formData?.language} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="genre">
                    <Form.Label className="statement_form">Genre *</Form.Label>
                    <Form.Control name="genre" placeholder="Select genre" type="text" value={formData?.genre} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="mood">
                    <Form.Label className="statement_form">Mood *</Form.Label>
                    <Form.Control name="mood" type="text" placeholder="Select mood"  value={formData?.mood} onChange={handleChange} required />
                </Form.Group>
              
            </Form>
        </div>
    );
};

export default SongInformation;
