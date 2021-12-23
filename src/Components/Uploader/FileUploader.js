import {
    CircularProgress,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
} from '@mui/material';
import React, { useRef } from 'react';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import { cloneDeep } from 'lodash';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import ProgressContainer from '../../Utils/ProgressUtils/ProgressContainer';
import { setProgress } from '../../Utils/ProgressUtils/ProgressSvc';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import UploaderInput from './UploaderInput';

const DELETE_FILE_BTN = 'DELETE_FILE_BTN';

const btnName = (name, index) => {
    return `${DELETE_FILE_BTN}-${name}-${index}`;
};

export default function FileUploader({
    name,
    files,
    errors,
    onChange,
    onDeleteUploaded,
    label,
    single = false,
    variant = 'input',
    disabled,
}) {
    const fileRef = useRef(null);

    const labelClickHandler = (event) => {
        if (!disabled) {
            fileRef.current?.click();
        }
    };

    const filesChangeHandler = (e) => {
        const selectedFiles = e.target?.files;
        if (!(selectedFiles instanceof FileList) || !selectedFiles.length) {
            return;
        } else if (single) {
            if (files.length && !(files[0] instanceof File) && onDeleteUploaded) {
                setProgress(btnName(name, 0), true);
                onDeleteUploaded(files[0].id).then(() => {
                    setProgress(btnName(name, 0), false);
                    onChange([selectedFiles[0]]);
                });
            } else {
                onChange([selectedFiles[0]]);
            }
        } else {
            const clonedFiles = cloneDeep(files);

            for (let itemIndex = 0; itemIndex < selectedFiles.length; itemIndex++) {
                const file = selectedFiles.item(itemIndex);
                clonedFiles.push({
                    name: file.name,
                    file,
                    id: uuidv4(),
                });
            }

            onChange(clonedFiles);
        }
    };

    const deleteFileHandler = (key) => {
        const file = files[key];

        if (!file) {
            return;
        }

        const clonedFiles = cloneDeep(files);

        if (file instanceof File || !onDeleteUploaded) {
            clonedFiles.splice(key, 1);
            return onChange(clonedFiles);
        }

        setProgress(btnName(name, key), true);
        onDeleteUploaded(file.id, key)
            .then(() => {
                clonedFiles.splice(key, 1);
                return onChange(clonedFiles);
            })
            .finally(() => {
                setProgress(btnName(name, key), false);
            });
    };

    return (
        <div>
            {variant === 'input' ? (
                <>
                    <input onChange={filesChangeHandler} ref={fileRef} type="file" className="hidden" />
                    <TextField
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachFileRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                        onClick={labelClickHandler}
                        placeholder={label}
                        name={name}
                        variant="outlined"
                        fullWidth
                    />
                </>
            ) : (
                <UploaderInput disabled={disabled} label={label} onChange={filesChangeHandler} name={name} />
            )}
            {files.length ? (
                <List>
                    {files.map((file, key) => (
                        <ListItem key={file.id}>
                            <ListItemText primary={file.name} secondary={errors[file.id]} />
                            <ListItemSecondaryAction>
                                {file.url ? (
                                    <IconButton
                                        component="a"
                                        target="_blank"
                                        href={file.url}
                                        edge="end"
                                        aria-label="delete"
                                        size="large">
                                        <GetAppRoundedIcon />
                                    </IconButton>
                                ) : null}

                                <ProgressContainer name={btnName(name, key)}>
                                    {(progress) => (
                                        <IconButton
                                            disabled={progress || disabled}
                                            onClick={() => deleteFileHandler(key)}
                                            edge="end"
                                            aria-label="delete"
                                            size="large">
                                            {progress ? <CircularProgress size={20} /> : <ClearRoundedIcon />}
                                        </IconButton>
                                    )}
                                </ProgressContainer>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            ) : null}
        </div>
    );
}

FileUploader.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            url: PropTypes.string,
            name: PropTypes.string,
            file: PropTypes.instanceOf(File),
        }),
    ),
    singleFile: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onDeleteUploaded: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['input', 'dropzone']),
    disabled: PropTypes.bool,
};
