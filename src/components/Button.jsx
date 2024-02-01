import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Button({ title }) {
  return (
    <div>
      <button
        title={title}
        className="text-white text-[18px] px-5 py-3 rounded-md active:bg-[#C778DD] hover:bg-zinc-600 transition-colors duration-300 border-solid border-2 border-[#C778DD]"
      >
        {title} →
      </button>
    </div>
  );
}
