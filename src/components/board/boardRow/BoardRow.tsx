import BoardBox from '../boardBox/BoardBox';

interface PropTypes {
  rowNo: string;
}

const BoardRow = ({ rowNo }: PropTypes) => {
  const generateRow = () => {
    const row = [];
    for (let index = 1; index <= 9; index++) {
      row.push(<BoardBox id={`${rowNo}${index}`} key={`${rowNo}${index}`} />);
    }
    return row;
  };
  return <tr>{generateRow()}</tr>;
};

export default BoardRow;
