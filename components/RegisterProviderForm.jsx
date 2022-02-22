import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import { withSnackBar } from './SnackBar';
import { registerProvider } from '../services/Provider.service';
import registerProviderSchema from '../validations/registerProviderSchema.validation';

function RegisterProviderForm({ snack }) {

	const formik = useFormik({
		initialValues: {
			name: '',
			officialRegistry: '',
			cnpj: '',
			segment: '',
			postalCode: '',
			street: '',
			number: '',
			complement: '',
			telephone: '',
			email: ''
		},
		validationSchema: registerProviderSchema,
		onSubmit: async (values, helpers) => {
			await registerProvider(
				values,
				helpers,
				snack
			);
		}
	});

	return (
		<>
		<Typography variant='h2' align='center'>Cadastro de Fornecedor</Typography>
		<form onSubmit={formik.handleSubmit} noValidate>
			<Typography variant='h4'>Dados Básicos</Typography>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='name'
				label='Nome Fantasia'
				name='name'
				autoComplete='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.name && formik.errors.name}
				error={formik.touched.name && Boolean(formik.errors.name)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='officialRegistry'
				label='Razão Social'
				name='officialRegistry'
				autoComplete='officialRegistry'
				value={formik.values.officialRegistry}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.officialRegistry && formik.errors.officialRegistry}
				error={formik.touched.officialRegistry && Boolean(formik.errors.officialRegistry)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='cnpj'
				label='CNPJ'
				name='cnpj'
				autoComplete='cnpj'
				value={formik.values.cnpj}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.cnpj && formik.errors.cnpj}
				error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='segment'
				label='Segmento'
				name='segment'
				autoComplete='segment'
				value={formik.values.segment}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.segment && formik.errors.segment}
				error={formik.touched.segment && Boolean(formik.errors.segment)}
			/>
			<Typography variant='h4'>Endereço</Typography>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='postalCode'
				label='CEP'
				name='postalCode'
				autoComplete='postalCode'
				value={formik.values.postalCode}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.postalCode && formik.errors.postalCode}
				error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='street'
				label='Rua'
				name='street'
				autoComplete='street'
				value={formik.values.street}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.street && formik.errors.street}
				error={formik.touched.street && Boolean(formik.errors.street)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='number'
				label='Número'
				name='number'
				autoComplete='number'
				value={formik.values.number}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.number && formik.errors.number}
				error={formik.touched.number && Boolean(formik.errors.number)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				fullWidth
				id='complement'
				label='Complemento'
				name='complement'
				autoComplete='complement'
				value={formik.values.complement}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.complement && formik.errors.complement}
				error={formik.touched.complement && Boolean(formik.errors.complement)}
			/>
			<Typography variant='h4'>Contato</Typography>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='telephone'
				label='Telefone'
				name='telephone'
				autoComplete='telephone'
				value={formik.values.telephone}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.telephone && formik.errors.telephone}
				error={formik.touched.telephone && Boolean(formik.errors.telephone)}
			/>
			<TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='email'
				label='E-Mail'
				name='email'
				autoComplete='email'
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				helperText={formik.touched.email && formik.errors.email}
				error={formik.touched.email && Boolean(formik.errors.email)}
			/>
			<Button
				type='submit'
				fullWidth
				variant='contained'
				color='primary'
			>
				Cadastrar Fornecedor
			</Button>
		</form>
		</>
	)
}

export default withSnackBar(RegisterProviderForm);