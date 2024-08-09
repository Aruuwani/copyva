// import React, { useEffect, useState } from "react";
// import ProgressBar from "./ProgressBar"; // Import the ProgressBar component
// import { Form, Button } from "react-bootstrap";
// const Pricing = ({ nextstep,onPricingStepChange }) => {
//   const [pricingData, setpricingData] = useState({
//     pricing: [],
//     Seatingcapacity: [],
//   });
//   console.log('pricingDataPrice :>> ', pricingData);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [additionalOptions, setAdditionalOptions] = useState([]);
//   const [additionalOptions1, setAdditionalOptions1] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, checked } = e.target;
//     setpricingData((prevData) => {
//       const updatedData = { ...prevData };
//       if (checked) {
//         if (!Array.isArray(updatedData[name])) {
//           updatedData[name] = [];
//         }
//         updatedData[name] = [...updatedData[name], value];
//       } else {
//         updatedData[name] = updatedData[name].filter((item) => item !== value);
//       }
//       return updatedData;
//     });
//   };
//   useEffect(() => {
//     onPricingStepChange(currentStep);
//   }, [currentStep, onPricingStepChange]);
//   const nextStep = () => {
//     setCurrentStep((prevStep) => {
//       const newStep = Math.min(prevStep + 1, 4);
//       localStorage.setItem("pricingStep", newStep);
//       return newStep;
//     });
//   };

//   const prevStep = () => {
//     setCurrentStep((prevStep) => {
//       const newStep = Math.max(prevStep - 1, 1);

//       return newStep;
//     });
//   };

//   const Case3Options = [
//     "Clubs, pubs & night clubs",
//     "Restaurants, dining rooms, bars, lounges, coffee houses, etc",
//     "Multiplex & Shopping center, arcades, IT parks, etc",
//     "Lodges, guest houses, vacation homes, resorts, etc",
//     "Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services",
//   ];

//   const addOption = () => {
//     setAdditionalOptions((prevOptions) => [
//       ...prevOptions,
//       ...Case3Options.map((option) => ({ value: option, label: option })),
//     ]);
//   };
//   useEffect(() => {
//     // Initialize default options once
//     setAdditionalOptions(
//       Case3Options.map((option) => ({ value: option, label: option }))
//     );

//   }, [currentStep]);

// const handleChangecase3 = (event) => {
//   const { value } = event.target;
//   setpricingData((prevData) => {
//     if (prevData.Seatingcapacity.includes(value)) {
//       return {
//         ...prevData,
//         Seatingcapacity: prevData.Seatingcapacity.filter(
//           (item) => item !== value
//         ),
//       };
//     } else {
//       return {
//         ...prevData,
//         Seatingcapacity: [...prevData.Seatingcapacity, value],
//       };
//     }
//   });
// };

// const Case4Options = [
//   "Seating Capacity",
//   "Price of licence (1 year validity)",
//   "Price of licence (6 months validity)",
// ];

// const addOptionCase4 = () => {
//   setAdditionalOptions1((prevOptions) => [
//     ...prevOptions,
//     ...Case4Options.map((option) => ({ value: option, label: option })),
//   ]);
// };
// useEffect(() => {
//   // Initialize default options once
//   setAdditionalOptions1(
//     Case4Options.map((option) => ({ value: option, label: option }))
//   );
// }, []);
// const handleChangeCase4 = (event) => {
//   const { value } = event.target;
//   setpricingData((prevData) => {
//     if (prevData.Seatingcapacity.includes(value)) {
//       return {
//         ...prevData,
//         Seatingcapacity: prevData.Seatingcapacity.filter(
//           (item) => item !== value
//         ),
//       };
//     } else {
//       return {
//         ...prevData,
//         Seatingcapacity: [...prevData.Seatingcapacity, value],
//       };
//     }
//   });
// };
// const handleDivClick = (value) => {
//   setpricingData({ ...pricingData, pricing: value });
// };
// const renderForm = () => {
//   switch (currentStep) {
//     case 1:
//       return (
//         <form className="Progress_form">
//           <div>
//             <h4>Licence for the song that you select:</h4>
//             <div className="check_progress">
//               <input
//                 type="radio"
//                 name="pricing"
//                 value="Public places"
//                 checked={pricingData?.pricing.includes("Public places")}
//                 onChange={handleChange}
//               />
//               <label>Public places</label>
//             </div>
//             <div className="check_progress">
//               <input
//                 type="radio"
//                 name="pricing"
//                 value="Commercial / Business purpose"
//                 checked={pricingData?.pricing.includes(
//                   "Commercial / Business purpose"
//                 )}
//                 onChange={handleChange}
//               />
//               <label>Commercial / Business purpose</label>
//             </div>
//             <div className="check_progress">
//               <input
//                 type="radio"
//                 name="pricing"
//                 value="Metaverse"
//                 checked={pricingData?.pricing.includes("Metaverse")}
//                 onChange={handleChange}
//               />
//               <label>Metaverse</label>
//             </div>
//             <div className="check_progress">
//               <input
//                 type="radio"
//                 name="pricing"
//                 value="Specific / Custom licences"
//                 checked={pricingData?.pricing.includes(
//                   "Specific / Custom licences"
//                 )}
//                 onChange={handleChange}
//               />
//               <label>Specific / Custom licences</label>
//             </div>
//           </div>
//           <div className="btn_wapper"><button type="button" onClick={nextStep}>
//             Next
//           </button>
//           </div>
//         </form>
//       );
//     case 2:
//       return (
//         <form className="Progress_form">
//           <div>
//             <h4>Licence to use music in public places as:</h4>
//             <div className="check_progress"
//             onClick={() => handleDivClick("Background")}>
//               <input
//                 type="radio"
//                 name="pricing"
//                 value="Background"
//                 checked={pricingData?.pricing.includes("Background")}
//                 onChange={handleChange}
//               />
//               <label>Background</label>
//             </div>
//             <div className="check_progress"   onClick={() => handleDivClick("BackgLive performanceround")}>
//               <input
//                 type="radio"
//                 name="pricing"
//                 value="Live performance"
//                 checked={pricingData?.pricing.includes("Live performance")}
//                 onChange={handleChange}
//               />
//               <label>Live performance</label>
//             </div>
//           </div>
//           <div className="btn_wapper">
//             <button type="button" onClick={prevStep} className="btn-light">
//               Back
//             </button>
//             <button type="button" onClick={nextStep}>
//               Next
//             </button>
//           </div>
//         </form>
//       );
//     case 3:
//       return (
//         <form className="Progress_form">
//           <div>
//             <h4>Can we use previously given information:</h4>
//             {additionalOptions.map((option, index) => (
//               <div className="check_progress" key={index}>
//                 <input
//                   type="radio"
//                   name="Seatingcapacity"
//                   value={option.value}
//                   checked={pricingData.Seatingcapacity.includes(option.value)}
//                   onChange={handleChangecase3}
//                 />
//                 <label>{option.label}</label>
//               </div>
//             ))}

//             <button type="button" onClick={addOption} className="bg_transparent">
//               Add an option if needed
//             </button>
//             <div>
//               <div className="btn_wapper">
//                 <button type="button" onClick={prevStep} className="btn-light">
//                   Back
//                 </button>
//                 <button type="button" onClick={nextStep}>
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       );
//     case 4:

//       return (

//         <form className="Progress_form">
//           <div>
//             <h4>Public places Background - clubs, pubs & night clubs</h4>

//             {additionalOptions1.map((option, index) => (
//               <Form.Group key={index} controlId={option.value}>
//                 <Form.Label className="statement_form">
//                   {option.label}
//                 </Form.Label>
//                 <Form.Control
//                   name={option.value}
//                   placeholder={`Enter ${option.label}`}
//                   type="text"
//                   value={pricingData[option.value]}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             ))}
//             <button type="button" onClick={addOptionCase4} className='add_option bg_transparent'>+Add an option if needed</button>
//             {/* <button type="button" onClick={addOptionCase4}>
//                 + Add an option if needed
//               </button> */}
//             <div>
//               <div className="btn_wapper">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   disabled={currentStep === 1}
//                   className="btn-light">
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={nextstep}
//                 // disabled={currentStep === 4}
//                 >
//                   {currentStep === 4 ? 'Submit' : 'Next'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       );
//     default:
//       return null;
//   }
// };

// return (
//   <div>
//     <div class="d-flex justify-content-between">
//       <h2>Pricing</h2>

//       <span> Step {currentStep}/4</span>
//     </div>
//     <ProgressBar step={currentStep} />
//     {renderForm()}
//   </div>
// );
// };

// export default Pricing;
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { Form, Button } from "react-bootstrap";

const Pricing = ({ nextstep, onPricingStepChange ,setFormData}) => {
  const [pricingData, setpricingData] = useState({
    step1: {
      pricing: "",
    },
    step2: {
      publicPlaceUsage: "",
    },
    step3: {
      Seatingcapacity: {},
    },
    step4: {
      options:{}
    }
  });
  console.log('pricingDataPricing :>> ', pricingData);
  const [currentStep, setCurrentStep] = useState(
    parseInt(localStorage.getItem("pricingStep")) || 1
  );
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [additionalOptions1, setAdditionalOptions1] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setpricingData((prevData) => {
      const newStepData = { ...prevData[`step${currentStep}`] };
      if (type === "checkbox" || type === "radio") {
        if (checked) {
          newStepData[name] = value;
        } else {
          newStepData[name] = "";
        }
      } else {
        newStepData[name] = value;
      }
      return {
        ...prevData,
        [`step${currentStep}`]: newStepData,
      };
    });
  };

  useEffect(() => {
    onPricingStepChange(currentStep);
    localStorage.setItem("pricingStep", currentStep);
  }, [currentStep, onPricingStepChange]);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
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
    setAdditionalOptions(
      Case3Options.map((option) => ({ value: option, label: option }))
    );
  }, []);

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
    setAdditionalOptions1(
      Case4Options.map((option) => ({ value: option, label: option }))
    );
  }, []);

  const handleDivClick = (value) => {
    setpricingData((prevData) => ({
      ...prevData,
      step2: {
        publicPlaceUsage: value,
      },
    }));
  };

  const HandleBlur=(value)=>{
    setFormData(pricingData)
  }
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
                  checked={pricingData.step1.pricing === "Public places"}
                  onChange={handleChange}
                />
                <label>Public places</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="pricing"
                  value="Commercial / Business purpose"
                  checked={pricingData.step1.pricing === "Commercial / Business purpose"}
                  onChange={handleChange}
                />
                <label>Commercial / Business purpose</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="pricing"
                  value="Metaverse"
                  checked={pricingData.step1.pricing === "Metaverse"}
                  onChange={handleChange}
                />
                <label>Metaverse</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="pricing"
                  value="Specific / Custom licences"
                  checked={pricingData.step1.pricing === "Specific / Custom licences"}
                  onChange={handleChange}
                />
                <label>Specific / Custom licences</label>
              </div>
            </div>
            <div className="btn_wapper">
              <button type="button" onClick={nextStep}>
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
              <div className="check_progress">
                <input
                  type="radio"
                  name="publicPlaceUsage"
                  value="Background"
                  checked={pricingData.step2.publicPlaceUsage === "Background"}
                  onChange={handleChange}
                />
                <label>Background</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="publicPlaceUsage"
                  value="Live performance"
                  checked={pricingData.step2.publicPlaceUsage === "Live performance"}
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
                    name={`Seatingcapacity-${index}`}
                    value={option.value}
                    checked={pricingData.step3.Seatingcapacity[`Seatingcapacity-${index}`] === option.value}
                    onChange={handleChange}
                  />
                  <label>{option.label}</label>
                </div>
              ))}
              {/* <button
                type="button"
                onClick={addOption}
                className="bg_transparent"
              >
                Add an option if needed
              </button> */}
              <div className="btn_wapper">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-light"
                >
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
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
                    name={`options-${index}`}
                    placeholder={`Enter ${option.label}`}
                    type="text"
                    value={pricingData.step4.options[`options-${index}`] || ""}
                    onBlur={HandleBlur}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setpricingData((prevData) => ({
                        ...prevData,
                        step4: {
                          ...prevData.step4,
                          options: {
                            ...prevData.step4.options,
                            [name]: value,
                          },
                        },
                      }));
                    }}
                    required
                  />
                </Form.Group>
              ))}
              {/* <button
                type="button"
                onClick={addOptionCase4}
                className="add_option bg_transparent"
              >
                +Add an option if needed
              </button> */}
              <div className="btn_wapper">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="btn-light"
                >
                  Back
                </button>
                <button type="button" onClick={nextstep}>
                  {currentStep === 4 ? "Submit" : "Next"}
                </button>
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
      <div className="d-flex justify-content-between">
        <h2>Pricing</h2>
        <span> Step {currentStep}/4</span>
      </div>
      <ProgressBar step={currentStep} />
      {renderForm()}
    </div>
  );
};

export default Pricing;
