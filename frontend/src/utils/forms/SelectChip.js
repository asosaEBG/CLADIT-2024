import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            backgroundColor: "white", // Transparent background for dropdown
            color: "black", // White text for dropdown items
        },
    },
};

function getStyles(name, value, theme) {
    return {
        fontWeight: value.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
        color: "black", // White text color
    };
}

const SelectChipField = (props) => {
    const theme = useTheme();

    return (
        <Box style={props.style}>
            <div style={{ width: "100%" }}>
                <FormControl fullWidth required={props.conf.required}>
                    <Select
                        multiple
                        input={
                            <OutlinedInput
                                id="select-multiple-chip"
                                label="Chip"
                                sx={{
                                    color: "white", // White text inside select
                                    backgroundColor: "transparent", // Transparent background
                                    "& fieldset": { borderColor: "white" }, // White border
                                    "&:hover fieldset": { borderColor: "white" }, // White hover effect


                                }}
                            />
                        }
                        renderValue={(selected) => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                {selected.map((value, index) => (
                                    <Chip
                                        key={value}
                                        label={`${index + 1} ${value}`}
                                        sx={{
                                            backgroundColor: "transparent", // Transparent chip background
                                            color: "white", // White chip text
                                            border: "1px solid white", // White chip border
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        value={props.conf.value}
                        onChange={props.onChange}
                        name={props.index + "-" + props.conf.name}
                        disabled={props.disabled}
                        label={props.conf.label}
                        autoWidth
                        sx={{
                            color: "white", // White text for selected value
                            backgroundColor: "transparent", // Transparent background
                            border: "1px solid white", // White border
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "white !important" }, // White border for outlined select
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white !important" }, // White hover border
                            "& .MuiSvgIcon-root": { color: "white !important" }, // White dropdown arrow icon
                        }}
                    >
                        {props.conf.options &&
                            props.conf.options.map((actual, index) => (
                                <MenuItem
                                    key={`opcion-${index}-${props.conf.name}-${props.index}`}
                                    value={actual.value}
                                    style={getStyles(actual, props.conf.value, theme)}
                                    sx={{
                                        color: "black", // White text
                                        backgroundColor: "white", // Transparent background
                                        "&:hover": {
                                            backgroundColor: "rgba(255, 255, 255, 0.2)", // Light white hover effect
                                        },
                                    }}
                                >
                                    {actual.label}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </div>
        </Box>
    );
};

export default SelectChipField;
