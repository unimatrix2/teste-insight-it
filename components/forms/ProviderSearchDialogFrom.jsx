import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function ProviderSearchDialogForm({ open, toggle }) {

    const router = useRouter();
    const handleClose = () => toggle(!open);

    const formik = useFormik({
        initialValues: {
            cnpj: ''
        },
        onSubmit: (values) => {
					router.push(`/provider/${values.cnpj}`);
					handleClose();
        }
    })

    return (
        <Dialog open={open} onClose={handleClose}>
				<DialogTitle>Buscar Fornecedor</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Digite abaixo o CNPJ do fornecedor que deseja buscar
					</DialogContentText>
						<form noValidate onSubmit={formik.handleSubmit}>
					<TextField
						variant='standard'
						margin='dense'
						required
						fullWidth
						autoFocus
						id='cnpj'
						name='cnpj'
						label='CNPJ'
						autoComplete='cnpj'
						value={formik.values.cnpj}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
						</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button
            onClick={formik.submitForm}>Buscar</Button>
				</DialogActions>
			</Dialog>
    )
}