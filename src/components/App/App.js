import useLocalStorage from 'use-local-storage';

import Header from '../Header/Header';
import Main from "../Main/Main";
import ThemeSelect from '../ThemeSelect/ThemeSelect';

import './App.scss'

function App() {

  const [ theme, setTheme ] = useLocalStorage('theme', 'blueberry');
  const changeTheme = (themeName) => {
    setTheme(themeName);
  }
  const themeSelect = <ThemeSelect changeTheme={changeTheme} theme={theme} />

  return (
      <div className="app" data-theme={theme}>
        <Header themeSelect={themeSelect} />
        <Main/>
      </div>
  );
}

export default App;
