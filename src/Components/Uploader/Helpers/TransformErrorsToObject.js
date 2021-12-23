import { last } from 'lodash';
import { mapValidationErrors } from '@aseel/http';

export default function transformUploadedFilesErrors(errors) {
    const newErrors = {};
    
    return mapValidationErrors(errors).forEach((error) => {
        newErrors[last(error.name.split('.'))] = error.message;
    });
}
