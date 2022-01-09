import { STYLING_CONFIGS } from "../constants/constants";

export const pxToRem = function (size) {
    if (typeof size === "number") {
        return `${size / STYLING_CONFIGS.root_size}rem`;
    } else {
        throw new Error("size is not a number please enter a valid number as a size!");
    }
}