import logo from './logo.svg';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Box from  './components/Box/Box'
import Item from './components/Item/Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Body />
    </div>
  );
}

export default App;
