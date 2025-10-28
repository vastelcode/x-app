import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
};

const initialState: ThemeState = {
  mode: 'dark'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;