import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { http } from 'Utils/Http/Http';
import { handleError } from "Utils/Http/Http";
import ErrorDialog from 'Components/Dialogs/DialogToast/ErrorDialog';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
    imgUploadRoot: {
        border: '1px solid rgb(196,196,196)',
        padding: '10.5px 14px 10.5px 0 ',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '3px',
        '&:hover': {
            border: '1px solid rgb(33,33,33)',
        }
    },
    btnAddImage: {
        color: 'rgba(0,0,0,0.6)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0 14px',
    },
    inputImage: {
        display: 'none'
    },
}))

function FileUpload({ setSelectedFile,prevFileName, name, setIsLoading, ...otherProps }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const [selectedFileName, setSelectedFileName] = useState()
    const [errorOpen, setErrorOpen] = useState(false)

    useEffect(() => {
        setSelectedFileName(prevFileName)
    }, [prevFileName])
    const handleImageUpload = async (values) => {
        setSelectedFileName(values[0].name)
        let formData = new FormData();
        for (var i = 0; i < values?.length; i++) {
            formData.append("image", values[i]);
        }
        try {
            await http.post(`/file/upload`, formData)
                .then(async (res) => {
                    setSelectedFile(res?.data?.data[0]?.filename)
                });
        } catch (error) {
            setErrorOpen(true)
        }
    }

    return (
        <div className={classes.imgUploadRoot}>
            <label for={name} className={classes.btnAddImage}>
                <AddIcon height="24" width="24" />
            </label>
            <span style={{overflow:'hidden', textOverflow:'ellipsis',display: "inline-block",whiteSpace: "nowrap"}}>{selectedFileName}</span>
            <input className={classes.inputImage} onChange={(e) => handleImageUpload(e.target.files)} multiple id={name} type="file" {...otherProps} />
            <ErrorDialog isOpen={errorOpen} onReject={() => setErrorOpen(false)} title={t('admin.video.invalidLink')} message={t('admin.video.youtubeLinkInvalidMessage')} />
        </div>
    )
}

export default FileUpload