/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
  textarea?: boolean;
  selectOptions?: { value: string; label: string }[];
}

const Input: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  textarea,
  selectOptions,

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
        {textarea ? (
          <textarea
            className="  border-b-3 "
            aria-invalid={error ? "true" : "false"}
            {...register(name)}
            {...rest}
          />
        ) : selectOptions ? (
          <select
            className="border-b-3"
            aria-invalid={error ? "true" : "false"}
            {...register(name)}
            {...rest}
          >
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="  border-b-3 "
            aria-invalid={error ? "true" : "false"}
            {...register(name)}
            {...rest}
          />
        )}
        {error && (
          <div className="     text-sm    text-orange-500">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
