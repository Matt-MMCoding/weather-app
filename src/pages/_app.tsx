// import '@/styles/globals.css';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/theme';
import { ThemeProvider } from '@/theme/ThemeProvider';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
