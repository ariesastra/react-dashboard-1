import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './pages/global/topBar';

interface ColorModeValue extends 
React.ComponentProps<typeof ColorModeContext.Provider> {
  colorMode: object;
  toggleColorMode: () => void;
}

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={{colorMode} as ColorModeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
