import React, { useEffect, useState } from 'react';
import ContentInformation from './ContentInformation';
import ContentLink from './ContentLink';
import PermissionUpload from './PermissionUpload';
// import GeneralLicence from './GeneralLicence';
import Agreement from './Agreement';
import './uploardcontent.css'

const UploardContent = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
        ContentInformation: {},
        ContentLink: {},
        PermissionUpload: {},
        // generalLicence: {},
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
                <p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>1.Content information</p>
                <p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>2.Content links</p>
                <p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>3.Permission to uploard</p>
                {/* <p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>4.Permission to repost</p> */}
                <p onClick={() => setActiveStep(5)} className={currentStep === 4 ? 'active' : ''}>5.Agreement</p>
            </div>

            <div className='col-md-6 custom-form'>
                {currentStep === 1 && (
                    <ContentInformation
                        data={formData.ContentInformation}
                        setFormData={(data) => handleDataChange(data, 'ContentInformation')}
                    />
                )}
                {currentStep === 2 && (
                    <ContentLink
                        formData={formData.ContentLink}
                        setFormData={(data) => handleDataChange(data, 'ContentLink')}
                    />
                )}

                {currentStep === 3 && (
                    <PermissionUpload
                        data={formData.PermissionUpload}
                        setFormData={(data) => handleDataChange(data, 'PermissionUpload')}
                    />
                )}
                {/* {currentStep === 4 && (
                    <GeneralLicence
                        data={formData.generalLicence}
                        setFormData={(data) => handleDataChange(data, 'generalLicence')}
                    />
                )} */}
                {currentStep === 4 && (
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

export default UploardContent;
