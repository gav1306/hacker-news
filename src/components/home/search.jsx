import { Button } from "@/components/ui/button";
import PickADateRange from "./filter/pick-a-date-range";
import InputField from "./input";
import SortDropdown from "./filter/sort-dropdown";

const Search = () => {
  return (
    <section className="flex w-full mt-36 gap-4">
      <PickADateRange />
      <SortDropdown />
      <div className="flex gap-2">
        <InputField />
        <Button>Clear</Button>
      </div>
    </section>
  );
};

export default Search;
