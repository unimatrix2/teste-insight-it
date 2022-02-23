import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';

import { withSnackBar } from '../SnackBar';
import { registerProvider } from '../../services/Provider.service';
import registerProviderSchema from '../../validations/registerProviderSchema.validation';

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
			email: '',
		},
		validationSchema: registerProviderSchema,
		onSubmit: async (values, helpers) => {
			await registerProvider(values, helpers, snack);
		},
	});

	return (
		<Container>
			<Typography variant="h2" align="center">
				Cadastro de Fornecedor
			</Typography>
			<form onSubmit={formik.handleSubmit} noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">
							Dados Básicos
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="name"
									label="Nome Fantasia"
									name="name"
									autoComplete="name"
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.name && formik.errors.name}
									error={formik.touched.name && Boolean(formik.errors.name)}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="officialRegistry"
									label="Razão Social"
									name="officialRegistry"
									autoComplete="officialRegistry"
									value={formik.values.officialRegistry}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={
										formik.touched.officialRegistry &&
										formik.errors.officialRegistry
									}
									error={
										formik.touched.officialRegistry &&
										Boolean(formik.errors.officialRegistry)
									}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="cnpj"
									label="CNPJ"
									name="cnpj"
									autoComplete="cnpj"
									value={formik.values.cnpj}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.cnpj && formik.errors.cnpj}
									error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="segment"
									label="Segmento"
									name="segment"
									autoComplete="segment"
									value={formik.values.segment}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.segment && formik.errors.segment}
									error={
										formik.touched.segment && Boolean(formik.errors.segment)
									}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">
							Contato
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="telephone"
									label="Telefone"
									name="telephone"
									autoComplete="telephone"
									value={formik.values.telephone}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={
										formik.touched.telephone && formik.errors.telephone
									}
									error={
										formik.touched.telephone && Boolean(formik.errors.telephone)
									}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="E-Mail"
									name="email"
									autoComplete="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.email && formik.errors.email}
									error={formik.touched.email && Boolean(formik.errors.email)}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">
							Endereço
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="street"
									label="Rua"
									name="street"
									autoComplete="street"
									value={formik.values.street}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.street && formik.errors.street}
									error={formik.touched.street && Boolean(formik.errors.street)}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="number"
									label="Número"
									name="number"
									autoComplete="number"
									value={formik.values.number}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.number && formik.errors.number}
									error={formik.touched.number && Boolean(formik.errors.number)}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									id="complement"
									label="Complemento"
									name="complement"
									autoComplete="complement"
									value={formik.values.complement}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={
										formik.touched.complement && formik.errors.complement
									}
									error={
										formik.touched.complement &&
										Boolean(formik.errors.complement)
									}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="postalCode"
									label="CEP"
									name="postalCode"
									autoComplete="postalCode"
									value={formik.values.postalCode}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={
										formik.touched.postalCode && formik.errors.postalCode
									}
									error={
										formik.touched.postalCode &&
										Boolean(formik.errors.postalCode)
									}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Fab
					type="submit"
					color="primary"
					variant="extended"
					component={Button}
					sx={{ marginLeft: '80%' }}
				>
					Cadastrar Fornecedor
				</Fab>
			</form>
		</Container>
	);
}

export default withSnackBar(RegisterProviderForm);
