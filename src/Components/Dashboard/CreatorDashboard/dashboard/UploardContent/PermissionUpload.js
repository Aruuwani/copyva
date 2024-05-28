import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

const PermissionUpload = () => {
  const [formData, setFormData] = useState({
    pricing: [],
    Seatingcapacity: [],
    // Add other form data fields as needed
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [additionalOptions, setAdditionalOptions] = useState([]);

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

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };



  const addOption = () => {
    const defaultOptions = [
      'Youtube',
      'Instagram',
      'Facebook',
      'Set a discuss with copyva team',
      'Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services'
    ];
    setAdditionalOptions((prevOptions) => [
      ...prevOptions,
      ...defaultOptions.map((option) => ({ value: option, label: option })),
    ]);
  };
  
  useEffect(() => {
    addOption();
  }, []);

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <form>
            <div>
              <label>Permission to remix/combine the selected content/video by editing:</label>
              <div>
                <input
                  type="checkbox"
                  name="pricing"
                  value="Commercial / Business purpose"
                  checked={formData?.pricing.includes('Commercial / Business purpose')}
                  onChange={handleChange}
                />
                <label>Commercial / Business purpose</label>
              </div>
            </div>
            <button type="button" onClick={nextStep}>Next</button>
          </form>
        );
      case 2:
        return (
          <form>
           {additionalOptions.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name="pricing"
            value={option.value}
            checked={formData?.pricing.includes(option.value)}
            onChange={handleChange}
          />
          <label>{option.label}</label>
        </div>
      ))}
      <button type="button" onClick={addOption}>
          Add an option if needed
        </button>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
          </form>
        );
      case 3:
        return (
          <form>
            <div>
              <label>Youtube:</label>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="0 to 50,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('0 to 50,000 subscribers')}
                  onChange={handleChange}
                />
                <label>0 to 50,000 subscribers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="50,000 to 500,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('50,000 to 500,000 subscribers')}
                  onChange={handleChange}
                />
                <label>50,000 to 500,000 subscribers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="500,000 to 2,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('500,000 to 2,000,000 subscribers')}
                  onChange={handleChange}
                />
                <label>500,000 to 2,000,000 subscribers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="2,000,000 to 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('2,000,000 to 10,000,000 subscribers')}
                  onChange={handleChange}
                />
                <label>2,000,000 to 10,000,000 subscribers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="More than 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('More than 10,000,000 subscribers')}
                  onChange={handleChange}
                />
                <label>More than 10,000,000 subscribers</label>
              </div>
            </div>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
          </form>
        );
      case 4:
        return (
          <form>
            <div>
              <label>Licence to use the content on Youtube - 0 to 50,000 subscribers:</label>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="AddHeading"
                  checked={formData?.Seatingcapacity.includes('AddHeading')}
                  onChange={handleChange}
                />
                <label>Add Heading</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="One time usage"
                  checked={formData?.Seatingcapacity.includes('One time usage')}
                  onChange={handleChange}
                />
                <label>One time usage</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Multiple usage"
                  checked={formData?.Seatingcapacity.includes('Multiple usage')}
                  onChange={handleChange}
                />
                <label>Multiple usage</label>
              </div>
            </div>
            <button type="button" onClick={prevStep}>Back</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Permission Upload</h2>
      <ProgressBar step={currentStep} />
      {renderForm()}
    </div>
  );
};

export default PermissionUpload;
