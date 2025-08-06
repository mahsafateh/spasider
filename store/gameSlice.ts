import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import category from "@/data/persion-words.json";
import { GameState } from "@/types";

const initialState: GameState = {
  category: "",
  spies: 0,
  insiders: 0,
  word: "",
  gameStarted: false,
  roles: [],
  currentRole: null,
  showWord: false,
  loading: false,
  error: null,
};

export const fetchWord = createAsyncThunk(
  "game/fetchWord",
  async (categoryName: string, { rejectWithValue }) => {
    try {
      const words = category.mixedCategory || ["Random"];
      const randomWord = words[Math.floor(Math.random() * words.length)];
      return randomWord;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(
      state,
      action: PayloadAction<{
        category: string;
        spies: number;
        insiders: number;
      }>,
    ) {
      state.category = action.payload.category;
      state.spies = action.payload.spies;
      state.insiders = action.payload.insiders;
      state.gameStarted = false;
      state.word = "";
      state.roles = shuffle([
        ...Array(action.payload.spies).fill("spy"),
        ...Array(action.payload.insiders).fill("insider"),
      ]);
      state.currentRole = null;
      state.showWord = false;
      state.loading = true;
      state.error = null;
    },
    showRole(state) {
      if (state.roles.length > 0) {
        const [role, ...rest] = state.roles;
        state.currentRole = role;
        state.roles = rest;
        state.showWord = true;
      } else {
        state.currentRole = null;
        state.showWord = false;
      }
    },
    hideRole(state) {
      state.currentRole = null;
      state.showWord = false;
    },
    resetGame(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWord.fulfilled, (state, action) => {
        state.word = action.payload;
        state.gameStarted = true;
        state.loading = false;
      })
      .addCase(fetchWord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { startGame, showRole, hideRole, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
