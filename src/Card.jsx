import React, { useState } from "react";
import "./App.css";
// import Tilt from "react-parallax-tilt";

export const Card = () => {
  const [input, setInput] = useState({
    grossEarnings: "",
    dalalPercentage: "",
    traderPercentage: "",
    miscFeesPercentage: "",
    referralPercentage: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [output, setOutput] = useState({
    dalalEarnings: 0,
    traderEarnings: 0,
    miscFees: 0,
    referralEarnings: 0,
  });

  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value < 0) {
      return; // Check if the input value is less than 0. If so, return early and do nothing.
    }
    console.log(name, value);

    setInput((prevInput) => ({ ...prevInput, [name]: value }));

    if (value && errorMessage) {
      setErrorMessage("");
    }
  };

  const handleCalculation = () => {
    const {
      grossEarnings,
      dalalPercentage,
      traderPercentage,
      miscFeesPercentage,
      referralPercentage,
    } = input;

    if (
      grossEarnings === "" ||
      dalalPercentage === "" ||
      traderPercentage === "" ||
      miscFeesPercentage === "" ||
      referralPercentage === ""
    ) {
      setErrorMessage("Please fill in all input fields.");
      setShowOutput(false);
      return;
    }

    // if (
    //   grossEarnings < 0 ||
    //   dalalPercentage < 0 ||
    //   traderPercentage < 0 ||
    //   miscFeesPercentage < 0 ||
    //   referralPercentage < 0
    // ) {
    //   setErrorMessage(`Please enter positive values for input fields.`);
    //   setShowOutput(false);
    //   return;
    // }

    if (
      dalalPercentage !== "" &&
      traderPercentage !== "" &&
      Number(dalalPercentage) + Number(traderPercentage) !== 100
    ) {
      setErrorMessage(
        "The sum of Dalal Earnings % and Trader Earnings % must be 100%"
      );
      setShowOutput(false);
      return;
    }

    const dalalEarnings = grossEarnings * (dalalPercentage / 100);
    const traderEarnings = grossEarnings * (traderPercentage / 100);
    const miscFees = grossEarnings * (miscFeesPercentage / 100);
    const referralEarnings = grossEarnings * (referralPercentage / 100);

    setOutput({
      dalalEarnings,
      traderEarnings,
      miscFees,
      referralEarnings,
    });

    setInput({
      grossEarnings: "",
      dalalPercentage: "",
      traderPercentage: "",
      miscFeesPercentage: "",
      referralPercentage: "",
    });

    setShowOutput(true);
  };

  return (
    <>
      {/* <Tilt> */}
      <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border-opacity-30 backdrop-filter backdrop-blur-sm">
        <div className="h-full flex flex-col justify-evenly items-center">
          <div className="text-white font-poppins text-2xl tracking-widest font-bold">
            Calculate Earnings
          </div>
          <div className="flex flex-col justify-center self-start mx-7 w-80">
            <label className="text-white font-poppins text-2l tracking-widest">
              Gross Earnings (Rs)
            </label>
            <input
              className="py-1.5 px-2 mt-1 bg-slate-500 rounded-md  "
              name="grossEarnings"
              placeholder=" Gross Earnings ₹"
              type="number"
              value={input.grossEarnings}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 mx-10 w-80">
            <div className="flex flex-col justify-center self-start w-80">
              <label className="text-white font-poppins tracking-widest w-100">
                Dalal Earnings
              </label>
              <input
                className="w-40 py-1.5 px-2 mt-1 bg-slate-500 rounded-md"
                name="dalalPercentage"
                placeholder=" Dalal Earnings %"
                type="number"
                value={input.dalalPercentage}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col justify-center self-start w-80">
              <label className="text-white font-poppins tracking-widest">
                Trader Earnings
              </label>
              <input
                className="py-1.5 px-2 mt-1 bg-slate-500 rounded-md w-40"
                name="traderPercentage"
                placeholder=" Trader Earnings %"
                type="number"
                value={input.traderPercentage}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 mx-10 w-80">
            <div className="flex flex-col justify-center self-start w-80">
              <label className="text-white font-poppins tracking-widest w-100">
                Misc Fees
              </label>
              <input
                className="py-1.5 px-2 mt-1 bg-slate-500 rounded-md w-40"
                name="miscFeesPercentage"
                placeholder=" Misc Fees %"
                type="number"
                value={input.miscFeesPercentage}
                onChange={handleInputChange}
              />
            </div>
            <div className="referral-container">
              <label className="text-white font-poppins tracking-widest w-100">
                Referral Earnings
              </label>
              <input
                className="py-1.5 px-2 mt-1 bg-slate-500 rounded-md w-40"
                name="referralPercentage"
                placeholder=" Referral %"
                type="number"
                value={input.referralPercentage}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 mx-8 mt-2 w-100 font-poppins">
              * {errorMessage}
            </p>
          )}
          <button
            className="cursor-pointer font-poppins rounded-full px-5 py-1.5 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 w-80 font-bold text-xl"
            onClick={handleCalculation}
          >
            Calculate
          </button>
        </div>
      </div>
      {/* </Tilt> */}
      {showOutput && (
        <div className="container h-40 w-96  relative z-2 rounded-2xl  border-opacity-30 backdrop-filter backdrop-blur-sm mt-8 flex flex-col justify-center items-center">
          <div className="text-white font-poppins text-xl mt-1 mb-2 tracking-widest font-bold">
            Output
          </div>
          <div className="bg-slate-500 shadow-5xl ">
            <table>
              <tbody>
                <tr className="border border-slate-950 ">
                  <td className="text-white  tracking-widest text-l w-100 border border-slate-950 px-8">
                    Dalal Earnings
                  </td>
                  <td className="text-white w-100 border border-slate-950 px-10">
                    {output.dalalEarnings} ₹
                  </td>
                </tr>
                <tr className="border border-slate-950">
                  <td className="text-white  tracking-widest text-l w-100 border border-slate-950 px-8">
                    Trader Earnings
                  </td>
                  <td className="text-white w-100 border border-slate-950 px-10">
                    {output.traderEarnings} ₹
                  </td>
                </tr>
                <tr className="border border-slate-950">
                  <td className="text-white  tracking-widest text-l w-100 border border-slate-950 px-8">
                    Misc. Fees
                  </td>
                  <td className="text-white w-100 border border-slate-950 px-10">
                    {output.miscFees} ₹
                  </td>
                </tr>
                <tr className="border border-slate-950">
                  <td className="text-white  tracking-widest text-l w-100 border border-slate-950 px-8">
                    Referral Earnings
                  </td>
                  <td className="text-white w-100 border border-slate-950 px-10 mb-4">
                    {output.referralEarnings} ₹
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
