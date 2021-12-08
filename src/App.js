import Data from './views/Data';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
 
  return (
    <>
    <Container>
      <Header />
      <Data />
      <Footer /> 
    </Container>
    </>
    );
};

export default App;
