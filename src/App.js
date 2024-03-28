import './App.css';
import  { ThemeContextProvider } from './context/ThemContext';
import ChangeThemeBtn from './components/ChangeThemeBtn';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ChangeThemeBtn />
        <Main/>
      </ThemeContextProvider> 
    </div>
  );
}

export default App;
