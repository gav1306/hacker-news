import { Button } from "@/components/ui/button";
import DateRange from "./date-range";
import SearchInput from "./search-input";
import SortDropdown from "./sort-dropdown";
import { useFilterStore } from "@/store/use-filter.store";

const Filter = () => {
  const { filter, setQuery, reset } = useFilterStore();
  return (
    <div className="mt-6 flex gap-3 w-full max-w-4xl bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20">
      <SortDropdown />
      <DateRange />
      <SearchInput onQuery={setQuery} query={filter.query} />
      <Button
        variant="destructive"
        className="bg-red-600 hover:bg-red-700"
        onClick={reset}
      >
        Reset
      </Button>
    </div>
  );
};

export default Filter;
