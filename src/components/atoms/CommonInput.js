import React from 'react';

function CommonInput({ label, name, type, value, onChange, onBlur, max }) {
  const handleKeyPress = e => {
    if (
      type === 'number' &&
      (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'e')
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="mb-[5px] md:mb-[16px] flex flex-col md:flex-row whitespace-nowrap items-start md:items-center gap-[5px]">
      <label
        htmlFor={name}
        className="block text-[14px] lg:text-[18px] text-left text-white font-semibold whitespace-nowrap"
      >
        {label}
        <span className="hidden md:inline-block">:</span>
      </label>
      <input
        type={type}
        inputMode={type === 'number' ? 'numeric' : 'text'}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleKeyPress}
        max={max}
        className="shadow w-full md-sm:w-[240px] h-[30px] appearance-none ml-auto border rounded py-2 px-3 text-white-80 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default CommonInput;
