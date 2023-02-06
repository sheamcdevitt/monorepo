import { theme } from '@root/shared';
import { ThemeProvider } from '@mui/material/styles';
import DefaultRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DefaultRoutes />
    </ThemeProvider>
  );
}

export default App;
