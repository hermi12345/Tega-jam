import React from 'react';

const Button = (props) => {
  return (
    <div >
      <button className='px-6 py-1 border-white bg-[#90EE90] hover:text-[#E9E6ED] transition-all rounded-full'>
        {props.title}
      </button>
    </div>
  );
}

export default Button;
