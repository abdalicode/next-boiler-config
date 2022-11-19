import "@ui/styles/globals.css";
import { ThemeProvider } from "@ui/theme";
import { createEmotionCache } from "@utils";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
