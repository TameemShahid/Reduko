import { useEffect } from 'react';
import Board from './components/board/Board';
import Header from './components/header/Header';
import ButtonStrip from './components/buttonStrip/ButtonStrip';
import { useDispatch } from 'react-redux';
import { getConfiguration } from './data/boardSlice';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfiguration());
  }, []);

  return (
    <div>
      <Header />
      <Board />
      <ButtonStrip />
      <Footer />
    </div>
  );
}

export default App;
