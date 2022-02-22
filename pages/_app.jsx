import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../util/emotionCache';
import lightTheme from '../styles/theme/lightTheme';

const clientSideCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideCache, pageProps }) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
