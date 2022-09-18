import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import css from './Input.module.css';

// InputProps type is extracted from React.InputHTMLAttributes and can be extended if needed.
// For now, it can be used for number inputs and text inputs, like for roman numbers (with pattern prop provided).
export type InputProps = {
  type: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  id: string;
  dataTestId?: string;
  className?: string;
  labelClassName?: string;
  name?: string;
  value?: number | string;
  min?: number;
  max?: number;
  isRequired?: boolean;
  placeholder?: string;
  error?: string;
  step?: number;
  pattern?: string;
};

export const Input = ({
  type,
  label,
  id,
  name,
  value,
  className,
  labelClassName,
  dataTestId,
  onChange,
  isRequired,
  error,
  ...rest
}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
  };
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={`${css.inputLabel} ${labelClassName ?? ''}`}
          data-testid={dataTestId && `${dataTestId}_label`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        className={`${css.input} ${className ?? ''}`}
        onChange={handleChange}
        required={isRequired}
        value={value}
        data-testid={dataTestId}
        {...rest}
      />
      {error && <div className={css.errorMessage}>{error}</div>}
    </>
  );
};
