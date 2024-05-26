import React, { useState } from "react";
import "./dashboard.css"; // Import your CSS file for styling
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";


const Statement = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { register, handleSubmit } = useForm();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

 

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
    // You can submit the form data or handle it as per your requirement
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group d-flex flex-column">
              <label htmlFor="copyrightOwnerName">
                Copyright Owner Name
              </label>
              <input
                type="text"
                className="form-control"
                id="copyrightOwnerName"
                placeholder="Enter copyright owner name"
                {...register("copyrightOwnerName")}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="uploadMusic">Upload Music</label>
              <input
                type="text"
                className="form-control"
                id="uploadMusic"
                placeholder="Enter Upload Music"
                {...register("uploadMusic")}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="uploadCoverTemplate">Upload Cover Template</label>
              <input
                type="text"
                className="form-control"
                id="uploadCoverTemplate"
                placeholder="Enter Upload Cover Template"
                {...register("uploadCoverTemplate")}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="musicName">Music Name</label>
              <input
                type="text"
                className="form-control"
                id="musicName"
                placeholder="Enter music name"
                {...register("musicName")}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="artistName">Artist Name</label>
              <input
                type="text"
                className="form-control"
                id="artistName"
                placeholder="Enter artist name"
                {...register("artistName")}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="releaseDate">Month & Year of Release</label>
              <input
                type="date"
                className="form-control"
                id="releaseDate"
                {...register("releaseDate")}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="language">Language</label>
              <Form.Select id="language" {...register("language")}>
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                {/* Add more language options as needed */}
              </Form.Select>
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="genre">Genre</label>
              <Form.Select id="genre" {...register("genre")}>
                <option>Select Genre</option>
                <option>Pop</option>
                <option>Rock</option>
                <option>Hip Hop</option>
                {/* Add more genre options as needed */}
              </Form.Select>
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="mood">Mood</label>
              <Form.Select id="mood" {...register("mood")}>
                <option>Select Mood</option>
                <option>Happy</option>
                <option>Sad</option>
                <option>Excited</option>
                {/* Add more mood options as needed */}
              </Form.Select>
            </div>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </form>
        );
      case 1:
        return (
          <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group d-flex flex-column">
    <label htmlFor="spotifyLink">Spotify Link</label>
    <input
      type="text"
      className="form-control"
      id="spotifyLink"
      placeholder="Enter Spotify link"
      {...register("spotifyLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="youtubeLink">YouTube Link</label>
    <input
      type="text"
      className="form-control"
      id="youtubeLink"
      placeholder="Enter YouTube link"
      {...register("youtubeLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="gaanaLink">Gaana Link</label>
    <input
      type="text"
      className="form-control"
      id="gaanaLink"
      placeholder="Enter Gaana link"
      {...register("gaanaLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="amazonMusicLink">Amazon Music Link</label>
    <input
      type="text"
      className="form-control"
      id="amazonMusicLink"
      placeholder="Enter Amazon Music link"
      {...register("amazonMusicLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="jiosaavanLink">JioSaavn Link</label>
    <input
      type="text"
      className="form-control"
      id="jiosaavanLink"
      placeholder="Enter JioSaavn link"
      {...register("jiosaavanLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="wynkMusicLink">Wynk Music Link</label>
    <input
      type="text"
      className="form-control"
      id="wynkMusicLink"
      placeholder="Enter Wynk Music link"
      {...register("wynkMusicLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="appleMusicLink">Apple Music Link</label>
    <input
      type="text"
      className="form-control"
      id="appleMusicLink"
      placeholder="Enter Apple Music link"
      {...register("appleMusicLink")}
    />
  </div>
  <div className="form-group d-flex flex-column">
    <label htmlFor="otherLink">Other Link</label>
    <input
      type="text"
      className="form-control"
      id="otherLink"
      placeholder="Enter other link"
      {...register("otherLink")}
    />
  </div>
  <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
</form>

        );
      case 2:
        return (
          <form>
            <label htmlFor="price">Price:</label>
            <br />
            <input type="text" id="price" name="price" />
            <br />
            {/* Add other form fields related to pricing */}
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </form>
        );
      case 3:
        return (
          <form>
            <label htmlFor="licence">Licence:</label>
            <br />
            <input type="text" id="licence" name="licence" />
            <br />
            {/* Add other form fields related to general licence */}
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </form>
        );
      case 4:
        return (
          <form>
            <label htmlFor="agreement">Agreement:</label>
            <br />
            <input type="text" id="agreement" name="agreement" />
            <br />
            {/* Add other form fields related to agreement */}
            <button onClick={handlePrev}>Previous</button>
            <button type="submit">Submit</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex" style={{ display: "flex" }}>
     <div className="col-md-3">
        <p
          onClick={() => setActiveStep(0)}
          className={activeStep === 0 ? "active" : ""}
        >
          Song information
        </p>
        <p
          onClick={() => setActiveStep(1)}
          className={activeStep === 1 ? "active" : ""}
        >
          Song links
        </p>
        <p
          onClick={() => setActiveStep(2)}
          className={activeStep === 2 ? "active" : ""}
        >
          Pricing
        </p>
        <p
          onClick={() => setActiveStep(3)}
          className={activeStep === 3 ? "active" : ""}
        >
          General licence
        </p>
        <p
          onClick={() => setActiveStep(4)}
          className={activeStep === 4 ? "active" : ""}
        >
          Agreement
        </p>
      </div>

      <div className="col-md-6">{renderForm()}</div>
      <div className="col-md-3">
        <p>helloworld</p>
      </div>
    </div>
  );
};

export default Statement;
