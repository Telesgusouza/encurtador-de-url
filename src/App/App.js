import Header from '../components/Header';
import InputShortening from '../components/InputShortening';
import Main from '../components/Main';
import * as Styled from './style';

function App() {
  return (
    <Styled.Container>
      <Header />
      <Main />
      <InputShortening />
      {/* <h1>ola mundo</h1> */}
    </Styled.Container>
  );
}

export default App;
