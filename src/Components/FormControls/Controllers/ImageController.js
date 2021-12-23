import React, { useState, useEffect } from 'react';

import { createStyles, makeStyles } from '@mui/styles';

import { useDropzone } from 'react-dropzone';

import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import AddImage from '../../../Assets/add_photo.svg';
import { useTranslation } from 'react-i18next';

export default function ImageController(props) {
  const {
    name,
    label = name,
    maxFileSize,
    filesLimit = 0,
    acceptedFiles,
    form,
    errors,
    rules,
  } = props;

  const [files, setFiles] = useState([]);

  const { setValue, clearErrors, trigger, register } = form;

  const formValues = form.getValues();

  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    if (formValues[name]) {
      setFiles(formValues[name].map((f) => ({ ...f, edit: true })));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',

    onDrop: (file) => {
      const files = [...(formValues[name] || []), ...file].map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      if (files.length > filesLimit)
        return toast.warning(`User can only upload ${filesLimit} images.`);

      uploadFilesOverServer(files);

      setFiles(files);
    },
  });

  const uploadFilesOverServer = (files) => {
    if (files.length === 0) {
      setValue(name, '', { shouldDirty: true });
    } else {
      setValue(name, files, { shouldDirty: true });

      clearErrors([name]);
    }
  };

  const removeImage = (e, index) => {
    e.stopPropagation();

    let files = [...(formValues[name] || [])];

    files.splice(index, 1);

    setValue(name, files, { shouldDirty: true });

    setFiles(files);
  };

  const thumbs = (type = 'new') =>
    (files || [])

      .filter((file) => (type === 'new' ? !file.edit : file.edit))

      .map((file, index) => (
        <div className={`p-2 ${classes.imageContainer}`} key={file.name}>
          <div style={{ height: 90 }}>
            <img
              src={file.preview}
              height="90px"
              className={classes.thumb}
              alt=""
              style={{ height: 90 }}
            />
          </div>

          <div
            onClick={(e) => removeImage(e, index)}
            className={classes.deleteIcon}
          >
            <DeleteIcon />
          </div>
        </div>
      ));

  return (
    <>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...register('file')} {...getInputProps()} />

        {/* <div style={{outlineStyle:"dashed"}} > */}

        <div className={classes.fileTextContainer}>
          {files?.filter((f) => !f.edit)?.length ? (
            <div className={classes.newThumbsContainer}>{thumbs()}</div>
          ) : (
            []
          )}

          <img src={AddImage} alt="" />

          <p>{t('common.dnd')}</p>

          <button type="button" className={classes.fileBtn}>
            {t('common.chooseFile')}
          </button>
        </div>
      </div>
      {/* </div> */}

      {files?.filter((f) => f.edit)?.length ? (
        <div className={classes.editThumbsContainer}>{thumbs('edit')}</div>
      ) : (
        []
      )}

      {errors?.hasOwnProperty(name) ? (
        <p style={{ color: 'red', fontSize: '0.75rem' }}>
          {t('common.thisRequired')}
        </p>
      ) : (
        ''
      )}
    </>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    newThumbsContainer: {
      display: 'flex',
      padding: '10px',
      flexWrap: 'wrap',
      // border: '2px dashed rgba(213, 213, 213, 1)',
      // borderRadius: '10px',
      // height: '278px',
      // width: '552px',
      // overflow: 'auto',
      zIndex: 1,
      position: 'absolute',
      top: 10,
      left: 10,
    },

    fileTextContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      outlineStyle: 'dashed',
      outlineColor: 'rgba(213, 213, 213, 1)',
      outlineWidth: '2px',
      borderRadius: '10px',
      height: '278px',
      width: '552px',
      margin: 'auto',
      position: 'relative',
    },

    fileBtn: {
      border: 'none',

      backgroundColor: 'rgba(239, 255, 248, 1)',

      padding: '12px 28px',

      color: '#22aa6f',

      cursor: 'pointer',

      borderRadius: '6px',

      fontWeight: 'bold',
    },

    editThumbsContainer: {
      display: 'flex',

      border: '1px solid rgba(213, 213, 213, 1)',

      padding: '10px',

      flexWrap: 'wrap',
    },

    imageContainer: {
      position: 'relative',
      height: 90,
    },

    thumb: {
      objectFit: 'contain',
    },

    deleteIcon: { position: 'absolute', top: 10, right: 10, cursor: 'pointer' },
  })
);
