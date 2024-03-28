import './App.css';
import { ThemeContextProvider } from './context/ThemContext';
import ChangeThemeBtn from './components/ChangeThemeBtn';
import Main from './components/Main';
import { LangContextProvider } from './context/LanContext';
import LanChange from './components/LanChange';

function App() {
  return (
    <div className="App">
      <LangContextProvider>
        <ThemeContextProvider>
          <ChangeThemeBtn />
          <Main />
          <LanChange />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
