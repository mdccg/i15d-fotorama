import { useRoutes } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import { UserContextProvider } from './context/UserContext';
import { routes } from './routes';

const App = () => {
  const elements = useRoutes(routes);

  return (
    <UserContextProvider>
      <LanguageSelector />
      {elements}
    </UserContextProvider>
  );
}

export default App;