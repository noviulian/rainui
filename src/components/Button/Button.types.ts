import React from "react";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * The text to display inside the button
     */
    text: string;
    /**
     * The color of the button
     */
    color?: "primary" | "secondary";
    /**
     * The size of the button
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether or not the button is disabled
     */
    disabled?: boolean;
    /**
     * The click handler
     */
    onClick?: () => void;

    /**
     * The label of the button
     */
    label?: string;

    /**
     * The type of the button
     */
    type?: "button" | "submit" | "reset";
}
