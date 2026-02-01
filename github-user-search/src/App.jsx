import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header" style={{
        backgroundColor: '#24292e',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: '0 0 10px 0' }}>GitHub User Search</h1>
        <p style={{ margin: 0, fontSize: '16px' }}>Search for GitHub users and view their profiles</p>
      </header>
      
      <main className="app-main">
        <Search />
      </main>
      
      <footer className="app-footer" style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        color: '#586069'
      }}>
        <p>Powered by GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
