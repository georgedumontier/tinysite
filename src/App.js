import Layout from './components/Layout'
import { Router } from "@reach/router"
import Home from './components/Home'
import Profile from './components/Profile'
import New from './components/New'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <Home path='/' />
          <Profile path='/me' />
          <New path='/new' />
        </Router>
        <ReactQueryDevtools />
      </Layout>
    </QueryClientProvider>
  )
}

export default App;
