import React from 'react';


interface InputProps {
    className: string;
    inputType: string
    value: string;
    change: (e: React.FormEvent<EventTarget>) => void;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({value, change, className, inputType, placeholder}) => {
    const input = <input
        className={`${className}__input`}
        type={inputType}
        id={inputType}
        name={inputType}
        value={value}
        onChange={change}
        onFocus={(e) => e.target.placeholder = ""} 
        onBlur={(e) => e.target.placeholder = "Name"}
        placeholder={placeholder}
        required></input>
    const textarea = <textarea
        className={`${className}__textarea`}
        id={inputType}
        name={inputType}
        value={value}
        onChange={change}
        onFocus={(e) => e.target.placeholder = ""} 
        onBlur={(e) => e.target.placeholder = "Name"}
        placeholder={placeholder}
        required></textarea>
    
    return (
    <label
        className={className}
        htmlFor={inputType}>
    {inputType === "message" ? textarea : input}
    </label>
    )
}

export default  Input

