import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';

export default function LoadingCardSkeleton() {

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
			m: 2
		}
	}

	return (
		<Container sx={classes.container}>
		<Card sx={classes.card}>
			<CardHeader
				title={
						<Skeleton
							animation="wave"
							height={10}
							width="80%"
							style={{ marginBottom: 6 }}
						/>}
				subheader={<Skeleton animation="wave" height={10} width="40%" />}
			/>
			<CardContent>
				{
					<>
						<Skeleton
							animation="wave"
							height={10}
							style={{ marginBottom: 6 }}
						/>
						<Skeleton animation="wave" height={10} width="80%" />
					</>
				}
			</CardContent>
		</Card>
		</Container>
	);
}
