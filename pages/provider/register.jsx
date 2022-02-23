import { Container } from '@mui/material';

import MainAppBar from '../../components/AppBar';
import RegisterProviderForm from '../../components/forms/RegisterProviderForm';

export default function RegisterProvider() {
	return (
		<>
			<MainAppBar />
			<Container sx={{ marginTop: '2%' }}>
				<RegisterProviderForm />
			</Container>
		</>
	);
}
