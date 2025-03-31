import { PAGE, PAGE_SIZE, TAG } from "@/utils/constants";
import { create } from "zustand";

const initialFilter = {
  page: PAGE,
  hitsPerPage: PAGE_SIZE,
  tags: TAG,
  query: "",
  sortBy: "search",
  numericFilters: "",
  sortFor: "all",
};
export const useFilterStore = create((set) => ({
  filter: initialFilter,

  setPage: (selected) => {
    set((state) => {
      return {
        filter: {
          ...state.filter,
          page: selected,
        },
      };
    });
  },

  setQuery: (newQuery) => {
    set((state) => {
      return {
        filter: {
          ...state.filter,
          query: newQuery,
          page: PAGE,
        },
      };
    });
  },

  setSortBy: (newSortBy) => {
    set((state) => {
      return {
        filter: {
          ...state.filter,
          sortBy: newSortBy,
        },
      };
    });
  },

  reset: () => {
    set(() => {
      return {
        filter: initialFilter,
      };
    });
  },

  resetNumericFilters: () => {
    set((state) => {
      return {
        filter: {
          ...state.filter,
          numericFilters: "",
          sortFor: "all",
        },
      };
    });
  },

  setCreatedAtGreaterThanTimestamp: (timestamp, sortFor) => {
    set((state) => {
      return {
        filter: {
          ...state.filter,
          numericFilters: `created_at_i>${timestamp}`,
          sortFor,
        },
      };
    });
  },

  setCreatedAtAsRange: (startTimestamp, endTimestamp) => {
    const isSingleDate = startTimestamp === endTimestamp;

    set((state) => {
      return {
        filter: {
          ...state.filter,
          numericFilters: isSingleDate
            ? `created_at_i=${startTimestamp}`
            : `created_at_i>=${startTimestamp},created_at_i<=${endTimestamp}`,
          sortFor: "",
        },
      };
    });
  },
}));
