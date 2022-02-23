import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import MainAppBar from '../../components/AppBar';

function createData(name, cnpj, segment) {
  return { name, cnpj, segment };
}

const rows = [
  createData('Frozen yoghurt', '12345678912345', 'Pecado'),
  createData('Ice cream sandwich', '09876543219876', 'Alimentos'),
  createData('Eclair', '48239475836036', 'Educação'),
  createData('Cupcake', '83947109385739', 'Construção Civil'),
  createData('Gingerbread', '09123458760285', 'Demolição'),
];

export default function ListProvider() {
	return (
		<>
			<MainAppBar />
			<Container sx={{ marginTop: '2%' }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Nome do Fornecedor</TableCell>
							<TableCell align='center'>CNPJ</TableCell>
							<TableCell align='right'>Segmento</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='center'>{row.cnpj}</TableCell>
								<TableCell align='right'>{row.segment}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			</Container>
		</>
	);
}
