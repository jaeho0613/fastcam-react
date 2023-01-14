import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import Example from "./ReactQueryExample/Example";
import QuickStart from "./ReactQueryExample/QuickStart";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <QuickStart />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
