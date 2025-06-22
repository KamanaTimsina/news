import React from 'react';
import Adv from '../../assets/Images/Advertisement/Adv.png';

function Advertisement() {
  return (
    <div className="py-7 px-4 sm:px-6 md:px-10 mt-5 flex justify-center">
      <img src={Adv} className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[50%] lg:max-w-[90%] object-cover" alt="Advertisement" />
    </div>
  );
}

export default Advertisement;
