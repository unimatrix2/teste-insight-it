import * as yup from 'yup';

const registerProviderSchema = yup.object({
    name: yup
        .string()
        .trim()
        .min(3, 'Ao menos 3 caracteres')
        .required('Campo obrigatório'),
    officialRegistry: yup
        .string()
        .trim()
        .min(3, 'Ao menos 3 caracteres')
        .required('Campo obrigatório'),
    cnpj: yup
        .string()
        .trim()
        .min(14, 'Ao menos 14 caracteres')
        .max(14, 'No máximo 14 caracteres')
        .matches(/[0-9]/, 'Apenas números')
        .required('Campo obrigatório'),
    segment: yup
        .string()
        .trim()
        .min(3, 'Ao menos 3 caracteres')
        .required('Campo obrigatório'),
    postalCode: yup
        .string()
        .trim()
        .min(8, 'Ao menos 8 caracteres')
        .max(8, 'No máximo 8 caracteres')
        .matches(/[0-9]/, 'Apenas números')
        .required('Campo obrigatório'),
    street: yup
        .string()
        .trim()
        .min(3, 'Ao menos 3 caracteres')
        .required('Campo obrigatório'),
    number: yup
        .string()
        .trim()
        .required('Campo obrigatório'),
    complement: yup
        .string()
        .trim()
        .min(3, 'Ao menos 3 caracteres'),
    telephone: yup
        .string()
        .trim()
        .min(10, 'Ao menos 10 caracteres')
        .max(11, 'No máximo 11 caracteres')
        .matches(/[0-9]/, 'Apenas números')
        .required('Campo obrigatório'),
    email: yup
        .string()
        .trim()
        .email('Precisa ser um e-mail válido')
        .required('Campo obrigatório')
});

export default registerProviderSchema;