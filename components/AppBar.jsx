import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function MainAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Dashboard de Fornecedores
					</Typography>
					<Link href='/'>
						<Button color="inherit">Página Inicial</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
