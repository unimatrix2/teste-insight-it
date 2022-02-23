import * as yup from 'yup';

const searchProviderSchema = yup.object({
    cnpj: yup
        .string()
        .trim()
        .min(14, 'Ao menos 14 dígitos')
        .max(14, 'No máximo 14 digitos')
        .matches(/[0-9]/, 'Apenas números')
        .required('Campo obrigatório')
});

export default searchProviderSchema;