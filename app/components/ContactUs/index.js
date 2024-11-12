import React from 'react';

const ContactUs = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-img">
        <div className='layer'>
        <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-16 rounded-3xl shadow-2xl text-center md:w-[35.875rem] lg:w-[52.875rem]">
          <h2 className="text-2xl font-bold ">Contact Us</h2>
          <p className="text-black py-5 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a href="#" className="hover:underline text-sm">Terms Of Service</a>
            <span>|</span>
            <a href="#" className="hover:underline text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
        </div>
     

    </div>
  );
};

export default ContactUs;
