import { useState, useEffect, useRef } from 'react';
import {Skeleton} from '@mui/material';
import NoImage from 'Assets/fallbackImage.jpg';

const status = {
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED_TO_LOAD: 'failed to load',
};

function Image({
    loader = () => (
        <Skeleton
            animation="wave"
            variant="rect"
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '5%',
            }}
        />
    ),
    fallbackImg = NoImage,
    style = {},
    src = NoImage,
    alt = '',
    ...rest
}) {
    const [imageStatus, setImageStatus] = useState(status.LOADING);
    const thisImage = useRef(null);

    function handleImageLoaded() {
        setImageStatus(status.LOADED);
    }

    function handleImageErrored() {
        setImageStatus(status.FAILED_TO_LOAD);
        const image = thisImage.current;

        if (image) {
            image.src = fallbackImg;
        }
    }

    useEffect(() => {
        const image = thisImage.current;

        if (image && image.complete) {
            setImageStatus(status.LOADED);
        }
    }, []);

    return (
        <>
            <img
                alt={alt}
                src={src}
                style={imageStatus === status.LOADED ? style : { display: 'none' }}
                onLoad={handleImageLoaded}
                onError={handleImageErrored}
                ref={thisImage}
                {...rest}
            />
            {imageStatus === status.LOADING && loader()}
        </>
    );
}

export default Image;
