import React, { useState } from 'react';

const Buylicenceform = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const renderStep1 = () => (
        <div>
            <span className='searchbycodestep'>Step{step}/4</span>
            <h4 style={{ textAlign: "start" }}>Select Licence Type</h4>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label style={{ textAlign: "start" }}>Permission to remix/combine the selected content/video by editing</label>
            </div>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Specific / Custom licence"
                />
                <label>Permission to repost the content/video without any edits</label>
            </div>
            <button type="button" onClick={nextStep}>Next</button>
        </div>
    );

    const renderStep2 = () => (
        <div>
            <span className='searchbycodestep'>Step{step}/4</span>
            <h4 style={{ textAlign: "start" }}>Licence only for the content that you selected now:</h4>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label>Commercial / Business purpose</label>
            </div>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Specific / Custom licence"
                />
                <label>Specific / Custom licence</label>
            </div>
            <button type="button" onClick={nextStep}>Next</button>
        </div>
    );

    const renderStep3 = () => (
        <div>
            <span className='searchbycodestep'>Step{step}/4</span>
            <h4 style={{ textAlign: "start" }}>Commercial / Business purpose</h4>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label>Youtube</label>
            </div>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Specific / Custom licence"
                />
                <label>Instagram</label>
            </div>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Specific / Custom licence"
                />
                <label>Facebook</label>
            </div>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Specific / Custom licence"
                />
                <label>Set a discussion with copyva team</label>
            </div>
            <button type="button" onClick={nextStep}>Next</button>
        </div>
    );

    const renderStep4 = () => (
        <div>
            <span className='searchbycodestep'>Step{step}/4</span>
            <h4 style={{ textAlign: "start" }}>Youtube subscribers limit</h4>
            <div className="check_progress">
                <input
                    type="radio"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label>0 to 50,000 subscribers</label>
            </div>
            <button type="button" onClick={nextStep}>Next</button>
        </div>
    );

    const renderStep5 = () => (
        <div>
            <h4 style={{ textAlign: "start" }}>Youtube with 0 to 50,000 subscribers</h4>
            <span>To use full content to edit with your content/video</span>
            <div className="check_progress">
                <input
                    type="checkbox"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label>Licence validity (1 year)</label>
            </div>
            <div className="check_progress">
                <input
                    type="checkbox"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label>Licence validity (lifetime)</label>
            </div>
            <div className="check_progress">
                <input
                    type="checkbox"
                    name="pricing"
                    value="Commercial / Business purpose"
                />
                <label>Just few seconds of content will be used</label>
            </div>
            <button type="button">Add to Cart</button>
            <button type="button" onClick={() => { window.location.href = "/payment"; }}>Buy Now</button>

        </div>
    );

    const renderCurrentStep = () => {
        switch (step) {
            case 1:
                return renderStep1();
            case 2:
                return renderStep2();
            case 3:
                return renderStep3();
            case 4:
                return renderStep4();
            case 5:
                return renderStep5();
            default:
                return null;
        }
    };

    return (
        <form className="Progress_form">
            {renderCurrentStep()}
        </form>
    );
};

export default Buylicenceform;
