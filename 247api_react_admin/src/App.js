import './App.css';
import Menu from './components/Menu';
import ArticleCreated2 from './components/ArticleCreated2';

function App() {
    return (
        <div className="page-container">
            <Menu />
            <div className="content-page">
                <ArticleCreated2 />
            </div>
        </div>
    );
}

export default App;
