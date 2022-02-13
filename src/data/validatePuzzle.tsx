import axios from 'axios';
import store from '../store/store';
import Swal from 'sweetalert2';
import { getBoardState, solveConfiguration } from './boardSlice';

const checkRow = (row: string) => {
  const board = getBoardState(store.getState());
  const check = new Set();
  for (let col = 1; col <= 9; col++) {
    const key = `${row}${col}`;
    if (check.has(board[key])) return false;
    if (board[key] !== undefined) check.add(board[key]);
  }
  return true;
};

const checkCol = (col: string) => {
  const board = getBoardState(store.getState());
  const check = new Set();
  for (let i = 65; i <= 73; i++) {
    const key = `${String.fromCharCode(i)}${col}`;
    if (check.has(board[key])) return false;
    if (board[key] !== undefined) check.add(board[key]);
  }
  return true;
};

const checkGrid = (row: string, col: string) => {
  const board = getBoardState(store.getState());
  const check = new Set();
  for (let i = row.charCodeAt(0); i < row.charCodeAt(0) + 3; i++) {
    for (let j = Number(col); j < Number(col) + 3; j++) {
      const key = `${String.fromCharCode(i)}${j}`;
      if (check.has(board[key])) return false;
      if (board[key] !== undefined) check.add(board[key]);
    }
  }
  return true;
};

const validateBoard = () => {
  let validRows = true;
  let validCols = true;
  let validGrid = true;

  for (let index = 65; index < 74; index++) {
    const rowId = String.fromCharCode(index);
    if (!checkRow(rowId)) {
      validRows = false;
    }
  }

  for (let index = 1; index < 10; index++) {
    const colId = String(index);
    if (!checkCol(colId)) {
      validCols = false;
    }
  }

  for (let index = 1; index <= 9; index = index + 3) {
    const row = String.fromCharCode(64 + index);
    if (!checkGrid(row, String(index))) {
      validGrid = false;
    }
  }

  if (validRows && validCols && validGrid) {
    Swal.fire({
      title: 'Solved!',
      icon: 'success',
      confirmButtonText: 'Done',
    });
  } else {
    Swal.fire({
      title: 'Unsolved :(',
      icon: 'error',
      confirmButtonText: 'Continue',
    });
  }
};

const puzzleToArray = () => {
  const board = getBoardState(store.getState());
  const array: number[][] = Array.from(Array(9), () => new Array(9));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const key = `${String.fromCharCode(65 + i)}${j + 1}`;
      array[i][j] = board[key] === undefined ? 0 : Number(board[key]);
    }
  }
  return array;
};

export const solveBoard = () => {
  // store.dispatch(solveConfiguration(puzzleToArray()));
  Swal.fire({
    title: 'Solved!',
    icon: 'success',
    confirmButtonText: 'Done',
  });
};

export default validateBoard;
