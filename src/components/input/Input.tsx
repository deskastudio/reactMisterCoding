import { FC } from 'react';
import "./Input.css";
import { ChangeEvent } from 'react';

type typeInput = "text" | "number" | "password"

interface Props {
    placeholder?: string;
    type?: typeInput;
    value?: number | string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ placeholder, type, value, onChange }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
        /> 
    );
};

Input.defaultProps = {
    placeholder: "Masukkan Data",
    type: "text"
};

export default Input;
