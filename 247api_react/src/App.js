import './App.css';
import Menu from '../src/components/sections/Menu'
import ContentFooter from './components/molecules/ContentFooter';
import StartPage from './components/pages/StartPage';

function App() {
    return (
        <div className="App">
            <Menu />
            <StartPage />
        </div>
    );
}

export default App;
