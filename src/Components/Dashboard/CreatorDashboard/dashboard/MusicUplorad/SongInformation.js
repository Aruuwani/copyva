
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import "./musicuploard.css";

const SongInformation = ({ data, setFormData }) => {
    const [songInfo, setSongInfo] = useState(data);

    useEffect(() => {
        setSongInfo(data);
    }, [data]);
    console.log('songInfo :>> ', songInfo);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSongInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    useEffect(() => {
        setFormData(songInfo);
    }, []);
    const handleBlur = (e) => {
        setFormData(songInfo);
    }

    return (
        <div>
            <h2>Song Information</h2>
            <Form>
                <div className="d-flex">
                    <Form.Check
                        type="radio"
                        id="song"
                        name="music_category"
                        label="Song"
                        value="song"
                        checked={songInfo?.music_category === "song"}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="radio"
                        id="instrumental"
                        name="music_category"
                        label="Instrumental"
                        value="instrumental"
                        checked={songInfo?.music_category === "instrumental"}
                        onChange={handleChange}
                    />
                </div>

                <Form.Group controlId="ownerName">
                    <Form.Label className="statement_form">Copyright owner name </Form.Label>
                    <Form.Control
                        name="owner_name"
                        placeholder="Enter name"
                        type="text"
                        value={songInfo?.owner_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="musicLink">
                    <Form.Label className="statement_form">Upload music </Form.Label>
                    <Form.Control
                        name="upload_music_link"
                        placeholder="Enter link from platform (Ex: Spotify, YouTube, iMusic, etc.)"
                        type="text"
                        value={songInfo?.upload_music_link}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="cover_template_link">
                    <Form.Label className="statement_form">Upload cover template </Form.Label>
                    <Form.Control
                        name="cover_template_link"
                        type="text"
                        placeholder="Enter link from platform (Ex: Spotify, YouTube, iMusic, etc.)"
                        value={songInfo?.cover_template_link}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="music_name">
                    <Form.Label className="statement_form">Music name </Form.Label>
                    <Form.Control
                        name="music_name"
                        type="text"
                        placeholder="Enter music name"
                        value={songInfo?.music_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="artist_name">
                    <Form.Label className="statement_form">Artist name </Form.Label>
                    <Form.Control
                        name="artist_name"
                        type="text"
                        placeholder="Enter artist name"
                        value={songInfo?.artist_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="release_date">
                    <Form.Label>Month & year of release </Form.Label>
                    <Form.Control
                        name="release_date"
                        placeholder="Select date"
                        type="date"
                        value={songInfo?.release_date}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="languages">
                    <Form.Label className="statement_form">Select language</Form.Label>
                    <div className="relative">
                        <Form.Control
                            as="select"
                            name="languages"
                            value={songInfo?.languages}
                            onChange={handleChange}
                            // onBlur={handleBlur}
                            required
                            className="custom-select"
                        >
                            <option value="">Select language</option>
                            <option value="AF">Afrikaans</option>
                            <option value="SQ">Albanian</option>
                            <option value="AR">Arabic</option>
                            <option value="HY">Armenian</option>
                            <option value="EU">Basque</option>
                            <option value="BN">Bengali</option>
                            <option value="BG">Bulgarian</option>
                            <option value="CA">Catalan</option>
                            <option value="KM">Cambodian</option>
                            <option value="ZH">Chinese (Mandarin)</option>
                            <option value="HR">Croatian</option>
                            <option value="CS">Czech</option>
                            <option value="DA">Danish</option>
                            <option value="NL">Dutch</option>
                            <option value="EN">English</option>
                            <option value="ET">Estonian</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finnish</option>
                            <option value="FR">French</option>
                            <option value="KA">Georgian</option>
                            <option value="DE">German</option>
                            <option value="EL">Greek</option>
                            <option value="GU">Gujarati</option>
                            <option value="HE">Hebrew</option>
                            <option value="HI">Hindi</option>
                            <option value="HU">Hungarian</option>
                            <option value="IS">Icelandic</option>
                            <option value="ID">Indonesian</option>
                            <option value="GA">Irish</option>
                            <option value="IT">Italian</option>
                            <option value="JA">Japanese</option>
                            <option value="JW">Javanese</option>
                            <option value="KO">Korean</option>
                            <option value="LA">Latin</option>
                            <option value="LV">Latvian</option>
                            <option value="LT">Lithuanian</option>
                            <option value="MK">Macedonian</option>
                            <option value="MS">Malay</option>
                            <option value="ML">Malayalam</option>
                            <option value="MT">Maltese</option>
                            <option value="MI">Maori</option>
                            <option value="MR">Marathi</option>
                            <option value="MN">Mongolian</option>
                            <option value="NE">Nepali</option>
                            <option value="NO">Norwegian</option>
                            <option value="FA">Persian</option>
                            <option value="PL">Polish</option>
                            <option value="PT">Portuguese</option>
                            <option value="PA">Punjabi</option>
                            <option value="QU">Quechua</option>
                            <option value="RO">Romanian</option>
                            <option value="RU">Russian</option>
                            <option value="SM">Samoan</option>
                            <option value="SR">Serbian</option>
                            <option value="SK">Slovak</option>
                            <option value="SL">Slovenian</option>
                            <option value="ES">Spanish</option>
                            <option value="SW">Swahili</option>
                            <option value="SV">Swedish</option>
                            <option value="TA">Tamil</option>
                            <option value="TT">Tatar</option>
                            <option value="TE">Telugu</option>
                            <option value="TH">Thai</option>
                            <option value="BO">Tibetan</option>
                            <option value="TO">Tonga</option>
                            <option value="TR">Turkish</option>
                            <option value="UK">Ukrainian</option>
                            <option value="UR">Urdu</option>
                            <option value="UZ">Uzbek</option>
                            <option value="VI">Vietnamese</option>
                            <option value="CY">Welsh</option>
                            <option value="XH">Xhosa</option>
                        </Form.Control>
                        <svg
                            className="custom-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Form.Group>

                <Form.Group controlId="genres">
                    <Form.Label className="statement_form">Select Genre</Form.Label>
                    <div className="relative">
                        <Form.Control
                            as="select"
                            name="genres"
                            value={songInfo?.genres}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="custom-select"
                        >
                            <option value="">Select genre</option>
                            <option value="electronic_dance_music">Electronic Dance Music</option>
                            <option value="pop_drop">Pop-drop</option>
                            <option value="other_genres">Other Genres</option>
                        </Form.Control>
                        <svg
                            className="custom-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Form.Group>
                <Form.Group controlId="moods">
                    <Form.Label className="statement_form">Select mood</Form.Label>
                    <div className="relative">
                        <Form.Control
                            as="select"
                            name="moods"
                            value={songInfo?.moods}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="custom-select"
                        >
                            <option value="">Select mood</option>
                            <option value="romantic">romantic</option>
                            <option value="sad">sad</option>
                            <option value="hip-hop">hip-hop</option>
                            <option value="love">love</option>
                        </Form.Control>
                        <svg
                            className="custom-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Form.Group>


            </Form>
        </div>
    );
};

export default SongInformation;
