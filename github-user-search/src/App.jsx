import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">GitHub User Search</h1>
          <p className="text-gray-300">Search for GitHub users with advanced filters</p>
        </div>
      </header>
      
      <main>
        <Search />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-4 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>Powered by GitHub API</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
