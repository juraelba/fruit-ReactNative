import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from './src/common/themes/mainTheme';
import AppNavigator from './src/navigation';

const App: FC = (): ReactElement => (
  <ThemeProvider theme={mainTheme}>
    <AppNavigator />
  </ThemeProvider>
);

export default App;
