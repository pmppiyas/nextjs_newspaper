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
  isGridView: true, // ইউজারের ভিউ প্রিফারেন্স (Grid vs List)
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // সার্চ কোয়েরি আপডেট করার জন্য
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    // ক্যাটাগরি ফিল্টার করার জন্য
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    // সর্টিং পরিবর্তন করার জন্য
    setSortBy: (
      state,
      action: PayloadAction<'latest' | 'popular' | 'oldest'>
    ) => {
      state.sortBy = action.payload;
    },
    // ভিউ মোড টগল করার জন্য (Grid/List)
    toggleViewMode: (state) => {
      state.isGridView = !state.isGridView;
    },
    // সব ফিল্টার রিসেট করার জন্য
    resetFilters: (state) => {
      state.searchQuery = '';
      state.selectedCategory = 'All';
      state.sortBy = 'latest';
    },
  },
});

// অ্যাকশনগুলো এক্সপোর্ট করুন
export const {
  setSearchQuery,
  setCategory,
  setSortBy,
  toggleViewMode,
  resetFilters,
} = newsSlice.actions;

// রিডিউসারটি এক্সপোর্ট করুন
export const newsReducer = newsSlice.reducer;
