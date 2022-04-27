import React, { useRef } from 'react';

interface FromtInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'onChange'> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const FormInput: React.FC<FromtInputProps> = props => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lengthInput = e.target.value.length;
    const containslabel = labelRef.current?.classList.contains('m-form-input__label-shrink');

    if (lengthInput > 0) {
      !containslabel && labelRef.current?.classList.toggle('m-form-input__label-shrink');
    } else {
      labelRef.current?.classList.remove('m-form-input__label-shrink');
    }
    props.onChange(e);
  };
  return (
    <div className="m-form-input">
      <input
        className="m-form-input__input"
        onChange={handleOnChangeEvent}
        type={props.type}
        required
        name={props.name}
        value={props.value}
      />
      <label className="m-form-input__label" ref={labelRef}>
        {props.label}
      </label>
    </div>
  );
};
