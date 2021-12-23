import { Typography } from '@mui/material';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const UploaderInput = forwardRef(({ name, onChange, label, disabled }, ref) => {
    return (
        <div className="mt-1 sm:mt-0">
            <Box className="flex justify-center px-6 pt-5 pb-6" sx={styles.mainContainer}>
                <div className="space-y-1 text-center">
                    <svg
                        className="w-12 h-12 mx-auto text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex">
                        <label
                            htmlFor={name}
                            className="relative block font-medium text-center rounded-md cursor-pointer">
                            <Typography variant="subtitle2" className="text-center">
                                {label}
                            </Typography>
                            <input
                                disabled={disabled}
                                type="file"
                                id={name}
                                name={name}
                                ref={ref}
                                onChange={onChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    {/* <Typography variant="body2">
                            
                            <Trans>PNG, JPG, GIF up to 10MB</Trans>
                        </Typography> */}
                </div>
            </Box>
        </div>
    );
});

UploaderInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const styles = {
    mainContainer: {
        border: 2,
        borderColor: 'grey.300',
        borderStyle: 'dashed',
        borderRadius: '10px',
    },
};

export default UploaderInput;
