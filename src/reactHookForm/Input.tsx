/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  register,
  name,
  error,
  label,

  ...rest
}) => {
  return (
    <div>
      {label && (
        <label className="  " htmlFor={name}>
          {label}
        </label>
      )}
      <div className="    text-center break-words">
        <input
          className="   "
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
          {...rest}
        />
        {error && <div className="     text-sm  text-red-900">{error}</div>}
      </div>
    </div>
  );
};

export default Input;