import React from "react";
import { ButtonProps } from "./Button.types";

const Button = ({
    text,
    color,
    disabled,
    onClick,
    size,
}: ButtonProps): JSX.Element => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
