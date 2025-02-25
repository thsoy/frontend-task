import React, { ChangeEvent } from "react";
import { CheckboxContainer, CheckboxInput, CheckIcon } from "./Checkbox.styled";
const DefaultCheckIcon = ({ isChecked }: { isChecked: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
      fill={isChecked ? "#000" : "#cdcdcd"}
    />
    {isChecked ? (
      <path
        id="check-icon-line"
        d="M5 9.5L9 13.5L15.5 7"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M5 9.5L9 13.5L15.5 7"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);
export function Checkbox({
  label,
  checked,
  id,
  handleChange,
}: {
  label?: string;
  checked: boolean;
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <CheckboxContainer checked={checked}>
      <label htmlFor={id}>
        <Check isChecked={checked} onChange={handleChange} id={id} />
        <CheckIcon>
          <DefaultCheckIcon isChecked={checked} />
        </CheckIcon>
        {label}
      </label>
    </CheckboxContainer>
  );
}
interface ICheck {
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}
const Check = ({ isChecked, onChange, id }: ICheck) => {
  return (
    <CheckboxInput
      type="checkbox"
      id={id}
      aria-checked={isChecked}
      checked={isChecked}
      onChange={onChange}
      disabled={false}
    />
  );
};
