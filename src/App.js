import Router from './components/Router';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router/>
    </QueryClientProvider>
    
  );
}

export default App;
