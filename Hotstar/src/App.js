import './App.css';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <h1>Success</h1> */}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
