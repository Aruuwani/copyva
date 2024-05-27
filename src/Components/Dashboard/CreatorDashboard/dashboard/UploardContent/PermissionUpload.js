import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

const PermissionUpload = () => {
  const [formData, setFormData] = useState({
    pricing: [],
    Seatingcapacity: [],
    // Add other form data fields as needed
  });
  const [currentStep, setCurrentStep] = useState(1);

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

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <form className='Progress_form'>
            <div>
              <h4>Permission to remix/combine the selected content/video by editing:</h4>
              <div className='check_progress'>
                <input
                  type="radio"
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
          <form className='Progress_form'>
            <div>
              <h4>Commercial/Business Purpose:</h4>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="pricing"
                  value="Youtube"
                  checked={formData?.pricing.includes('Youtube')}
                  onChange={handleChange}
                />
                <label>Youtube</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="pricing"
                  value="Instagram"
                  checked={formData?.pricing.includes('Instagram')}
                  onChange={handleChange}
                />
                <label>Instagram</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="pricing"
                  value="Facebook"
                  checked={formData?.pricing.includes('Facebook')}
                  onChange={handleChange}
                />
                <label>Facebook</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="pricing"
                  value="Set a discuss with copyva team"
                  checked={formData?.pricing.includes('Set a discuss with copyva team')}
                  onChange={handleChange}
                />
                <label>Set a discuss with copyva team</label>
              </div>
            </div>
            <div className='btn_wapper'>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
            </div>
          </form>
        );
      case 3:
        return (
          <form className='Progress_form'>
            <div>
              <h4>Youtube:</h4>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="0 to 50,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('0 to 50,000 subscribers')}
                  onChange={handleChange}
                />
                <label>0 to 50,000 subscribers</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="50,000 to 500,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('50,000 to 500,000 subscribers')}
                  onChange={handleChange}
                />
                <label>50,000 to 500,000 subscribers</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="500,000 to 2,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('500,000 to 2,000,000 subscribers')}
                  onChange={handleChange}
                />
                <label>500,000 to 2,000,000 subscribers</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="2,000,000 to 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('2,000,000 to 10,000,000 subscribers')}
                  onChange={handleChange}
                />
                <label>2,000,000 to 10,000,000 subscribers</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="More than 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes('More than 10,000,000 subscribers')}
                  onChange={handleChange}
                />
                <label>More than 10,000,000 subscribers</label>
              </div>
            </div>
            <div className='btn_wapper'>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
            </div>
          </form>
        );
      case 4:
        return (
          <form className='Progress_form'>
            <div>
              <h4>Licence to use the content on Youtube - 0 to 50,000 subscribers:</h4>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="AddHeading"
                  checked={formData?.Seatingcapacity.includes('AddHeading')}
                  onChange={handleChange}
                />
                <label>Add Heading</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="One time usage"
                  checked={formData?.Seatingcapacity.includes('One time usage')}
                  onChange={handleChange}
                />
                <label>One time usage</label>
              </div>
              <div className='check_progress'>
                <input
                  type="radio"
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
    <div className='Progress_form'>
      <h2>Permission Upload</h2>
      <ProgressBar step={currentStep} />
      {renderForm()}
    </div>
  );
};

export default PermissionUpload;
