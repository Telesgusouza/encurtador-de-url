import AdvancedStatistics from '../components/AdvancedStatistics';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImpulsionarLink from '../components/ImpulsionarLink';
import InputShortening from '../components/InputShortening';
import Main from '../components/Main';
import * as Styled from './style';

function App() {
  return (
    <Styled.Container>
      <Header />
      <Main />
      <InputShortening />
      <AdvancedStatistics />
      <ImpulsionarLink />
      <Footer />
    </Styled.Container>
  );
}

export default App;
