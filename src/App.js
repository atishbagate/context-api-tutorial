import './App.css';
import ThemeContext from './context/ThemContext';
import ChangeThemeBtn from './components/ChangeThemeBtn';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="white">
        <ChangeThemeBtn />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
