import './App.css';
import Navbar from './Navbar';
import Data from './Data';
import SearchBar from './SearchBar';
import Form from './Form';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <Data /> 
    </div>
  );
}

export default App;
