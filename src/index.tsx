import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './core/apollo-client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@app/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import {Helmet} from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={apolloClient}>
    <Helmet titleTemplate='%s 🐟 FishStack' defaultTitle='🐟 FishStack'/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
  </ApolloProvider>
);
