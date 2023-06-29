import React from "react";
import Select from "react-select"
import "./index.css"

const Dropdown = ({
    className = "",
    label,
    options,
    value,
    onChange = () => { }
}) => {

    const inputStyle = () => ({
        display: 'flex'
    });
    const colourStyles = {
        menu: (styles) => ({
            ...styles,
            width: '100%',
            marginTop: 0,
            paddingTop: 0,
            marginLeft: -3,
            border: '1px solid #DBD7F4',
            paddingLeft: 0,
        }),
        placeholder: () => ({
            fontSize: 16,
            fontFamily: 'Mulish'
        }),
        container: (styles) => ({
            ...styles,
            border: '1px solid #DBD7F4',
            borderRadius: 8,
            padding: 9,
            width: "100%",
            backgroundColor: "#F7F7FC"
        }),
        control: (styles) => ({
            ...styles,
            border: 0,
            outline: 'none',
            boxShadow: 'none',
            backgroundColor: "#F7F7FC"
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                // paddingLeft: 20,
                height: '52px',
                border: '1px solid #DBD7F4',
                color: "black",
                textAlign: "left",
                backgroundColor: isDisabled ? undefined : isSelected
                    ? '#F7F7FC'
                    : isFocused
                        ? '#F7F7FC'
                        : 'white',
                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? 'white'
                            : '#F7F7FC'
                        : undefined,
                },
            };
        },
        input: (styles) => ({ ...styles, ...inputStyle() }),
        singleValue: (styles) => ({ ...styles, ...inputStyle() }),
    };

    return (
        <div className={`dropdown-container ${className}`}>
            <span className="label-style">{label}</span>
            <Select
                components={{ IndicatorSeparator: () => null }}
                options={options}
                styles={colourStyles}
                placeholder={""}
                maxMenuHeight={262}
                value={options.filter(obj => obj.value === value)}
                onChange={(evt) => onChange(evt.value)}
            />
        </div>
    )
}

export default Dropdown