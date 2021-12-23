import React from 'react';
import PropTypes from 'prop-types';
import NoSsr from '@mui/material/NoSsr';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material';
import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';
import CreatableReactSelect from 'react-select/creatable';
import AsyncCreatableReactSelect from 'react-select/async-creatable';

import Control from './Control';
import Menu from './Menu';
import MultiValue from './MultiValue';
import NoOptionsMessage from './NoOptionsMessage';
import Option from './Option';
import Placeholder from './Placeholder';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import DropdownIndicator from './DropdownIndicator';
import ClearIndicator from './ClearIndicator';
import IndicatorSeparator from './IndicatorSeparator';

const Select = ({
    id,
    label,
    placeholder,
    margin,
    helperText,
    error,
    isAsync,
    isCreatable,
    components,
    ...otherProps
}) => {
    const theme = useTheme();
    const selectStyles = {
        input: (base) => {
            return ({
                ...base,
                margin: 0,
                'color': theme.palette.text.primary,
                '& input': {
                    font: 'inherit'
                }
            })
        }
    };

    // prettier-ignore
    const SelectControl = isAsync
        ? isCreatable
            ? AsyncCreatableReactSelect
            : AsyncReactSelect
        : isCreatable
            ? CreatableReactSelect
            : ReactSelect;

    return (
        <NoSsr
            fallback={(
                <>
                    <h6 className='labelForm'>{label}</h6>

                    <TextField
                        id={id}
                        // label={label}
                        variant="outlined"
                        margin={margin}
                        fullWidth
                        size="small"
                        value="..."
                        error={error}
                        helperText={helperText}
                        disabled
                    />
                </>
            )}
        >
            <>
                <h6 className='labelForm'>{label}</h6>

                <SelectControl
                    styles={selectStyles}
                    inputId={id}
                    TextFieldProps={{
                        // label,
                        fullWidth: true,
                        variant: 'outlined',
                        margin,
                        size:'small',
                        error,
                        helperText,
                        placeholder,
                        InputLabelProps: {
                            htmlFor: id,
                            shrink: true
                        }
                    }}
                    components={{
                        Control,
                        Menu,
                        MultiValue,
                        NoOptionsMessage,
                        Option,
                        Placeholder,
                        SingleValue,
                        ValueContainer,
                        DropdownIndicator,
                        ClearIndicator,
                        IndicatorSeparator,
                        ...components
                    }}
                    placeholder={placeholder}
                    {...otherProps}
                />
            </>
        </NoSsr>
    );
};

Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    margin: PropTypes.oneOf(['none', 'normal', 'dense']),
    error: PropTypes.bool,
    isAsync: PropTypes.bool,
    isCreatable: PropTypes.bool,
    helperText: PropTypes.string,
    components: PropTypes.shape()
};

Select.defaultProps = {
    placeholder: '',
    margin: undefined,
    error: false,
    isAsync: false,
    isCreatable: false,
    helperText: null,
    components: null
};

export default Select;
