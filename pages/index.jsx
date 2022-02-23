import Link from 'next/link';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainAppBar from '../components/AppBar';
import ProviderSearchDialogForm from '../components/forms/ProviderSearchDialogFrom';

export default function Home() {
	const [showDialog, toggleShowDialog] = useState(false);

	const classes = {
		card: {
			width: 500,
			height: 500,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			cursor: 'pointer'
		},
		container: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			height: 'calc(100vh - 64px)',
		},
	};

	return (
		<>
			<MainAppBar />
			<Container maxWidth="false" sx={classes.container}>
				<Link href="/provider/register" passHref>
					<Paper elevation={3} sx={classes.card}>
						<Typography variant="h2" align="center">
							Cadastrar um Fornecedor
						</Typography>
					</Paper>
				</Link>
				<Link href="/provider/list" passHref>
				<Paper elevation={3} sx={classes.card}>
					<Typography variant="h2" align="center">
						Listar Forncecedores Cadastrados
					</Typography>
				</Paper>
				</Link>
				<div onClick={() => toggleShowDialog(true)}>
					<Paper elevation={3} sx={classes.card}>
						<Typography variant="h2" align="center">
							Listar um Fornecedor Cadastrado
						</Typography>
					</Paper>
				</div>
			</Container>
			{showDialog ? <ProviderSearchDialogForm open={showDialog} toggle={toggleShowDialog} /> : null}
		</>
	);
}
