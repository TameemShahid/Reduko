import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRootState } from '../store/store';

let count = 0;
const url = 'https://vast-chamber-17969.herokuapp.com/';

interface boardState {
  initialPuzzle: { [key: string]: string };
  puzzle: { [key: string]: string };
  difficulty: string;
}

const initialState: boardState = {
  puzzle: {},
  difficulty: '',
  initialPuzzle: {},
};

export const getConfiguration = createAsyncThunk(
  'board/get',
  async (difficulty: string = 'random') => {
    count = 0;
    const req = new URL(url);
    req.pathname = 'generate';
    req.searchParams.append('difficulty', difficulty);
    const { data } = await axios.get(req.toString());
    return data;
  },
);

export const solveConfiguration = createAsyncThunk(
  'board/solve',
  async (board: number[][]) => {
    const req = new URL(url);
    req.pathname = 'solve';
    const { data } = await axios.post(
      req.toString(),
      { board },
      {
        headers: {
          'Content-Type': '*/*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
        },
      },
    );
    return data;
  },
);

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    reset: (state) => {
      state.puzzle = state.initialPuzzle;
    },
    update: (state, { payload }) => {
      const temp = state.puzzle;
      temp[payload.id] = payload.value;
      state.puzzle = temp;
    },
  },
  extraReducers(builder) {
    builder.addCase(getConfiguration.pending, (state, action) => {
      state.puzzle = {};
      state.difficulty = '';
    });
    builder.addCase(getConfiguration.fulfilled, (state, action) => {
      if (count === 0) {
        count = count + 1;
        state.initialPuzzle = action.payload.puzzle;
      }
      state.puzzle = action.payload.puzzle;
      state.difficulty = action.payload.difficulty;
    });
  },
});

export const getBoardState = (state: IRootState) => state.board.puzzle;
export const getBoxValue = (state: IRootState, id: string) =>
  state.board.puzzle[id];
export const getInitialBoxValue = (state: IRootState, id: string) =>
  state.board.initialPuzzle[id];

export const { reset, update } = boardSlice.actions;

export default boardSlice.reducer;
