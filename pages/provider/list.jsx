import useSWR from 'swr';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';

import MainAppBar from '../../components/AppBar';
import { getAllProviders } from '../../services/Provider.service';
import { withSnackBar } from '../../components/SnackBar';
import { Typography } from '@mui/material';
import { formatCNPJ, formatTEL, formatCEP } from '../../util/formatData';

function ListProvider({ snack }) {
	const [isLoading, setIsLoading] = useState(true);
	const [providers, setProviders] = useState();

	const {data, error} = useSWR(true, getAllProviders);
	if (data && !providers) {
		setProviders(data);
		setIsLoading(false);
	}
	if (error && isLoading) {
		setIsLoading(false);
		snack(error.message, 'error');
	}

	if (isLoading)
		return (
			<>
			<MainAppBar />
			<Container sx={{ marginTop: '2%' }}>
				<Typography variant='h4'>Carregando...</Typography>
			</Container>
			</>
		)

	return (
		<>
			<MainAppBar />
			<Container sx={{ marginTop: '2%' }} maxWidth='false'>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align='left'>Nome do Fornecedor</TableCell>
							<TableCell align='left'>Razão Social</TableCell>
							<TableCell align='center'>CNPJ</TableCell>
							<TableCell align='center'>Segmento</TableCell>
							<TableCell align='center'>Telefone</TableCell>
							<TableCell align='right'>E-Mail</TableCell>
							<TableCell align='right'>Endereço</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{providers ? providers.map((row) => (
							<TableRow
								key={row.cnpj}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='left'>{row.officialRegistry}</TableCell>
								<TableCell align='center'>{formatCNPJ(row.cnpj)}</TableCell>
								<TableCell align='center'>{row.segment}</TableCell>
								<TableCell align='center'>{formatTEL(row.telephone)}</TableCell>
								<TableCell align='right'>{row.email}</TableCell>
								<TableCell align='right'>{`${row.address.street}, ${row.address.number} - ${
								row.address.complement
							} - ${formatCEP(row.address.postalCode)}`}</TableCell>
							</TableRow>
						)) : null}
					</TableBody>
				</Table>
			</TableContainer>
			</Container>
		</>
	);
}

export default withSnackBar(ListProvider);