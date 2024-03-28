import './App.css';
import { ThemeContextProvider } from './context/ThemContext'; 
import { LangContextProvider } from './context/LanContext'; 
import Container from './components/Container';

function App() {
  return (
    <div>
      <LangContextProvider>
        <ThemeContextProvider>
        <Container />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
