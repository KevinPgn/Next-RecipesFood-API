import {create} from "zustand"

interface SearchState {
  search: string;
  setSearch: (search: string) => void;
  data: any;
  setData: (data: any) => void;
}

export const useSearch = create<SearchState>((set) => ({
  search: "apple",
  data: [],
  setData: (data) => set({ data }),
  setSearch: (search) => set({ search }),
}));