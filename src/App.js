import './App.css';
import  { ThemeContextProvider } from './context/ThemContext';
import ChangeThemeBtn from './components/ChangeThemeBtn';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ChangeThemeBtn />
      </ThemeContextProvider> 
    </div>
  );
}

export default App;
