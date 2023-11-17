import * as React from 'react';
import {Button, rgbToHex} from "@mui/material";
import styles from './customButton.module.scss';


type variantType = "text" | "outlined" | "contained";
type sizeType = "large" | "small" | "medium";

interface ButtonInterface {
    variant?: variantType
    viewValue: string
    disabled?: boolean
    size?: sizeType
}

export default function CustomButton ({ variant , viewValue , disabled , size } : ButtonInterface) {
    return  (
        <Button
            variant={variant || "text"}
            disabled={disabled || false}
            className={
                variant === 'outlined' ? styles.CustomButtonBorder :
                variant === 'contained' ? styles.CustomButtonBackGround : styles.CustomButtonText}
            size={size || "medium"}
        >
            {viewValue}
        </Button>
    )
}