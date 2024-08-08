import { FC, ChangeEvent } from 'react';
import "./Input.css";

type TypeInput = "text" | "number" | "password" | "email";

interface Props {
    placeholder?: string;
    type?: TypeInput;
    value?: number | string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const Input: FC<Props> = ({
    placeholder = "Masukkan Data",  // Default value for placeholder
    type = "text",  // Default value for type
    value,
    onChange,
    style
}) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            style={style}
        /> 
    );
};

export default Input;
