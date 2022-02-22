import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainAppBar from '../components/AppBar';

export default function Home() {
	/* const useStyles = makeStyles((theme) => ({
		
	}));

	const classes = useStyles(); */

  const classes = {
    card: {
      width: 500,
      height: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 'calc(100vh - 64px)'
    },
  }

	return (
		<>
			<MainAppBar />
			<Container
        maxWidth='false'
        sx={classes.container}
      >
					<Paper elevation={3} sx={classes.card}>
						<Typography variant="h2" align="center">
							Cadastrar um Fornecedor
						</Typography>
					</Paper>
					<Paper elevation={3} sx={classes.card}>
						<Typography variant="h2" align="center">
							Listar Forncecedores Cadastrados
						</Typography>
					</Paper>
					<Paper elevation={3} sx={classes.card}>
						<Typography variant="h2" align="center">
							Listar um Fornecedor Cadastrado
						</Typography>
					</Paper>
			</Container>
		</>
	);
}
