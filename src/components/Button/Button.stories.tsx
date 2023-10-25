import React from "react";
import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button.types";
const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
};
export default meta;

type Template = StoryObj<ButtonProps>;

export const Primary: Template = {
    args: {
        text: "first button",
        type: "button",
        onClick: () => console.log("Clicked"),
    },
};

export const Secondary: Template = {
    args: {
        text: "second button",
        type: "reset",
        onClick: () => console.log("Clicked"),
    },
};
