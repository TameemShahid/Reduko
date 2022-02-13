import { useEffect } from 'react';
import Board from './components/board/Board';
import Header from './components/header/Header';
import ButtonStrip from './components/buttonStrip/ButtonStrip';
import { useDispatch } from 'react-redux';
import { getConfiguration } from './data/boardSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfiguration());
  }, []);

  return (
    <div>
      <Header />
      <ButtonStrip />
      <Board />
    </div>
  );
}

export default App;
