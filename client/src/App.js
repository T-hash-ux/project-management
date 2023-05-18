// This code is setting up the main application component (App) for a React application that uses Apollo Client for GraphQL integration.
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';
import AddClientModal from "./components/AddClientModal";

const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming;
            }
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            }
          }
        }
      }
    }
  })

  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache,
  });

  function App() {
    return (
      <>
      <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClientModal/>
        <Clients />
      </div>
      </ApolloProvider>
      </>
    );
  }
  
  export default App;
  
