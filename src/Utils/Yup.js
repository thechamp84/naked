import * as yup from 'yup';

// yup.setLocale({
//     mixed: {
//         required: 'required',
//     },
//     string: {
//         required: 'required',
//     },
// });
yup.setLocale({
    object: {
        shape: 'shape',
    },
    mixed: {
        required: 'required',
    },
    string: {
        required: 'required',
        nullable: 'nullable',
        matches: 'matches',
        email: 'email',
        min: ({ min }) => ({ key: 'min.string', values: { min } }),
        max: ({ max }) => ({ key: 'max.string', values: { max } }),
    },
    number: {
        required: 'required',
        nullable: 'nullable',
        min: ({ min }) => ({ key: 'min.number', values: { min } }),
        max: ({ max }) => ({ key: 'max.number', values: { max } }),
    },
    array: {
        required: 'required',
        nullable: 'nullable',
        min: ({ min }) => ({ key: 'min.array', values: { min } }),
        max: ({ max }) => ({ key: 'max.array', values: { max } }),
    },
});
export default yup;