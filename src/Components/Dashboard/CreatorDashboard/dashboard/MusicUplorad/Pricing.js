import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar"; // Import the ProgressBar component
import { Form, Button } from "react-bootstrap";
const Pricing = ({ nextstep,onPricingStepChange }) => {
  const [formData, setFormData] = useState({
    pricing: [],
    Seatingcapacity: [],
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [additionalOptions1, setAdditionalOptions1] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      if (checked) {
        if (!Array.isArray(updatedData[name])) {
          updatedData[name] = [];
        }
        updatedData[name] = [...updatedData[name], value];
      } else {
        updatedData[name] = updatedData[name].filter((item) => item !== value);
      }
      return updatedData;
    });
  };
  useEffect(() => {
    onPricingStepChange(currentStep);
  }, [currentStep, onPricingStepChange]);
  const nextStep = () => {
    setCurrentStep((prevStep) => {
      const newStep = Math.min(prevStep + 1, 4);
      localStorage.setItem("pricingStep", newStep);
      return newStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      const newStep = Math.max(prevStep - 1, 1);

      return newStep;
    });
  };

  const Case3Options = [
    "Clubs, pubs & night clubs",
    "Restaurants, dining rooms, bars, lounges, coffee houses, etc",
    "Multiplex & Shopping center, arcades, IT parks, etc",
    "Lodges, guest houses, vacation homes, resorts, etc",
    "Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services",
  ];

  const addOption = () => {
    setAdditionalOptions((prevOptions) => [
      ...prevOptions,
      ...Case3Options.map((option) => ({ value: option, label: option })),
    ]);
  };
  useEffect(() => {
    // Initialize default options once
    setAdditionalOptions(
      Case3Options.map((option) => ({ value: option, label: option }))
    );

  }, [currentStep]);

const handleChangecase3 = (event) => {
  const { value } = event.target;
  setFormData((prevData) => {
    if (prevData.Seatingcapacity.includes(value)) {
      return {
        ...prevData,
        Seatingcapacity: prevData.Seatingcapacity.filter(
          (item) => item !== value
        ),
      };
    } else {
      return {
        ...prevData,
        Seatingcapacity: [...prevData.Seatingcapacity, value],
      };
    }
  });
};

const Case4Options = [
  "Seating Capacity",
  "Price of licence (1 year validity)",
  "Price of licence (6 months validity)",
];

const addOptionCase4 = () => {
  setAdditionalOptions1((prevOptions) => [
    ...prevOptions,
    ...Case4Options.map((option) => ({ value: option, label: option })),
  ]);
};
useEffect(() => {
  // Initialize default options once
  setAdditionalOptions1(
    Case4Options.map((option) => ({ value: option, label: option }))
  );
}, []);
const handleChangeCase4 = (event) => {
  const { value } = event.target;
  setFormData((prevData) => {
    if (prevData.Seatingcapacity.includes(value)) {
      return {
        ...prevData,
        Seatingcapacity: prevData.Seatingcapacity.filter(
          (item) => item !== value
        ),
      };
    } else {
      return {
        ...prevData,
        Seatingcapacity: [...prevData.Seatingcapacity, value],
      };
    }
  });
};
const handleDivClick = (value) => {
  setFormData({ ...formData, pricing: value });
};
const renderForm = () => {
  switch (currentStep) {
    case 1:
      return (
        <form className="Progress_form">
          <div>
            <h4>Licence for the song that you select:</h4>
            <div className="check_progress">
              <input
                type="radio"
                name="pricing"
                value="Public places"
                checked={formData?.pricing.includes("Public places")}
                onChange={handleChange}
              />
              <label>Public places</label>
            </div>
            <div className="check_progress">
              <input
                type="radio"
                name="pricing"
                value="Commercial / Business purpose"
                checked={formData?.pricing.includes(
                  "Commercial / Business purpose"
                )}
                onChange={handleChange}
              />
              <label>Commercial / Business purpose</label>
            </div>
            <div className="check_progress">
              <input
                type="radio"
                name="pricing"
                value="Metaverse"
                checked={formData?.pricing.includes("Metaverse")}
                onChange={handleChange}
              />
              <label>Metaverse</label>
            </div>
            <div className="check_progress">
              <input
                type="radio"
                name="pricing"
                value="Specific / Custom licences"
                checked={formData?.pricing.includes(
                  "Specific / Custom licences"
                )}
                onChange={handleChange}
              />
              <label>Specific / Custom licences</label>
            </div>
          </div>
          <div className="btn_wapper"><button type="button" onClick={nextStep}>
            Next
          </button>
          </div>
        </form>
      );
    case 2:
      return (
        <form className="Progress_form">
          <div>
            <h4>Licence to use music in public places as:</h4>
            <div className="check_progress"
            onClick={() => handleDivClick("Background")}>
              <input
                type="radio"
                name="pricing"
                value="Background"
                checked={formData?.pricing.includes("Background")}
                onChange={handleChange}
              />
              <label>Background</label>
            </div>
            <div className="check_progress"   onClick={() => handleDivClick("BackgLive performanceround")}>
              <input
                type="radio"
                name="pricing"
                value="Live performance"
                checked={formData?.pricing.includes("Live performance")}
                onChange={handleChange}
              />
              <label>Live performance</label>
            </div>
          </div>
          <div className="btn_wapper">
            <button type="button" onClick={prevStep} className="btn-light">
              Back
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </form>
      );
    case 3:
      return (
        <form className="Progress_form">
          <div>
            <h4>Can we use previously given information:</h4>
            {additionalOptions.map((option, index) => (
              <div className="check_progress" key={index}>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value={option.value}
                  checked={formData.Seatingcapacity.includes(option.value)}
                  onChange={handleChangecase3}
                />
                <label>{option.label}</label>
              </div>
            ))}

            <button type="button" onClick={addOption} className="bg_transparent">
              Add an option if needed
            </button>
            <div>
              <div className="btn_wapper">
                <button type="button" onClick={prevStep} className="btn-light">
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    case 4:

      return (

        <form className="Progress_form">
          <div>
            <h4>Public places Background - clubs, pubs & night clubs</h4>

            {additionalOptions1.map((option, index) => (
              <Form.Group key={index} controlId={option.value}>
                <Form.Label className="statement_form">
                  {option.label}
                </Form.Label>
                <Form.Control
                  name={option.value}
                  placeholder={`Enter ${option.label}`}
                  type="text"
                  value={formData[option.value]}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            ))}
            <button type="button" onClick={addOptionCase4} className='add_option bg_transparent'>+Add an option if needed</button>
            {/* <button type="button" onClick={addOptionCase4}>
                + Add an option if needed
              </button> */}
            <div>
              <div className="btn_wapper">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="btn-light">
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextstep}
                // disabled={currentStep === 4}
                >
                  {currentStep === 4 ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    default:
      return null;
  }
};

return (
  <div>
    <div class="d-flex justify-content-between">
      <h2>Pricing</h2>

      <span> Step {currentStep}/4</span>
    </div>
    <ProgressBar step={currentStep} />
    {renderForm()}
  </div>
);
};

export default Pricing;
