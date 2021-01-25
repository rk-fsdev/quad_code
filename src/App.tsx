import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import LoadingIndicator from './components/LoadingIndicator';
import theme from './theme';

const Home = lazy(() => import('./pages/Home'));

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Suspense fallback={<LoadingIndicator fullScreen />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Suspense>
  </ChakraProvider>
);
