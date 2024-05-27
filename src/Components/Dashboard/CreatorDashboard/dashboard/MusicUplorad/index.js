import React, { useEffect, useState } from 'react';
import SongInformation from './SongInformation';
import SongLinks from './SongLinks';
import Pricing from './Pricing';
import GeneralLicence from './GeneralLicence';
import Agreement from './Agreement';
import './musicuploard.css'

const MusicUplorad = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
        songInformation: {},
        songLinks: {},
        pricing: {},
        generalLicence: {},
        agreement: {}
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleDataChange = (stepData, stepName) => {
        setFormData({
            ...formData,
            [stepName]: stepData
        });
    };
    useEffect(() => {

    }, [activeStep])
    return (
        <div className='row'>
            <div className="col-md-3">
                <p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>1.Song information</p>
                <p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>2.Song links</p>
                <p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>3.Pricing</p>
                <p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>4.General licence</p>
                <p onClick={() => setActiveStep(5)} className={currentStep === 5 ? 'active' : ''}>5.Agreement</p>
            </div>

            <div className='col-md-6 custom-form'>
                {currentStep === 1 && (
                    <SongInformation
                        data={formData.songInformation}
                        setFormData={(data) => handleDataChange(data, 'songInformation')}
                    />
                )}
                {currentStep === 2 && (
                    <SongLinks
                        formData={formData.songLinks}
                        setFormData={(data) => handleDataChange(data, 'songLinks')}
                    />
                )}

                {currentStep === 3 && (
                    <Pricing
                        data={formData.pricing}
                        setFormData={(data) => handleDataChange(data, 'pricing')}
                    />
                )}
                {currentStep === 4 && (
                    <GeneralLicence
                        data={formData.generalLicence}
                        setFormData={(data) => handleDataChange(data, 'generalLicence')}
                    />
                )}
                {currentStep === 5 && (
                    <Agreement
                        data={formData.agreement}
                        setFormData={(data) => handleDataChange(data, 'agreement')}
                    />
                )}

                <div>
                    {currentStep > 1 && <button onClick={handlePrev}>Previous</button>}
                    {currentStep < 5 && <button onClick={handleNext}>Next</button>}
                    {currentStep === 5 && <button onClick={() => console.log(formData)}>Submit</button>}
                </div>



            </div>
            <div className='col-md-3'>
                <h1>Note</h1>
                <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>

            </div>


        </div>


    );
};

export default MusicUplorad;
