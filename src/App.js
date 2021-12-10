import './App.css'
import Data from './views/Data';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
 
  return (
    <>
    <div className="App">
      <Header />
        <Data />
      <Footer />
    </div>
    </>
    );
};

export default App;
