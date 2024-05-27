import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

const Pricing = () => {
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
          <form>
            <div>
              <label>Licence for the song that you select:</label>
              <div>
                <input
                  type="checkbox"
                  name="pricing"
                  value="Public places"
                  checked={formData?.pricing.includes('Public places')}
                  onChange={handleChange}
                />
                <label>Public places</label>
              </div>
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
              <div>
                <input
                  type="checkbox"
                  name="pricing"
                  value="Metaverse"
                  checked={formData?.pricing.includes('Metaverse')}
                  onChange={handleChange}
                />
                <label>Metaverse</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pricing"
                  value="Specific / Custom licences"
                  checked={formData?.pricing.includes('Specific / Custom licences')}
                  onChange={handleChange}
                />
                <label>Specific / Custom licences</label>
              </div>
            </div>
            <button type="button" onClick={nextStep}>Next</button>
          </form>
        );
      case 2:
        return (
          <form>
            <div>
              <label>Licence to use music in public places as:</label>
              <div>
                <input
                  type="checkbox"
                  name="pricing"
                  value="Background"
                  checked={formData?.pricing.includes('Background')}
                  onChange={handleChange}
                />
                <label>Background</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pricing"
                  value="Live performance"
                  checked={formData?.pricing.includes('Live performance')}
                  onChange={handleChange}
                />
                <label>Live performance</label>
              </div>
            </div>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
          </form>
        );
      case 3:
        return (
          <form>
            <div>
              <label>Can we use previously given information:</label>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Clubs, pubs & night clubs"
                  checked={formData?.Seatingcapacity.includes('Clubs, pubs & night clubs')}
                  onChange={handleChange}
                />
                <label>Clubs, pubs & night clubs</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Restaurants, dining rooms, bars, lounges, coffee houses, etc"
                  checked={formData?.Seatingcapacity.includes('Restaurants, dining rooms, bars, lounges, coffee houses, etc')}
                  onChange={handleChange}
                />
                <label>Restaurants, dining rooms, bars, lounges, coffee houses, etc</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Multiplex & Shopping center, arcades, IT parks, etc"
                  checked={formData?.Seatingcapacity.includes('Multiplex & Shopping center, arcades, IT parks, etc')}
                  onChange={handleChange}
                />
                <label>Multiplex & Shopping center, arcades, IT parks, etc</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Lodges, guest houses, vacation homes, resorts, etc"
                  checked={formData?.Seatingcapacity.includes('Lodges, guest houses, vacation homes, resorts, etc')}
                  onChange={handleChange}
                />
                <label>Lodges, guest houses, vacation homes, resorts, etc</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services"
                  checked={formData?.Seatingcapacity.includes('Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services')}
                  onChange={handleChange}
                />
                <label>Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services</label>
              </div>
              <button type="button">Add an option if needed</button>
              <div>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          </form>
        );
      case 4:
        return (
          <form>
            <div>
              <label>Public places Background - clubs, pubs & night clubs</label>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Seating capacity"
                  checked={formData?.Seatingcapacity.includes('Seating capacity')}
                  onChange={handleChange}
                />
                <label>Seating Capacity</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Price of licence (1 year validity)"
                  checked={formData?.Seatingcapacity.includes('Price of licence (1 year validity)')}
                  onChange={handleChange}
                />
                <label>Price of licence (1 year validity)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Seatingcapacity"
                  value="Price of licence (6 months validity)"
                  checked={formData?.Seatingcapacity.includes('Price of licence (6 months validity)')}
                  onChange={handleChange}
                />
                <label>Price of licence (6 months validity)</label>
              </div>
              <button type="button">Add an option if needed</button>
              <div>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
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
      <h2>Pricing</h2>
      <ProgressBar step={currentStep} />
      {renderForm()}
    </div>
  );
};

export default Pricing;
