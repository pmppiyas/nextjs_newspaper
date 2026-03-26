import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  searchQuery: string;
  selectedCategory: string;
  sortBy: 'latest' | 'popular' | 'oldest';
  isGridView: boolean;
}

const initialState: NewsState = {
  searchQuery: '',
  selectedCategory: 'All',
  sortBy: 'latest',
  isGridView: true,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },

    setSortBy: (
      state,
      action: PayloadAction<'latest' | 'popular' | 'oldest'>
    ) => {
      state.sortBy = action.payload;
    },

    toggleViewMode: (state) => {
      state.isGridView = !state.isGridView;
    },

    resetFilters: (state) => {
      state.searchQuery = '';
      state.selectedCategory = 'All';
      state.sortBy = 'latest';
    },
  },
});

export const {
  setSearchQuery,
  setCategory,
  setSortBy,
  toggleViewMode,
  resetFilters,
} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
