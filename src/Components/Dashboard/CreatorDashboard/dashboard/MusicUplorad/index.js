import React, { useEffect, useState } from 'react';
import SongInformation from './SongInformation';
import SongLinks from './SongLinks';
import Pricing from './Pricing';
import GeneralLicence from './GeneralLicence';
import Agreement from './Agreement';
import './musicuploard.css'
import BlubImg from "../../../../../assets/noun-light-blub.png"
import check from "../../../../../assets/check.svg"
import BackImg from '../../../../../assets/backIMg.svg'
import PrizeImg from '../../../../../assets/predefined_prize.svg'
import { IoMdClose } from "react-icons/io";


const MusicUplorad = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [activeStep, setActiveStep] = useState();
  
    const [showPredefinedPrice, setShowPredefinedPrice] = useState(false);
   
    const [prisingStep, setPrisingStep] = useState(
        localStorage.getItem("pricingStep") || ""
    );
    //   console.log('prisingStep', prisingStep)
    const [formData, setFormData] = useState({
        songInformation: {},
        songLinks: {},
        pricing: {},
        generalLicence: {},
        agreement: {},
    });

    const [isActive, setIsActive] = useState(false);

    const handleSearchClick = () => {
        setIsActive(!isActive);
    };

    const handleBlurbClick = () => {
        setIsActive(true);
    };

    const handleCloseClick = () => {
        setIsActive(false);
    };


    const handleNext = () => {
        // debugger;
        // if (prisingStep === 4) {
        localStorage.removeItem("pricingStep");
        // }
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
   
    const handlePricingStepChange = (step) => {
        if (step === 4) {
            setShowPredefinedPrice(true);
        } else {
            setShowPredefinedPrice(false);
        }
    };
    return (
        <>
            <div className='back_screens'>
                <h1><a href="/dashboard/home"><img src={BackImg} alt='BackImg' />Music upload</a></h1>
                <div className='d-block d-md-none blurb_img' onClick={handleBlurbClick}><img src={BlubImg} alt='BlubImg' /></div>
            </div>
            <div className='step_part'>

                <div className="stepForm_part">

                    <div className={`step_divForm ${currentStep > 1 ? 'stepCompleted' : ''}`}><p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Song information</p><span>{currentStep >= 2 ? <img src={check} /> : 1}</span></div>
                    <div className={`step_divForm ${currentStep > 2 ? 'stepCompleted' : ''}`}><p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Song links</p><span>{currentStep >= 3 ? <img src={check} /> : 2}</span></div>
                    <div className={`step_divForm ${currentStep > 3 ? 'stepCompleted' : ''}`}><p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Pricing</p><span>{currentStep >= 4 ? <img src={check} /> : 3}</span></div>
                    <div className={`step_divForm ${currentStep > 4 ? 'stepCompleted' : ''}`}><p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>General licence</p><span>{currentStep >= 5 ? <img src={check} /> : 4}</span></div>
                    <div className={`step_divForm ${currentStep > 5 ? 'stepCompleted' : ''}`}><p onClick={() => setActiveStep(5)} className={currentStep === 5 ? 'active' : ''}>Agreement</p><span>5</span></div>
                </div>
                <div className='Custom_formwrapper'>
                {showPredefinedPrice && currentStep === 3 &&
                        <div className='Predefined_price top_prices'>
                            <div className='note_secwrap'>
                                <h1>Can we use previously given information?</h1>
                            </div>

                            <div className='customize_btns'>
                                <button className='customize_btn btn-light'>No, Customize it</button>
                                <button className='customize_btn '>Yes</button>
                            </div>

                        </div>
                    }
<div className={`custom-form content_info ${isActive ? 'active' : ''} ${currentStep === 3 ? 'Content_infowrapper' : ''}`}>
                        <div className='note_SecWrapper mobile_only'>
                            <div className='note_sec'>
                                <div className='note_secwrap'>
                                    <h1> <img src={BlubImg} alt='BlubImg' />Note</h1>
                                    <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>
                                    <span onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
                                </div>

                            </div>
                            {currentStep === 3 &&
                                <div className='Predefined_price'>
                                    <div className='note_secwrap'>
                                        <h1> <img src={PrizeImg} alt='BlubImg' />Predefined price</h1>
                                        <p>Do you like to take the same package as earlier?</p>
                                        <span onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
                                    </div>

                                    <div className='customize_btns'>
                                        <button className='customize_btn btn-light'>No, Customize it</button>
                                        <button className='customize_btn '>Yes</button>
                                    </div>

                                </div>
                            }
                        </div>
                        {currentStep === 1 && (
                            <SongInformation
                                data={formData.songInformation}
                                setFormData={(data) => handleDataChange(data, 'songInformation')} />
                        )}
                        {currentStep === 2 && (
                            <SongLinks
                                formData={formData.songLinks}
                                setFormData={(data) => handleDataChange(data, 'songLinks')} />
                        )}

                        {currentStep === 3 && (
                            <Pricing
                                nextstep={handleNext}
                                data={formData.pricing}
                                setFormData={(data) => handleDataChange(data, 'pricing')}
                                onPricingStepChange={handlePricingStepChange}
                            // priseState={() => setPriseState()} />
                            />
                        )}
                        {currentStep === 4 && (
                            <GeneralLicence
                                data={formData.generalLicence}
                                setFormData={(data) => handleDataChange(data, 'generalLicence')} />
                        )}
                        {currentStep === 5 && (
                            <Agreement
                                data={formData.agreement}
                                setFormData={(data) => handleDataChange(data, 'agreement')} />
                        )}

<div className={currentStep !== 3 && 'musicSubmitbtn'}>
                            {/* {currentStep > 1 && <button onClick={handlePrev}>Previous</button>} */}
                            {currentStep < 5 && currentStep !== 3 && <button onClick={handleNext} className='musicSubmitbutton'>Submit</button>}
                            {currentStep === 5 && currentStep !== 3 && <button className='musicSubmitbutton' onClick={() => console.log(formData)}>Submit</button>}
                        </div>



                    </div>
                </div>
                <div className='note_SecWrapper desktop_only'>
                    <div className='note_sec'>
                        <h1> <img src={BlubImg} alt='BlubImg' />Note</h1>
                        <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>

                    </div>
                    {currentStep === 3 &&
                        <div className='Predefined_price'>
                            <h1> <img src={PrizeImg} alt='BlubImg' />Predefined price</h1>
                            <p>Do you like to take the same package as earlier?</p>
                            <div className='customize_btns'>
                                <button className='customize_btn btn-light'>No, Customize it</button>
                                <button className='customize_btn '>Yes</button>
                            </div>

                        </div>
                    }
                </div>


            </div>



        </>
    );
};

export default MusicUplorad
