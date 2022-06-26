import React from "react";
import { TextField } from "@material-ui/core";
const GreenTextFields = (props) => {
    const { helperText, variant, label, type, name, value, onChange, style } = props;
    return (
        <TextField
            helperText={helperText}
            variant={variant}
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
        />)
}

export default GreenTextFields;