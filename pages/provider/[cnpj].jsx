import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import MainAppBar from '../../components/AppBar';
import { withSnackBar } from '../../components/SnackBar';
import { getProvider } from '../../services/Provider.service';
import LoadingCardSkeleton from '../../components/LoadingCardSkeleton';
import { formatCNPJ, formatTEL, formatCEP } from '../../util/formatData';
import { grey } from '@mui/material/colors';

function DisplayProvider({ snack }) {
	const router = useRouter();
	const [provider, setProvider] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const { cnpj } = router.query;
	useEffect(() => {
		if (!cnpj) return;
		getProvider(cnpj)
			.then((data) => {
				setProvider(data);
				setIsLoading(false);
			})
			.catch((err) => {
				snack(err.message, 'error');
			});
	}, [cnpj, snack]);

	const classes = {
		container: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			marginTop: '6%',
		},
		card: {
			width: 600,
			height: 300,
			backgroundColor: grey[400],
		},
	};

	if (!isLoading && !provider)
		return (
			<>
				<MainAppBar />
				<Container sx={classes.container}>
					<Card sx={classes.card} elevation={8}>
						<CardHeader
							title="Fornecedor não encontrado"
							subheader={formatCNPJ(cnpj)}
						/>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{'Não foi encontrado nenhum fornecedor com esse CNPJ'}
							</Typography>
						</CardContent>
					</Card>
				</Container>
			</>
		);

	return !isLoading ? (
		<>
			<MainAppBar />
			<Container sx={classes.container}>
				<Card sx={classes.card} elevation={8}>
					<CardHeader
						title={provider.name}
						subheader={formatCNPJ(provider.cnpj)}
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							{`${provider.address.street}, ${provider.address.number} - ${
								provider.address.complement
							} - ${formatCEP(provider.address.postalCode)}`}
						</Typography>
						<br />
						<Typography variant="body1">
							Razão social: {provider.officialRegistry}
						</Typography>
						<br />
						<br />
						<br />
						<Typography>Telefone: {formatTEL(provider.telephone)}</Typography>
						<Typography>Email: {provider.email}</Typography>
					</CardContent>
				</Card>
			</Container>
		</>
	) : (
		<LoadingCardSkeleton />
	);
}

export default withSnackBar(DisplayProvider);
