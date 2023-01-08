import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './core/apollo-client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@app/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
