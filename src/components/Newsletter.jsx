import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <div className="flex gap-4 flex-col justify-center items-center lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            How it works
          </h1>
          <p className="text-center w-2/3">
            Obtained your registration pin (E-pin) from a vendor (Click on
            vendor's page), visit www.foodieworldglobal.com and click on
            "Register." Fill out the registration form and submit it. After
            submission, you will receive a welcome message with your login
            details. You can then log in to your dashboard, officially becoming
            a full member of the company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
